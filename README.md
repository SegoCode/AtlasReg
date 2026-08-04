# AtlasReg

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#quick-start--information">Quick Start & Information</a> •
  <a href="#download">Download</a>
</p>

## About
[![Top language](https://img.shields.io/github/languages/top/SegoCode/AtlasReg?style=flat-square)](https://github.com/SegoCode/AtlasReg)
[![Repository size](https://img.shields.io/github/repo-size/SegoCode/AtlasReg?style=flat-square&label=repo%20size)](https://github.com/SegoCode/AtlasReg)
[![Commit activity per year](https://img.shields.io/github/commit-activity/y/SegoCode/AtlasReg?style=flat-square&label=commits)](https://github.com/SegoCode/AtlasReg/graphs/commit-activity)
[![License](https://img.shields.io/github/license/SegoCode/AtlasReg?style=flat-square)](https://github.com/SegoCode/AtlasReg/blob/main/LICENSE)
[![Bitcoin BTC](https://img.shields.io/badge/buy_me_a_coffee-BTC-F7931A?style=flat-square&logo=bitcoin&logoColor=white)](https://github.com/SegoCode/SegoCode/discussions/2)

AtlasReg is a repo for automating the generation of Windows Registry files (`.reg`) from YAML format configurations from [ameliorated.io](https://ameliorated.io/). In this case, it converts the [AtlasOS](https://github.com/Atlas-OS/Atlas) playbook to standalone `.reg` files.

## Features

- Converts AtlasOS registry actions from YAML into standalone `.reg` files.
- Preserves the source playbook directory structure in the generated output.
- Updates the registry files through a manually triggered GitHub Actions workflow.
- Organizes tweaks by category, including performance, privacy, networking, security and quality of life.

## Quick Start & Information

The generated registry files are available in the [`playbook`](https://github.com/SegoCode/AtlasReg/tree/main/playbook) directory.

> [!WARNING]
> Registry files modify Windows system and user settings. Review each file before importing it and create a backup or restore point when appropriate.

### Generate Registry Files Locally

Install the dependencies and run the converter with the source YAML directory and destination directory:

```shell
cd code
npm ci
node atlasreg.js <yaml-source-directory> <output-directory>
```

Example:

```shell
node atlasreg.js ../../Atlas/src/playbook/Configuration/tweaks ../playbook
```

### Generate Registry Files with GitHub Actions

1. Open the [**Actions**](https://github.com/SegoCode/AtlasReg/actions) tab in the repository.
2. Select **Generate registry files**.
3. Click **Run workflow**.

The workflow downloads the latest AtlasOS playbook

---
<p align="center"><a href="https://github.com/SegoCode/AtlasReg/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SegoCode/AtlasReg" />
</a></p>
