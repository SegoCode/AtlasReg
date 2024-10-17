const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const colors = require('colors');


// Mapping of registry root abbreviations to full names
const registryRootMap = {
  'HKLM': 'HKEY_LOCAL_MACHINE',
  'HKCU': 'HKEY_CURRENT_USER',
  'HKCR': 'HKEY_CLASSES_ROOT',
  'HKU': 'HKEY_USERS',
  'HKCC': 'HKEY_CURRENT_CONFIG'
};

function readFilesRecursively(dir, initialDir, outputDir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(colors.red(`Error reading directory ${dir}: ${err.message}`));
      return;
    }

    files.forEach((file) => {
      const filepath = path.join(dir, file);
      fs.stat(filepath, (err, stats) => {
        if (err) {
          console.error(colors.red(`Error getting information for file ${filepath}: ${err.message}`));
          return;
        }

        if (stats.isDirectory()) {
          // If it's a directory, call the function recursively
          readFilesRecursively(filepath, initialDir, outputDir);
        } else if (stats.isFile() && filepath.endsWith('.yml')) {
          // If it's a YAML file, process it
          try {
            let fileContent = fs.readFileSync(filepath, 'utf8');
            const modifiedContent = fileContent.replace(/  - !registryValue:/g, " -  registryValue:");
            const yml = yaml.load(modifiedContent);

            // Initialize the .reg file content with the description
            let regContent = 'Windows Registry Editor Version 5.00\n\n';

            // Add the description as a comment if it exists
            if (yml.description) {
              regContent += `; ${yml.description}\n\n`;
            }

            yml.actions.forEach((element) => {
              let expandedPath = expandRegistryPath(element.path);
              let output = `[${expandedPath}]\n`;
              output += `"${element.value}"=${convertData(element.data, element.type)}\n\n`;
              regContent += output;
            });

            // Get the relative path from initialDir to the current file
            const relativeDir = path.relative(initialDir, path.dirname(filepath));
            // Build the output directory path
            const outputDirectory = path.join(outputDir, relativeDir);
            // Ensure the output directory exists
            fs.mkdirSync(outputDirectory, { recursive: true });
            // Build the output file name and path
            const outputFilename = path.basename(filepath, '.yml') + '.reg';
            const outputFilepath = path.join(outputDirectory, outputFilename);
            // Write the content to the .reg file
            fs.writeFileSync(outputFilepath, regContent, 'utf8');
            console.log(colors.green(`File written: ${outputFilepath}`));
          } catch (e) {
            console.error(colors.yellow(`Skipping file: ${filepath} Contains unsupported configurations or previous steps`));
          }
        }
      });
    });
  });
}

function convertData(data, type) {
  switch (type.toUpperCase()) {
    case 'REG_SZ':
      // For REG_SZ, the value is a string enclosed in quotes
      return `"${data}"`;
    case 'REG_DWORD':
      // For REG_DWORD, the value is dword: followed by the 8-digit hexadecimal number
      return `dword:${parseInt(data, 10).toString(16).padStart(8, '0')}`;
    case 'REG_QWORD':
      // For REG_QWORD, the value is qword: followed by the 16-digit hexadecimal number
      return `qword:${BigInt(data).toString(16).padStart(16, '0')}`;
    case 'REG_BINARY':
      // For REG_BINARY, the value is hex: followed by the hexadecimal bytes separated by commas
      return `hex:${data.replace(/\s+/g, '').match(/.{1,2}/g).join(',')}`;
    case 'REG_EXPAND_SZ':
      // For REG_EXPAND_SZ, the value is hex(2): followed by the hexadecimal bytes
      return `hex(2):${stringToHex(data)}`;
    case 'REG_MULTI_SZ':
      // For REG_MULTI_SZ, the value is hex(7): followed by the hexadecimal bytes
      return `hex(7):${multiStringToHex(data)}`;
    default:
      // If the type is not specified, treat it as REG_SZ
      return `"${data}"`;
  }
}

// Helper function to convert a string to hexadecimal format (UTF-16LE)
function stringToHex(str) {
  return Buffer.from(str + '\0', 'utf16le').toString('hex').match(/.{1,2}/g).join(',').toLowerCase();
}

// Helper function to convert multiple strings to hexadecimal format for REG_MULTI_SZ
function multiStringToHex(data) {
  let strings = Array.isArray(data) ? data : [data];
  let hexArray = strings.map(s => stringToHex(s));
  // Add additional null terminator
  hexArray.push('00,00');
  return hexArray.join(',');
}

// Function to expand registry root abbreviations
function expandRegistryPath(regPath) {
  // Split the path into parts
  const pathParts = regPath.split('\\');
  const root = pathParts[0].toUpperCase();

  // Replace the root if it's in the mapping
  if (registryRootMap[root]) {
    pathParts[0] = registryRootMap[root];
  }

  // Reconstruct the path
  return pathParts.join('\\');
}

const args = process.argv.slice(2);
const initialDir = args[0];
const outputDir = args[1];

readFilesRecursively(initialDir, initialDir, outputDir); //Entry point
