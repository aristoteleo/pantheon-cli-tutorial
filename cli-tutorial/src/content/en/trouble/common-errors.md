# Common Errors

This page lists the most common errors encountered when using Pantheon-CLI and their solutions.

## Installation Errors

### Error: Command 'pantheon' not found
```bash
bash: pantheon: command not found
```

**Cause**: Pantheon-CLI is not properly installed or PATH is not configured

**Solution**:
```bash
# Check if installed
pip show pantheon-cli

# Reinstall
pip install --force-reinstall pantheon-cli

# Add to PATH
export PATH="$HOME/.local/bin:$PATH"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

### Error: Permission denied
```bash
Permission denied: '/usr/local/bin/pantheon'
```

**Solution**:
```bash
# Use user-level installation
pip install --user pantheon-cli

# Or fix permissions
sudo chmod +x /usr/local/bin/pantheon
```

## Data Loading Errors

### Error: Unable to read file
```
DataError: Unable to read file 'data.csv'
```

**Possible causes**:
1. File does not exist
2. Insufficient file permissions
3. File encoding issues

**Solution**:
```bash
# Check if file exists
pantheon test -f data.csv

# Check permissions
ls -la data.csv

# Specify encoding
pantheon load data.csv --encoding utf-8
pantheon load data.csv --encoding gbk  # Chinese Windows files
```

### Error: Out of memory
```
MemoryError: Unable to allocate array with shape (1000000, 100)
```

**Solution**:
```python
# Read large files in chunks
pantheon load data.csv --chunks 10000

# Or use streaming processing
pantheon stream data.csv | pantheon analyze
```

## Analysis Errors

### Error: Column name does not exist
```
KeyError: 'column_name'
```

**Solution**:
```bash
# View all column names
pantheon columns data.csv

# Rename columns
pantheon rename-columns data.csv --map "old:new"

# Ignore missing columns
pantheon analyze data.csv --ignore-missing
```

### Error: Data type mismatch
```
TypeError: unsupported operand type(s) for +: 'str' and 'int'
```

**Solution**:
```python
# Check data types
pantheon dtypes data.csv

# Convert data types
pantheon convert data.csv --column age --to int
pantheon convert data.csv --column date --to datetime
```

## Visualization Errors

### Error: Unable to display plot
```
RuntimeError: Unable to display plot
```

**Possible causes**:
1. No graphical interface (SSH connection)
2. Missing display drivers

**Solution**:
```bash
# Save instead of display
pantheon plot data.csv --save output.png

# Use text mode
pantheon plot data.csv --ascii

# Export as HTML
pantheon plot data.csv --html report.html
```

## Network Errors

### Error: Connection timeout
```
ConnectionTimeout: Request timed out
```

**Solution**:
```bash
# Increase timeout
pantheon config set timeout 60

# Use proxy
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080

# Offline mode
pantheon --offline analyze data.csv
```

## Python Environment Errors

### Error: Module not found
```
ModuleNotFoundError: No module named 'pandas'
```

**Solution**:
```bash
# Install missing dependencies
pantheon deps install

# Or manually install
pip install pandas numpy matplotlib

# Use virtual environment
python -m venv pantheon-env
source pantheon-env/bin/activate
pip install pantheon-cli
```

### Error: Version conflicts
```
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed
```

**Solution**:
```bash
# Create clean virtual environment
python -m venv clean-env
source clean-env/bin/activate
pip install pantheon-cli

# Or use conda
conda create -n pantheon python=3.11
conda activate pantheon
pip install pantheon-cli
```

## Configuration Errors

### Error: Corrupted configuration file
```
ConfigError: Invalid configuration file
```

**Solution**:
```bash
# Reset configuration
pantheon config reset

# Validate configuration
pantheon config validate

# Backup and rebuild
mv ~/.pantheon/config.yaml ~/.pantheon/config.yaml.bak
pantheon config init
```

## Performance Issues

### Issue: Slow execution
**Diagnosis**:
```bash
# View performance metrics
pantheon benchmark

# Monitor resource usage
pantheon monitor
```

**Optimization solutions**:
```bash
# Enable parallel processing
pantheon config set parallel true
pantheon config set workers 4

# Use caching
pantheon config set cache true

# Optimize data loading
pantheon optimize data.csv
```

## Encoding Issues

### Error: UnicodeDecodeError
```
UnicodeDecodeError: 'utf-8' codec can't decode byte
```

**Solution**:
```bash
# Detect file encoding
pantheon detect-encoding file.csv

# Convert encoding
iconv -f GBK -t UTF-8 input.csv > output.csv

# Force encoding
pantheon load file.csv --encoding latin1
```

## Quick Diagnostic Commands

When encountering problems, run the following diagnostic commands:

```bash
# Complete system diagnosis
pantheon doctor --full

# Check specific components
pantheon doctor --check python
pantheon doctor --check dependencies
pantheon doctor --check network

# Generate diagnostic report
pantheon diagnostic-report > report.txt
```

## Getting Help

If the problem is still unresolved:

1. **View detailed error information**
   ```bash
   pantheon --verbose --debug your-command
   ```

2. **Search known issues**
   - [GitHub Issues](https://github.com/pantheon-cli/pantheon-cli/issues)
   - [Community Forum](https://community.pantheon-cli.io)

3. **Submit issue report**
   ```bash
   pantheon report-issue --auto
   ```

Remember: Most errors have simple solutions, don't get discouraged!