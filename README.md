# {reponame}

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#quick-start--information">Quick Start & Information</a> •
  <a href="#download">Download</a>
</p>

## About
[![Top language](https://img.shields.io/github/languages/top/{username}/{reponame}?style=flat-square)](https://github.com/{username}/{reponame})
[![Repository size](https://img.shields.io/github/repo-size/{username}/{reponame}?style=flat-square&label=repo%20size)](https://github.com/{username}/{reponame})
[![Commit activity per year](https://img.shields.io/github/commit-activity/y/{username}/{reponame}?style=flat-square&label=commits)](https://github.com/{username}/{reponame}/graphs/commit-activity)
[![Commits since tagged version](https://img.shields.io/github/commits-since/{username}/{reponame}/latest?style=flat-square&label=commits%20since%20tag)](https://github.com/{username}/{reponame}/releases)
[![GitHub downloads](https://img.shields.io/github/downloads/{username}/{reponame}/total?style=flat-square&label=downloads)](https://github.com/{username}/{reponame}/releases)
[![License](https://img.shields.io/github/license/{username}/{reponame}?style=flat-square)](https://github.com/{username}/{reponame}/blob/main/LICENSE)
[![Bitcoin BTC](https://img.shields.io/badge/buy_me_a_coffee-BTC-F7931A?style=flat-square&logo=bitcoin&logoColor=white)](https://github.com/SegoCode/SegoCode/discussions/2)

AtlasReg is a repo for automating the generation of Windows Registry files (`.reg`) from YAML format configurations from [ameliorated.io](https://ameliorated.io/). In this case, it converts the [AtlasOS](https://github.com/Atlas-OS/Atlas) playbook to standalone `.reg` files.

## Features

- Converts AtlasOS registry actions from YAML into standalone `.reg` files.
- Preserves the source playbook directory structure in the generated output.
- Updates the registry files through a manually triggered GitHub Actions workflow.
- Organizes tweaks by category, including performance, privacy, networking, security and quality of life.

## Quick Start & Information

The generated registry files are available in the [`playbook`](https://github.com/{username}/{reponame}/tree/main/playbook) directory.

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

1. Open the [**Actions**](https://github.com/{username}/{reponame}/actions) tab in the repository.
2. Select **Generate registry files**.
3. Click **Run workflow**.

The workflow downloads the latest AtlasOS playbook, regenerates the files and commits changes using the Conventional Commit message `chore: update registry files`.

### Available Categories

- `debloat`
- `misc`
- `networking`
- `performance`
- `privacy`
- `qol`
- `security`

## Download

Download individual `.reg` files from the [`playbook`](https://github.com/{username}/{reponame}/tree/main/playbook) directory or browse the [latest releases](https://github.com/{username}/{reponame}/releases).

---
<p align="center"><a href="https://github.com/{username}/{reponame}/graphs/contributors">
  <img src="https://contrib.rocks/image?repo={username}/{reponame}" />
</a></p>
