# Verify Installation

After completing Pantheon-CLI installation, let's verify that everything is working properly.

## Basic Verification

### 1. Check Version

```bash
pantheon-cli --version
```

Expected output:
```
Pantheon-CLI version 1.0.0
Python 3.11.0
Platform: Darwin-23.0.0-x86_64
```

### 2. Start Pantheon-CLI

Directly enter the following command in terminal to start the interface:

```bash
pantheon-cli
```

After successful startup, you should see Pantheon-CLI's interactive interface.

### 3. Test Basic Functionality

Try the following operations in the Pantheon-CLI interface:

```bash
# Create some test data
Generate 10 random numbers

# View data statistics
Display mean and standard deviation

# Exit interface  
exit
```

## Functionality Testing

### 1. Create Test Project

```bash
# Create test directory
mkdir pantheon-test
cd pantheon-test

# Initialize project
pantheon init
```

### 2. Simple Data Analysis Test

Create test data file `test.csv`:
```csv
name,age,score
Alice,25,90
Bob,30,85
Charlie,35,95
```

Execute analysis:
```bash
Read test.csv and calculate average score
```

## Troubleshooting Checklist

Use the following checklist to troubleshoot problems:

| Check Item | Command | Expected Result |
|------------|---------|-----------------|
| PATH setting | `which pantheon` | Shows installation path |
| Python version | `python --version` | 3.8 or higher |
| pip version | `pip --version` | 20.0 or higher |
| Permission check | `ls -la ~/.pantheon` | Has read/write permissions |
| Network connection | `pantheon ping` | Connection successful |
| Log files | `pantheon logs` | No error messages |

## Common Issues Quick Fix

### Command Not Found

```bash
# Linux/macOS
echo $PATH | grep pantheon
export PATH="$HOME/.local/bin:$PATH"

# Windows PowerShell
$env:Path
$env:Path += ";C:\Program Files\Pantheon-CLI\bin"
```

### Permission Error

```bash
# Linux/macOS
chmod +x $(which pantheon)
mkdir -p ~/.pantheon && chmod 755 ~/.pantheon

# Windows (Administrator PowerShell)
icacls "$env:USERPROFILE\.pantheon" /grant "${env:USERNAME}:(F)"
```

### Module Import Error

```bash
# Reinstall core dependencies
pip install --force-reinstall pantheon-cli

# Clear cache
pip cache purge
```

## Get Detailed Logs

If you encounter problems, enable verbose logging:

```bash
# Set log level
export PANTHEON_LOG_LEVEL=DEBUG

# Run command and save logs
pantheon --debug your-command 2>&1 | tee pantheon-debug.log
```

## Submit Issue Report

If problems persist:

1. Collect diagnostic information:
```bash
pantheon diagnostic-report > report.txt
```

2. Visit [GitHub Issues](https://github.com/pantheon-cli/pantheon-cli/issues)

3. Provide the following information:
   - Operating system and version
   - Python version
   - Complete error message
   - Diagnostic report content

## Verification Successful!

If all tests pass, congratulations! Pantheon-CLI has been successfully installed and is ready to use.

Next steps:
- 📚 Learn [Basic Commands](/basic-commands)
- 🚀 Explore [Getting Started Guide](/intro/getting-started)
- 💡 Check [Use Cases](https://pantheon-cli.io/examples)