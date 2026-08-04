# AtlasReg

[![Top language](https://img.shields.io/github/languages/top/SegoCode/AtlasReg?style=flat-square)](https://github.com/SegoCode/AtlasReg)
[![Repository size](https://img.shields.io/github/repo-size/SegoCode/AtlasReg?style=flat-square&label=repo%20size)](https://github.com/SegoCode/AtlasReg)
[![Commit activity per year](https://img.shields.io/github/commit-activity/y/SegoCode/AtlasReg?style=flat-square&label=commits)](https://github.com/SegoCode/AtlasReg/graphs/commit-activity)
[![License: MIT License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](https://github.com/SegoCode/AtlasReg/blob/main/LICENSE)
[![Bitcoin BTC](https://img.shields.io/badge/buy_me_a_coffee-BTC-F7931A?style=flat-square&logo=bitcoin&logoColor=white)](https://github.com/SegoCode/SegoCode/discussions/2)

AtlasReg is a repo for automating the generation of Windows Registry files (`.reg`) from YAML format configurations from [ameliorated.io](https://ameliorated.io/). In this case, it converts the [AtlasOS](https://github.com/Atlas-OS/Atlas) playbook to standalone `.reg` files.

## Features

- Converts AtlasOS registry actions from YAML into standalone `.reg` files.
- Preserves the source playbook directory structure in the generated output.
- Updates the registry files through a manually triggered GitHub Actions workflow.
- Organizes tweaks by category, including performance, privacy, networking, security and quality of life.

## Quick Start & Information

The generated registry files are available in the [`playbook`](https://github.com/SegoCode/AtlasReg/tree/main/playbook) directory.

1. Open the [**Actions**](https://github.com/SegoCode/AtlasReg/actions) tab in the repository.
2. Select **Generate registry files**.
3. Click **Run workflow**.

The workflow downloads the latest AtlasOS playbook

---
<p align="center"><a href="https://github.com/SegoCode/AtlasReg/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SegoCode/AtlasReg" />
</a></p>
