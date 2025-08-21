# Pantheon-CLI 安装指南

## 1. 系统要求

- 操作系统：Windows 10+, macOS 10.14+, Linux
- Python 3.10+

## 2. 安装步骤

### 2.1. 安装 conda (推荐)

Pantheon-CLI与Claude Code，Gemini-CLI等同类竞品不同，Pantheon-CLI依赖于本地的Python环境。简单来说，那就是Pantheon-CLI与同类竞品的开发逻辑完全不一样。

我们推荐用户安装[miniforge](https://github.com/conda-forge/miniforge)，当然安装[Anaconda](https://www.anaconda.com/)，[miniconda](https://www.anaconda.com/docs/getting-started/miniconda/main)也是完全没问题的。


### 2.2. 安装 Pantheon-CLI

目前, Pantheon-CLI发布于pypi，任何人可以通过pip来完成安装，这十分简单

```bash
pip install pantheon-cli
```

### 2.3. 验证安装

我们直接在终端里输入`pantheon-cli`，那么就能直接打开Pantheon-CLI界面

```bash
pantheon-cli
```