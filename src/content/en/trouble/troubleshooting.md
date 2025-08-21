# Troubleshooting

This page helps resolve common issues when using the Pantheon-CLI tutorial tool.

## Installation Troubleshooting

### Python Environment Issues

**Check Python Version**:
```bash
# Check Python version
python --version
python3 --version

# Pantheon-CLI requires Python 3.8+
# If version is too old, need to upgrade Python
```

**Common Installation Errors**:
```bash
# Error 1: Python version incompatible
ERROR: Package 'pantheon-cli' requires Python '>=3.8'

# Solution: Upgrade Python version
# Ubuntu/Debian
sudo apt update && sudo apt install python3.8 python3.8-pip

# macOS (using Homebrew)
brew install python@3.8

# Windows: Download latest version from python.org
```

### pip Installation Issues

**Basic Installation Troubleshooting**:
```bash
# 1. Upgrade pip to latest version
pip install --upgrade pip

# 2. Check pip version
pip --version

# 3. Clear pip cache
pip cache purge

# 4. Try user-level installation
pip install --user pantheon-cli
```

**Network Connection Issues**:
```bash
# Use China mirror source (for China mainland users)
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli

# Or configure permanent mirror source
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### Permission Issues Resolution

**Linux/macOS Permission Errors**:
```bash
# Recommended: User-level installation
pip install --user pantheon-cli

# Add user bin directory to PATH
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Check if PATH is correct
echo $PATH | grep -o "$HOME/.local/bin"
```

**Windows Permission Issues**:
```bash
# Method 1: Run CMD/PowerShell as administrator
# Right-click "Command Prompt" → "Run as administrator"
pip install pantheon-cli

# Method 2: User-level installation
pip install --user pantheon-cli
```

## Runtime Troubleshooting

### Command Not Found Error

**Diagnostic Steps**:
```bash
# 1. Check if Pantheon-CLI is installed
pip show pantheon-cli

# 2. Find executable file location
which pantheon-cli
whereis pantheon-cli

# 3. Check Python package installation location
python -c "import pantheon_cli; print(pantheon_cli.__file__)"
```

**Solutions**:
```bash
# Method 1: Add to PATH
export PATH="$HOME/.local/bin:$PATH"

# Method 2: Use python -m to run
python -m pantheon_cli --version

# Method 3: Create symbolic link
ln -s ~/.local/bin/pantheon-cli /usr/local/bin/pantheon-cli
```

### Virtual Environment Configuration

**Create Dedicated Virtual Environment** (Recommended):
```bash
# 1. Create virtual environment
python -m venv pantheon-env

# 2. Activate virtual environment
# Linux/macOS:
source pantheon-env/bin/activate
# Windows:
pantheon-env\Scripts\activate

# 3. Install in virtual environment
pip install pantheon-cli

# 4. Verify installation
pantheon-cli --version
```

**Virtual Environment Troubleshooting**:
```bash
# Check current environment
which python
which pip

# Confirm in virtual environment
echo $VIRTUAL_ENV

# Recreate environment (if corrupted)
deactivate
rm -rf pantheon-env
python -m venv pantheon-env
source pantheon-env/bin/activate
pip install pantheon-cli
```

## Dependency Issues Resolution

### Missing Dependencies Detection

**Check Core Dependencies**:
```bash
# Check Python scientific computing packages
python -c "import pandas; print('pandas:', pandas.__version__)"
python -c "import numpy; print('numpy:', numpy.__version__)"
python -c "import matplotlib; print('matplotlib:', matplotlib.__version__)"

# Check bioinformatics packages
python -c "import scanpy; print('scanpy:', scanpy.__version__)"
python -c "import anndata; print('anndata:', anndata.__version__)"
```

**Batch Install Dependencies**:
```bash
# Install data science packages
pip install pandas numpy matplotlib seaborn scipy

# Install bioinformatics packages
pip install scanpy anndata biopython

# Install machine learning packages
pip install scikit-learn

# If requirements file exists
pip install -r requirements.txt
```

### Version Conflict Resolution

**Diagnose Version Conflicts**:
```bash
# Check package dependency conflicts
pip check

# View specific package dependencies
pip show pandas
pip show scanpy
```

**Resolve Version Conflicts**:
```bash
# Method 1: Upgrade all packages to compatible versions
pip install --upgrade pandas numpy matplotlib

# Method 2: Specify compatible versions
pip install pandas==1.5.0 numpy==1.21.0

# Method 3: Use pip-tools for dependency management
pip install pip-tools
pip-compile --upgrade requirements.in
pip-sync requirements.txt
```

## Tutorial Environment Troubleshooting

### Terminal Emulator Issues

**Browser Console Diagnosis**:
```javascript
// Open browser console (F12)
// Check Console tab for JavaScript errors

// Common error types:
// - ReferenceError: Variable undefined
// - TypeError: Type errors
// - NetworkError: Connection issues
```

**Terminal Responsiveness Check**:
```bash
# Test if terminal is working
echo "Terminal is responsive"

# If terminal hangs, try page refresh
# Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (macOS)
```

### Python Environment in Tutorial

**Python Package Availability**:
```bash
# Check if Python is available in tutorial environment
python --version

# Test basic packages
python -c "import sys; print(sys.version)"
python -c "import pandas, numpy, matplotlib; print('Packages available')"
```

**Data File Access Issues**:
```bash
# Check current directory
pwd

# List available files
ls -la

# Check if sample data exists
ls *.csv *.txt *.json
```

## Data Processing Troubleshooting

### File Reading Issues

**File Path Issues**:
```bash
# Check if file exists
ls -la data.csv

# Use absolute path if needed
python -c "import os; print(os.path.abspath('data.csv'))"

# Check file permissions
chmod 644 data.csv

# Check file encoding
file -bi data.csv
```

**Memory Usage Optimization**:
```python
# Process large files in chunks
import pandas as pd
for chunk in pd.read_csv('large_file.csv', chunksize=10000):
    # Process chunk
    print(f"Processing chunk of size: {len(chunk)}")

# Select only needed columns
df = pd.read_csv('data.csv', usecols=['col1', 'col2', 'col3'])

# Check system memory
import psutil
memory = psutil.virtual_memory()
print(f"Available memory: {memory.available / 1024**3:.2f} GB")
```

### Encoding Issues Resolution

**Detect and Convert Encoding**:
```bash
# Detect file encoding
chardet data.csv

# Convert encoding to UTF-8 (Linux/macOS)
iconv -f GBK -t UTF-8 input.csv > output.csv

# In Python, specify encoding
import pandas as pd
df = pd.read_csv('data.csv', encoding='gbk')
```

## Performance Optimization Troubleshooting

### Slow Execution

**Performance Diagnosis**:
```bash
# Check system resource usage
top
htop
iostat

# Monitor memory usage in browser
# Open browser developer tools → Performance tab

# Check disk I/O (Linux)
iotop
```

**Performance Optimization**:
```python
# Enable multithreading for pandas operations
import pandas as pd
import numpy as np

# Use efficient data types
df = pd.read_csv('data.csv', dtype={'id': 'int32', 'score': 'float32'})

# Process data in chunks
chunk_size = 10000
for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
    # Process chunk efficiently
    result = chunk.groupby('category').mean()
```

### Memory Insufficient Issues

**Memory Usage Check**:
```python
# Check memory usage in Python
import psutil
import os

process = psutil.Process(os.getpid())
memory_info = process.memory_info()
print(f"Memory usage: {memory_info.rss / 1024**2:.2f} MB")

# Check DataFrame memory usage
import pandas as pd
df = pd.DataFrame({'A': range(1000), 'B': range(1000)})
print(f"DataFrame memory: {df.memory_usage(deep=True).sum()} bytes")
```

**Memory Optimization Strategies**:
```python
# Optimize data types
df = df.astype({'int_col': 'int32', 'float_col': 'float32'})

# Process data in chunks
def process_large_file(filename, chunk_size=10000):
    results = []
    for chunk in pd.read_csv(filename, chunksize=chunk_size):
        # Process chunk
        processed = chunk.groupby('category').mean()
        results.append(processed)
    return pd.concat(results)

# Free memory when done
del df
import gc
gc.collect()
```

## System Compatibility

### Operating System Specific Issues

**Linux Systems**:
```bash
# Check distribution
lsb_release -a

# Install necessary system packages
sudo apt install python3-dev build-essential

# Resolve library dependency issues
sudo apt install libffi-dev libssl-dev
```

**macOS Systems**:
```bash
# Install Xcode command line tools
xcode-select --install

# Use Homebrew to manage dependencies
brew install python@3.9

# Resolve OpenMP issues (if needed)
brew install libomp
```

**Windows Systems**:
```bash
# Install Microsoft C++ Build Tools (if needed)
# Download and install from Microsoft website

# Use Anaconda environment
conda install pandas numpy matplotlib
```

## Debugging and Logging

### Enable Verbose Logging

```python
# Python logging configuration
import logging

# Set log level for debugging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Record debug information
logger.debug("Starting data processing")
logger.info("Processing file: data.csv")
logger.warning("Large file detected, using chunked processing")
logger.error("Failed to process row 1000")
```

### Log File Analysis

```bash
# Check browser console for JavaScript errors
# F12 → Console tab

# Python error logging
python -c "
import logging
logging.basicConfig(filename='debug.log', level=logging.DEBUG)
logger = logging.getLogger()
try:
    import pandas as pd
    df = pd.read_csv('nonexistent.csv')
except Exception as e:
    logger.error(f'Error loading file: {e}')
print('Check debug.log for error details')
"
```

## Getting Support

### Self-Diagnosis

**Run System Check**:
```bash
# Collect basic information
pantheon-cli --version  # Only available command
python --version
pip --version
uname -a

# Generate diagnostic report
cat > diagnostic_info.txt << EOF
Pantheon-CLI Version: $(pantheon-cli --version)
Python Version: $(python --version)
OS: $(uname -a)
Installed Packages:
$(pip list)
EOF
```

### Community Help

**Prepare Report Information**:
1. Complete error messages
2. Specific commands run
3. System environment information
4. Steps to reproduce
5. Expected results vs actual results

**Help Channels**:
- GitHub Issues
- Community Forums
- Stack Overflow (tag: pantheon-cli)
- Official Documentation

**Remember**: Pantheon-CLI is a tutorial tool providing a terminal environment for learning data analysis. It has only one command: `pantheon-cli --version`. All data analysis work happens within the provided terminal environment using standard Python, R, and shell commands.