# macOS Installation Guide

Detailed steps for installing Pantheon-CLI on macOS systems.

## Preparation

### 1. Install Python Environment Manager

#### Method 1: Install miniforge (Recommended)
```bash
# Download miniforge installation script
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

# Run installation script
bash Miniforge3-$(uname)-$(uname -m).sh

# Initialize shell environment
source ~/.zshrc  # or source ~/.bash_profile
```

#### Method 2: Install Python using Homebrew
```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python
brew install python@3.11
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

### 1. Ensure Python is installed
```bash
python3 --version
```

### 2. Install Pantheon-CLI
```bash
pip3 install pantheon-cli
```

### 3. Add to PATH (if needed)
Add the following to `~/.zshrc` or `~/.bash_profile`:
```bash
export PATH="$HOME/.local/bin:$PATH"
```

### 4. Reload configuration
```bash
source ~/.zshrc  # or source ~/.bash_profile
```

## Method 3: Install from source

### 1. Clone repository
```bash
git clone https://github.com/pantheon-cli/pantheon-cli.git
cd pantheon-cli
```

### 2. Create virtual environment
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
pip install -e .
```

## Apple Silicon (M1/M2/M3) Special Notes

### Compatibility Settings
For Apple Silicon chips, some dependencies may require Rosetta 2:

```bash
# Install Rosetta 2 (if not installed)
softwareupdate --install-rosetta

# Install using x86_64 architecture (if encountering compatibility issues)
arch -x86_64 pip3 install pantheon-cli
```

### Native ARM64 Version
We recommend using the native ARM64 version for optimal performance:
```bash
pip3 install --no-binary :all: pantheon-cli
```

## Configure Shell Integration

### Oh My Zsh Users
```bash
# Install Pantheon-CLI plugin
git clone https://github.com/pantheon-cli/oh-my-zsh-plugin.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/pantheon

# Edit ~/.zshrc, add plugin
plugins=(... pantheon)
```

### Auto-completion Setup
```bash
# Bash
echo 'eval "$(pantheon completion bash)"' >> ~/.bash_profile

# Zsh
echo 'eval "$(pantheon completion zsh)"' >> ~/.zshrc

# Fish
pantheon completion fish > ~/.config/fish/completions/pantheon.fish
```

## Configuration File Locations

Configuration file locations on macOS:
- Global configuration: `/etc/pantheon/config.yaml`
- User configuration: `~/.config/pantheon/config.yaml`
- Project configuration: `./pantheon/config.yaml`

## Common Problem Resolution

### Problem 1: Command not found
**Solution:**
```bash
# Check installation location
which pantheon

# Manually add to PATH
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Problem 2: Permission denied
**Solution:**
```bash
# Fix permissions
sudo chown -R $(whoami) /usr/local/bin
sudo chmod u+w /usr/local/bin
```

### Problem 3: SSL certificate error
**Solution:**
```bash
# Install certificates
pip3 install --upgrade certifi
```

### Problem 4: Dependency conflicts
**Solution:**
```bash
# Use virtual environment for isolation
python3 -m venv pantheon-env
source pantheon-env/bin/activate
pip3 install pantheon-cli
```

## Upgrade Pantheon-CLI

### Using Homebrew
```bash
brew upgrade pantheon-cli
```

### Using pip
```bash
pip3 install --upgrade pantheon-cli
```

## Uninstall Pantheon-CLI

### Via Homebrew
```bash
brew uninstall pantheon-cli
```

### Via pip
```bash
pip3 uninstall pantheon-cli
```

### Clean up configuration files
```bash
rm -rf ~/.config/pantheon
rm -rf ~/.cache/pantheon
```

## Developer Tool Integration

### VS Code
Install Pantheon-CLI extension:
```bash
code --install-extension pantheon-cli.vscode-pantheon
```

### JetBrains IDEs
Search for "Pantheon CLI Support" in the plugin marketplace

After installation is complete, go to [Verify Installation](/installation/verify) to confirm everything is working properly!