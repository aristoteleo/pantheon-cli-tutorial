# System Requirements

Before installing Pantheon-CLI, please ensure your system meets the following requirements.

## Minimum System Requirements

### Hardware Requirements
- **Processor**: 64-bit processor, Intel i5 or AMD Ryzen 5 or higher recommended
- **Memory**: At least 8GB RAM, 16GB or more recommended (data science workloads require more memory)
- **Storage**: At least 20GB available space (including Python environment and data storage)
- **Network**: Stable internet connection required during installation

### Operating System
- **Windows**: Windows 10 (1903+) or Windows 11
- **macOS**: macOS 10.14 or higher
- **Linux**: Ubuntu 18.04+, CentOS 7+, Debian 10+, Fedora 28+

## Software Dependencies

### Core Dependencies
1. **Python 3.10+** (Important: Must be Python 3.10 or higher)
   ```bash
   python --version  # Check Python version
   python3 --version # Use python3 on some systems
   ```

2. **Package Manager**
   - **conda** (recommended): miniforge, Anaconda, or miniconda
   - **pip**: If not using conda environment

### Recommended Python Environment Management
Pantheon-CLI depends on local Python environment. We recommend using any of the following environment management tools:

#### miniforge (Recommended)
```bash
# Download and install miniforge
# https://github.com/conda-forge/miniforge
```

#### Anaconda
```bash
# Download and install Anaconda
# https://www.anaconda.com/
```

#### miniconda
```bash
# Download and install miniconda  
# https://docs.conda.io/en/latest/miniconda.html
```

## Environment Preparation

### 1. Update System Package Manager

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt upgrade
```

**CentOS/RHEL:**
```bash
sudo yum update
```

**macOS:**
```bash
brew update && brew upgrade
```

### 2. Install Python (if not installed)

**Ubuntu/Debian:**
```bash
sudo apt install python3 python3-pip
```

**macOS:**
```bash
brew install python@3.11
```

**Windows:**
Download installer from [python.org](https://www.python.org/downloads/)

### 3. Create Virtual Environment (Recommended)

```bash
# Create virtual environment
python -m venv pantheon-env

# Activate virtual environment
# Linux/macOS:
source pantheon-env/bin/activate
# Windows:
pantheon-env\Scripts\activate
```

## Permission Settings

Ensure you have the following permissions:
- Read/write permissions to user home directory
- Access permissions to temporary directory
- Network access permissions (for downloading dependencies)

## Common Issues

### Python version too old?
Use pyenv to manage multiple Python versions:
```bash
curl https://pyenv.run | bash
pyenv install 3.11.0
pyenv global 3.11.0
```

### Insufficient permissions?
On Linux/macOS, avoid using sudo for installation, use virtual environment instead.

Once ready, continue with the [installation process](/installation)!