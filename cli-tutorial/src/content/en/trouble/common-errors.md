# Common Errors

This page lists the most common errors encountered when using the Pantheon-CLI tutorial tool and their solutions.

## Installation Errors

### Error: Python Version Incompatible
```bash
ERROR: Package 'pantheon-cli' requires Python '>=3.8' but the running Python is 3.7.x
```

**Solution**:
```bash
# Check Python version
python --version
python3 --version

# Install Python 3.8+
# Ubuntu/Debian
sudo apt update && sudo apt install python3.8

# macOS (using Homebrew)
brew install python@3.8

# Windows: Download and install from python.org
```

### Error: pip Installation Failed
```bash
ERROR: Could not find a version that satisfies the requirement pantheon-cli
```

**Solution**:
```bash
# Upgrade pip
pip install --upgrade pip

# Use Python 3's pip
pip3 install pantheon-cli

# User-level installation
pip install --user pantheon-cli

# If network issues, use China mirror
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli
```

### Error: Permission Denied
```bash
Permission denied: '/usr/local/bin/pantheon'
```

**Solution**:
```bash
# Method 1: User-level installation (recommended)
pip install --user pantheon-cli

# Add user bin directory to PATH
export PATH="$HOME/.local/bin:$PATH"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc

# Method 2: Use sudo (not recommended)
sudo pip install pantheon-cli
```

## Runtime Errors

### Error: Command Not Found
```bash
bash: pantheon-cli: command not found
```

**Solution**:
```bash
# Check if installed
pip show pantheon-cli

# Check installation location
which pantheon-cli
whereis pantheon-cli

# Add to PATH
export PATH="$HOME/.local/bin:$PATH"

# Or run directly
python -m pantheon_cli --version
```

### Error: Module Import Failed
```bash
ModuleNotFoundError: No module named 'pandas'
```

**Solution**:
```bash
# Install missing dependencies
pip install pandas numpy matplotlib seaborn

# Install bioinformatics packages
pip install scanpy anndata biopython

# Batch install (if requirements.txt exists)
pip install -r requirements.txt

# Create virtual environment (recommended)
python -m venv pantheon-env
source pantheon-env/bin/activate  # Linux/macOS
# or pantheon-env\Scripts\activate  # Windows
pip install pantheon-cli
```

## Tutorial Environment Errors

### Error: Terminal Unresponsive
```bash
# Terminal in browser stops responding
```

**Solution**:
```bash
# 1. Open browser developer tools (F12) to check errors
# 2. Refresh page
#    Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (macOS)
# 3. Clear browser cache
# 4. Restart browser
# 5. Test simple commands
echo "Test terminal response"
```

### Error: Python Packages Unavailable
```bash
ImportError: No module named 'pandas'
# In tutorial environment
```

**Solution**:
```bash
# Check Python in tutorial environment
python --version
python -c "import sys; print(sys.executable)"

# Check installed packages
python -c "import pandas, numpy, matplotlib; print('Basic packages available')"

# If packages are missing, this may be a tutorial environment limitation
# Contact tutorial provider or check documentation
```

### Error: File Access Issues
```bash
FileNotFoundError: [Errno 2] No such file or directory: 'data.csv'
```

**Solution**:
```bash
# Check current directory
pwd

# List available files
ls -la

# Use tutorial-provided sample data
ls *.csv *.txt *.json

# Or create sample data for practice
python -c "
import pandas as pd
import numpy as np
data = pd.DataFrame({'x': np.random.randn(100), 'y': np.random.randn(100)})
data.to_csv('sample_data.csv', index=False)
print('Created sample data file: sample_data.csv')
"
```

## Common Misconception Errors

### Error: Using Non-existent Commands
```bash
# Incorrect attempts
pantheon analyze data.csv
pantheon config show
pantheon models list
```

**Solution**:
**Remember**: Pantheon-CLI has only one command: `pantheon-cli --version`
```bash
# Correct approach: Use standard commands in the tutorial terminal environment
# Python data analysis
python -c "import pandas as pd; df = pd.read_csv('data.csv'); print(df.head())"
python analyze_script.py

# R language analysis
R --version
Rscript analysis.R

# Shell commands
ls -la
cat data.csv | head -5

# Check Pantheon-CLI version (the only dedicated command)
pantheon-cli --version
```

### Error: Expecting AI Auto-analysis Features
```bash
# Expected but non-existent functionality
pantheon "analyze my sales data and generate insights"
```

**Solution**:
Pantheon-CLI is a **tutorial tool**, not an AI analysis tool:
```bash
# Use standard data analysis methods
# Practice these skills in the tutorial terminal environment

# Python data analysis example
python -c "
import pandas as pd
import matplotlib.pyplot as plt

# Read data
data = pd.read_csv('sales_data.csv')

# Basic statistics
print(data.describe())

# Simple visualization
data.plot(kind='hist')
plt.savefig('sales_histogram.png')
print('Chart saved as sales_histogram.png')
"
```

## Performance Issues

### Issue: Tutorial Environment Running Slowly
**Diagnosis**:
```bash
# Check browser performance
# 1. Close unnecessary tabs
# 2. Check browser memory usage (Task Manager)
# 3. Clear browser cache
```

**Optimization**:
```python
# Optimize performance in code
import pandas as pd

# Use efficient data types
df = df.astype({'int_col': 'int32', 'float_col': 'float32'})

# Avoid loops, use vectorized operations
df['new_col'] = df['col1'] * df['col2']  # Efficient
# Avoid: for i in range(len(df)): ...    # Inefficient

# Release memory promptly
import gc
del large_dataframe
gc.collect()
```

### Issue: Browser Out of Memory
```bash
# Browser shows "Page Unresponsive" or crashes
```

**Solution**:
```bash
# 1. Restart browser
# 2. Increase virtual memory (Windows)
# 3. Use smaller datasets for practice
# 4. Process data in batches
```

```python
# Process data in batches in Python
import pandas as pd

# Read large files in chunks
chunk_size = 1000
for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
    # Process each chunk
    result = chunk.groupby('category').mean()
    print(f"Processed {len(chunk)} rows of data")
```

## Learning-Related Errors

### Error: Expecting Overly Complex Features
```bash
# Attempting too advanced analysis
# "Execute deep learning neural network training"
```

**Solution**:
Pantheon-CLI tutorial focuses on basic learning:
```python
# Start with basics
# 1. Data loading and exploration
import pandas as pd
data = pd.read_csv('data.csv')
print(data.info())

# 2. Basic statistical analysis
print(data.describe())

# 3. Simple visualization
import matplotlib.pyplot as plt
data.hist()
plt.savefig('data_overview.png')

# 4. Basic machine learning (if environment supports)
from sklearn.linear_model import LinearRegression
model = LinearRegression()
# etc...
```

### Error: Misunderstanding Tutorial Purpose
**Problem**: Mistaking Pantheon-CLI for a production analysis tool

**Clarification**:
Pantheon-CLI is an **educational tool** designed for:
1. **Learning data analysis concepts** - Understanding concepts through hands-on practice
2. **Practicing programming skills** - Python, R, shell commands
3. **Simulating real environments** - Safe experimentation environment
4. **Building foundations** - Preparation for real projects

## Getting Help

### How to Report Issues Effectively

```bash
# Collect diagnostic information
echo "=== System Information ==="
uname -a
echo "=== Python Version ==="
python --version
echo "=== Pantheon-CLI Version ==="
pantheon-cli --version 2>&1 || echo "pantheon-cli not installed"
echo "=== Browser Information ==="
# In browser console run: navigator.userAgent
```

### Issue Reports Should Include:
1. **Complete error messages** - Don't truncate partial information
2. **Reproduction steps** - Detailed operational steps
3. **Environment information** - OS, browser, Python version
4. **Expected results** - What you expected to happen
5. **Actual results** - What actually happened

### Help Channels:
1. **View documentation** - Carefully read tutorials and FAQ
2. **GitHub Issues** - Search for similar problems
3. **Community forums** - Discuss with other learners
4. **Stack Overflow** - Use relevant tags

Remember: Detailed and accurate problem descriptions are key to getting effective help!