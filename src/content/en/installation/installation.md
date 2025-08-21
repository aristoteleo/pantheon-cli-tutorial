# Pantheon-CLI Complete Installation Guide

Welcome to Pantheon-CLI! This guide will help you successfully install Pantheon-CLI on any operating system.

## What is Pantheon-CLI?

Unlike competing products like Claude Code and Gemini-CLI, **Pantheon-CLI depends on a local Python environment**. Simply put, Pantheon-CLI has a completely different development philosophy from similar competing products.

This design enables you to:
- **Complete local processing**: All data analysis is performed on your machine
- **Seamless Python ecosystem integration**: Direct use of pandas, numpy, matplotlib and other libraries
- **Mixed programming**: Perfect combination of natural language and code
- **High-performance computing**: Full utilization of local hardware resources

## Quick Installation (Recommended Path)

### Step 1: Install Python Environment Manager

We strongly recommend using **miniforge**, though installing Anaconda or miniconda is also perfectly fine:

#### Option 1: miniforge (Recommended)
- **Windows**: Download [Miniforge3-Windows-x86_64.exe](https://github.com/conda-forge/miniforge/releases)
- **macOS**: `curl -L -O https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh && bash Miniforge3-MacOSX-arm64.sh`
- **Linux**: `curl -L -O https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh && bash Miniforge3-Linux-x86_64.sh`

#### Option 2: Anaconda
Visit [Anaconda official website](https://www.anaconda.com/download/) to download the installer for your system

#### Option 3: miniconda  
Visit [miniconda official website](https://docs.conda.io/projects/miniconda/en/latest/) to download the lightweight version

### Step 2: Create Dedicated Environment

```bash
# Create dedicated environment for Pantheon-CLI
conda create -n pantheon python=3.11

# Activate environment
conda activate pantheon
```

### Step 3: Install Pantheon-CLI

Currently, Pantheon-CLI is published on PyPI and installation is very simple:

```bash
pip install pantheon-cli
```

### Step 4: Verify Installation

```bash
# Check version
pantheon-cli --version

# Start Pantheon-CLI
pantheon-cli
```

Success! 🎉 You can now start using Pantheon-CLI.

## System Requirements

Before starting installation, please ensure your system meets the following requirements:

### Hardware Requirements
- **Processor**: 64-bit processor
- **Memory**: At least 8GB RAM, 16GB+ recommended (data science workloads require more memory)
- **Storage**: At least 20GB available space
- **Network**: Stable internet connection required during installation

### Software Requirements
- **Python**: 3.10 or higher (**Important**)
- **Operating System**:
  - Windows 10 (1903+) or Windows 11
  - macOS 10.14+ 
  - Linux: Ubuntu 18.04+, CentOS 7+, Debian 10+, Fedora 28+

## Detailed Installation Guide

Select detailed installation instructions based on your operating system:

- [System Requirements Details](/installation/requirements)
- [Windows Installation Guide](/installation/windows)  
- [macOS Installation Guide](/installation/macos)
- [Linux Installation Guide](/installation/linux)
- [Verify Installation](/installation/verify)

## Frequently Asked Questions

### Q: Why is Python 3.10+ required?
A: Pantheon-CLI uses the latest Python features to provide optimal performance and user experience.

### Q: Can I use the system's built-in Python?
A: Yes, but we strongly recommend using conda environment manager to avoid version conflicts.

### Q: Command not found after installation?
A: Ensure:
1. Python environment is properly activated
2. PATH environment variable includes Python's bin directory
3. Restart terminal and try again

### Q: Permission errors?
A: Avoid using sudo, use virtual environment or user-level installation:
```bash
pip install --user pantheon-cli
```

## Next Steps

After installation is complete, you can:

1. 🚀 [Getting Started](/intro/getting-started) - 10-minute hands-on guide
2. 📚 [Basic Commands](/basic-commands) - Learn core functionality  
3. 💡 [What is Pantheon-CLI](/intro/what-is-cli) - Deep dive into tool features

Start your data science journey!