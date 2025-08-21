# Windows Installation Guide

Detailed steps for installing Pantheon-CLI on Windows systems.

## Preparation

### 1. Install Python Environment Manager

#### Method 1: Install miniforge (Recommended)
1. Visit [miniforge releases](https://github.com/conda-forge/miniforge/releases)
2. Download `Miniforge3-Windows-x86_64.exe`
3. Run the installer with default settings
4. Restart Command Prompt or PowerShell

#### Method 2: Install Anaconda
1. Visit [Anaconda official website](https://www.anaconda.com/download/)
2. Download Windows installer
3. Run installer, check "Add Anaconda to PATH"
4. Restart command line after installation

### 2. Verify Python Environment
Open Anaconda Prompt or PowerShell:
```powershell
python --version
# Should show Python 3.10+
```

## Install Pantheon-CLI

### Method 1: Using pip (Recommended)

1. **Open Anaconda Prompt**
   - Search for "Anaconda Prompt" in Start menu
   - Or press `Win + R`, type `cmd`

2. **Create dedicated environment** (Recommended)
   ```bash
   conda create -n pantheon python=3.11
   conda activate pantheon
   ```

3. **Install Pantheon-CLI**
   ```bash
   pip install pantheon-cli
   ```

4. **Verify installation**
   ```bash
   pantheon-cli --version
   ```

### Method 2: Direct pip installation

If you already have a suitable Python environment:

```powershell
pip install pantheon-cli
```

## Method 3: Using Chocolatey

If you have Chocolatey package manager installed:

```powershell
choco install pantheon-cli
```

## Windows Terminal Configuration (Optional)

For a better experience, we recommend using Windows Terminal:

### 1. Install Windows Terminal
Install Windows Terminal from Microsoft Store

### 2. Configure Pantheon-CLI shortcut
Add new profile in Windows Terminal settings:
```json
{
  "name": "Pantheon CLI",
  "commandline": "pantheon interactive",
  "icon": "C:\\Program Files\\Pantheon-CLI\\icon.ico",
  "startingDirectory": "%USERPROFILE%\\Documents\\pantheon-projects"
}
```

## WSL2 Installation (Linux Subsystem)

If you use WSL2:

### 1. Enter WSL2 environment
```powershell
wsl
```

### 2. Install using Linux method
```bash
curl -sSL https://pantheon-cli.io/install.sh | bash
```

## Configuration File Locations

Configuration file locations on Windows:
- Global configuration: `%PROGRAMDATA%\Pantheon-CLI\config.yaml`
- User configuration: `%USERPROFILE%\.pantheon\config.yaml`
- Project configuration: `project-directory\.pantheon\config.yaml`

## Common Problem Resolution

### Problem 1: 'pantheon' is not recognized as internal or external command
**Solution:**
1. Confirm installation path
2. Manually add to PATH environment variable
3. Restart PowerShell

### Problem 2: Permission error
**Solution:**
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Problem 3: pip installation failed
**Solution:**
```powershell
# Upgrade pip
python -m pip install --upgrade pip

# Use domestic mirror
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli
```

### Problem 4: Firewall blocking
**Solution:**
Add exception in Windows Defender Firewall:
1. Control Panel → System and Security → Windows Defender Firewall
2. Allow an app → Add Pantheon-CLI

## Upgrade Pantheon-CLI

### Using pip upgrade
```powershell
pip install --upgrade pantheon-cli
```

### Using installer upgrade
Download the latest version installer and perform overwrite installation.

## Uninstall Pantheon-CLI

### Via Control Panel
Control Panel → Programs → Uninstall a program → Find Pantheon-CLI

### Via pip
```powershell
pip uninstall pantheon-cli
```

After installation is complete, go to [Verify Installation](/installation/verify) to confirm everything is working properly!