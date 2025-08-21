# Debugging Guide

This page provides debugging methods and techniques for common issues in the Pantheon-CLI tutorial.

## Debugging Terminal Emulator

### Check Browser Console

When terminal issues occur, first check the browser developer tools:

```javascript
// Open browser console (F12)
// Check Console tab for error messages

// Common error types:
// - ReferenceError: Variable undefined
// - TypeError: Type error
// - NetworkError: Network connection issues
```

### Terminal Status Diagnosis

```bash
# Check if terminal is responsive
# Input simple commands in terminal to test
echo "Terminal is working"

# If terminal is unresponsive, try refreshing the page
# Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (macOS)
```

## Debugging Learning Content

### Command Execution Issues

**Problem**: Commands cannot execute normally or return errors

**Debugging Steps**:

1. **Check Command Syntax**
```bash
# Ensure correct spelling
python --version  # Correct
phyton --version  # Typo

# Check parameter format
ls -la           # Correct
ls-la            # Missing space
```

2. **Verify File Paths**
```bash
# Check current directory
pwd

# List files
ls -la

# Check if file exists
ls data.csv
```

3. **View Complete Error Information**
```bash
# Run command and view detailed output
python script.py 2>&1

# Or use debug mode
python -v script.py
```

### Data Analysis Debugging

**Python Debugging Tips**:

```python
# 1. Use print statements for debugging
print("Variable value:", variable_name)
print("Data type:", type(data))
print("Data shape:", data.shape)

# 2. Inspect data
print(data.head())      # View first few rows
print(data.info())      # View data info
print(data.describe())  # Statistical description

# 3. Step-by-step execution
# Break complex operations into simple steps
step1 = data.groupby('column1')
print("Grouping result:", step1.size())
step2 = step1.mean()
print("Mean result:", step2)
```

**R Debugging Tips**:

```r
# 1. View object structure
str(data)
class(data)
dim(data)

# 2. Debug functions
debug(my_function)     # Enter debug mode
undebug(my_function)   # Exit debug mode

# 3. Error handling
tryCatch({
  result <- risky_operation()
}, error = function(e) {
  print(paste("Error:", e$message))
})
```

## Performance Debugging

### Memory Usage Monitoring

```python
# Python memory monitoring
import psutil
import os

# Get current process memory usage
process = psutil.Process(os.getpid())
memory_info = process.memory_info()
print(f"Memory usage: {memory_info.rss / 1024 / 1024:.2f} MB")

# Monitor DataFrame memory
import pandas as pd
df = pd.read_csv('data.csv')
print(f"DataFrame memory: {df.memory_usage(deep=True).sum() / 1024 / 1024:.2f} MB")
```

### Execution Time Analysis

```python
# Time measurement
import time

start_time = time.time()
# Execute code
result = complex_operation()
end_time = time.time()

print(f"Execution time: {end_time - start_time:.2f} seconds")

# Use timeit for precise measurement
import timeit
execution_time = timeit.timeit(lambda: your_function(), number=100)
print(f"Average execution time: {execution_time/100:.4f} seconds")
```

## Network Debugging

### Check Network Connection

```bash
# Test network connection
ping google.com

# Check DNS resolution
nslookup google.com

# Test specific port
telnet example.com 80
```

### Proxy Settings Debugging

```bash
# Check proxy settings
echo $HTTP_PROXY
echo $HTTPS_PROXY

# Temporarily set proxy
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080

# Unset proxy
unset HTTP_PROXY
unset HTTPS_PROXY
```

## Logging and Diagnostics

### Enable Verbose Logging

```python
# Python logging configuration
import logging

# Set log level
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Record debug information
logger.debug("Debug info")
logger.info("General info")
logger.warning("Warning info")
logger.error("Error info")
```

### Generate Diagnostic Report

```bash
# System information collection
echo "=== System Info ===" > diagnostic.txt
uname -a >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== Python Version ===" >> diagnostic.txt
python --version >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== Pantheon-CLI Version ===" >> diagnostic.txt
pantheon-cli --version >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== Installed Packages ===" >> diagnostic.txt
pip list >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== Memory Usage ===" >> diagnostic.txt
free -h >> diagnostic.txt
```

## Common Debugging Scenarios

### 1. Data Loading Failure

```python
# Debugging steps
try:
    data = pd.read_csv('file.csv')
except FileNotFoundError:
    print("File not found, check path")
except pd.errors.EmptyDataError:
    print("File is empty")
except pd.errors.ParserError as e:
    print(f"Parse error: {e}")
    # Try different separator
    data = pd.read_csv('file.csv', sep=';')
```

### 2. Plot Display Issues

```python
import matplotlib.pyplot as plt

# Debug plotting issues
try:
    plt.figure(figsize=(10, 6))
    plt.plot(data)
    plt.show()
except Exception as e:
    print(f"Plot error: {e}")
    # Try saving instead of displaying
    plt.savefig('plot.png')
    print("Plot saved as plot.png")
```

### 3. Package Import Failure

```python
# Debug import issues
try:
    import pandas as pd
except ImportError:
    print("pandas not installed, run: pip install pandas")

try:
    import numpy as np
except ImportError:
    print("numpy not installed, run: pip install numpy")
```

## Environment Debugging

### Check Python Environment

```bash
# Check Python version
python --version

# Check pip version
pip --version

# Check installed packages
pip list | grep -E "(pandas|numpy|matplotlib)"

# Check package version compatibility
pip check
```

### Virtual Environment Debugging

```bash
# Check if in virtual environment
echo $VIRTUAL_ENV

# Create new virtual environment if needed
python -m venv tutorial-env
source tutorial-env/bin/activate  # Linux/macOS
# or tutorial-env\Scripts\activate  # Windows

# Install dependencies
pip install pandas numpy matplotlib seaborn scikit-learn
```

## Debugging Best Practices

### 1. Systematic Debugging

1. **Reproduce the issue** - Ensure you can consistently reproduce the error
2. **Isolate the problem** - Find the minimal code snippet causing the issue
3. **Check assumptions** - Verify your assumptions about code behavior
4. **Debug step by step** - Change only one variable at a time

### 2. Effective Error Reporting

Include the following information:
- Complete error message
- Steps to reproduce
- Sample input data
- Expected output
- Actual output
- System environment information

### 3. Preventive Debugging

```python
# Add assertion checks
assert len(data) > 0, "Data cannot be empty"
assert 'column1' in data.columns, "Missing required column"

# Parameter validation
def process_data(data, threshold=0.5):
    if not isinstance(data, pd.DataFrame):
        raise TypeError("data must be DataFrame")
    if not 0 <= threshold <= 1:
        raise ValueError("threshold must be between 0-1")
    # Processing logic...
```

## Tool-Specific Debugging

### Pantheon-CLI Tutorial Tool

**Remember**: Pantheon-CLI is a tutorial tool that:
- Has only one command: `pantheon-cli --version`
- Provides a web terminal environment for learning
- All data analysis happens within the terminal environment using standard Python, R, and shell commands

**Common Misconceptions**:
```bash
# Wrong: These commands don't exist
pantheon analyze data.csv     # Doesn't exist
pantheon config show         # Doesn't exist

# Correct: Use standard commands within the terminal environment
python -c "import pandas; print(pandas.__version__)"
python analyze_data.py
R --version
```

### Tutorial Environment Specific Issues

```bash
# Check Python in tutorial environment
which python
python --version

# Check available data files
ls -la *.csv *.txt *.json

# Test basic functionality
python -c "print('Hello, Pantheon-CLI tutorial!')"
```

Through systematic debugging methods, you can quickly locate and resolve issues, improving learning efficiency.