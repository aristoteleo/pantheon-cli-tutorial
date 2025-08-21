# Linux Installation Guide

Detailed steps for installing Pantheon-CLI on Linux systems.

## Preparation

### 1. Install Python Environment Manager

#### Ubuntu/Debian Systems

**Method 1: Install miniforge (Recommended)**
```bash
# Download miniforge
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

# Install
bash Miniforge3-$(uname)-$(uname -m).sh

# Reload shell configuration
source ~/.bashrc
```

**Method 2: Install Python using APT**
```bash
# Update package list
sudo apt update

# Install Python 3.11
sudo apt install python3.11 python3.11-pip python3.11-venv

# Set default Python version (optional)
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1
```

#### CentOS/RHEL/Fedora Systems

**Install miniforge (Recommended)**
```bash
# Download miniforge
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

# Install
bash Miniforge3-$(uname)-$(uname -m).sh

# Reload shell configuration
source ~/.bashrc
```

**Use system package manager**
```bash
# CentOS/RHEL 7/8
sudo yum install python3.11 python3.11-pip

# Fedora
sudo dnf install python3.11 python3-pip

# CentOS/RHEL 9
sudo dnf install python3.11 python3-pip
```

### 2. Verify Python Environment
```bash
python3 --version
# Should show Python 3.10+
```

## Install Pantheon-CLI

### Method 1: Using conda (Recommended)

1. **Create dedicated environment**
   ```bash
   conda create -n pantheon python=3.11
   conda activate pantheon
   ```

2. **Install Pantheon-CLI**
   ```bash
   pip install pantheon-cli
   ```

3. **Verify installation**
   ```bash
   pantheon-cli --version
   ```

### Method 2: Using pip

If you have a suitable Python environment:
```bash
pip3 install pantheon-cli
```

### Method 3: Using RPM package

```bash
# Download latest version
wget https://pantheon-cli.io/releases/latest/pantheon-cli.rpm

# Install
sudo rpm -ivh pantheon-cli.rpm
```

## Arch Linux

### Using AUR

```bash
# Using yay
yay -S pantheon-cli

# Or using paru
paru -S pantheon-cli

# Manual installation
git clone https://aur.archlinux.org/pantheon-cli.git
cd pantheon-cli
makepkg -si
```

## Universal Installation Method

### Using pip

```bash
# Install pip (if not installed)
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py

# Install Pantheon-CLI
pip3 install pantheon-cli

# Add to PATH
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Using installation script

```bash
# One-click installation script
curl -sSL https://pantheon-cli.io/install.sh | bash

# Or using wget
wget -qO- https://pantheon-cli.io/install.sh | bash
```

### Compile from source

```bash
# Install build dependencies
sudo apt-get install build-essential python3-dev  # Ubuntu/Debian
sudo yum groupinstall "Development Tools"         # CentOS/RHEL

# Clone source code
git clone https://github.com/pantheon-cli/pantheon-cli.git
cd pantheon-cli

# Compile and install
python3 setup.py build
sudo python3 setup.py install
```

## Docker Installation

### Using official image

```bash
# Pull image
docker pull pantheon/cli:latest

# Run container
docker run -it --rm \
  -v $(pwd):/workspace \
  -v $HOME/.pantheon:/root/.pantheon \
  pantheon/cli:latest

# Create alias (optional)
alias pantheon='docker run -it --rm -v $(pwd):/workspace pantheon/cli:latest'
```

### Build custom image

```dockerfile
# Dockerfile
FROM python:3.11-slim
RUN pip install pantheon-cli
WORKDIR /workspace
ENTRYPOINT ["pantheon"]
```

```bash
# Build image
docker build -t my-pantheon .
```

## Configure System Service

### Create systemd service (optional)

```bash
# Create service file
sudo tee /etc/systemd/system/pantheon-server.service << EOF
[Unit]
Description=Pantheon CLI Server
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=/home/$USER
ExecStart=/usr/local/bin/pantheon server
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

# Start service
sudo systemctl enable pantheon-server
sudo systemctl start pantheon-server
```

## Environment Variable Configuration

Add to `~/.bashrc` or `~/.zshrc`:

```bash
# Pantheon CLI environment variables
export PANTHEON_HOME="$HOME/.pantheon"
export PANTHEON_DATA="$HOME/pantheon-data"
export PANTHEON_LOG_LEVEL="INFO"

# Alias settings
alias pan='pantheon'
alias pani='pantheon interactive'
alias pana='pantheon analyze'
```

## Common Problem Resolution

### Problem 1: Python version too old

```bash
# Install Python 3.8+
sudo add-apt-repository ppa:deadsnakes/ppa  # Ubuntu
sudo apt update
sudo apt install python3.11 python3.11-venv
```

### Problem 2: Missing dependency libraries

```bash
# Ubuntu/Debian
sudo apt-get install python3-pip python3-dev libssl-dev libffi-dev

# CentOS/RHEL
sudo yum install python3-pip python3-devel openssl-devel
```

### Problem 3: Permission issues

```bash
# Use user installation instead of system installation
pip3 install --user pantheon-cli

# Or use virtual environment
python3 -m venv ~/pantheon-env
source ~/pantheon-env/bin/activate
pip install pantheon-cli
```

### Problem 4: Network connection issues

```bash
# Use domestic mirror source
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli

# Configure proxy
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
```

## Upgrade and Uninstall

### Upgrade

```bash
# Using package manager
sudo apt upgrade pantheon-cli      # Ubuntu/Debian
sudo yum update pantheon-cli       # CentOS/RHEL

# Using pip
pip3 install --upgrade pantheon-cli
```

### Uninstall

```bash
# Using package manager
sudo apt remove pantheon-cli       # Ubuntu/Debian
sudo yum remove pantheon-cli       # CentOS/RHEL

# Using pip
pip3 uninstall pantheon-cli

# Clean up configuration
rm -rf ~/.pantheon
rm -rf ~/.cache/pantheon
```

After installation is complete, go to [Verify Installation](/installation/verify) to confirm everything is working properly!