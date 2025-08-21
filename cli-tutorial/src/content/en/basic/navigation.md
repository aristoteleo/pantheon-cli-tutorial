# Navigation Commands

Learn how to navigate and manage your working environment in Pantheon-CLI.

## Directory Operations

### View Current Directory
```bash
pantheon pwd
```

### Change Directory
```bash
# Change to specified directory
pantheon cd /path/to/directory

# Return to parent directory
pantheon cd ..

# Return to home directory
pantheon cd ~

# Switch to project root directory
pantheon cd --root
```

### List Files
```bash
# List files in current directory
pantheon ls

# Detailed information
pantheon ls -l

# Include hidden files
pantheon ls -a

# Sort by size
pantheon ls -S

# List recursively
pantheon ls -R
```

## Project Navigation

### Project Structure
```bash
# Display project tree structure
pantheon tree

# Limit depth
pantheon tree --depth 2

# Show only directories
pantheon tree --dirs-only
```

### Quick Jump
```bash
# Set bookmarks
pantheon bookmark add mydata /path/to/data
pantheon bookmark add models /path/to/models

# Jump to bookmark
pantheon goto mydata

# List all bookmarks
pantheon bookmark list

# Remove bookmark
pantheon bookmark remove mydata
```

## History

### Command History
```bash
# View command history
pantheon history

# Search history
pantheon history | grep analyze

# Execute history command
pantheon !42  # Execute command 42
pantheon !!   # Execute previous command
```

### Directory History
```bash
# View visited directories
pantheon dirs

# Return to previous directory
pantheon cd -

# Clear directory history
pantheon dirs -c
```

## Search and Find

### File Search
```bash
# Find files by name
pantheon find . -name "*.csv"

# Find by type
pantheon find . -type f -name "*.py"

# Find by size
pantheon find . -size +1M

# Find by modification time
pantheon find . -mtime -7  # Files modified within 7 days
```

### Content Search
```bash
# Search content in files
pantheon grep "pattern" file.txt

# Recursive search
pantheon grep -r "TODO" .

# Case insensitive
pantheon grep -i "error" logs/

# Show line numbers
pantheon grep -n "function" *.py
```

## Environment Management

### View Environment Information
```bash
# Show all environment variables
pantheon env

# View specific variable
pantheon env PANTHEON_HOME

# Set environment variable
pantheon env set DATA_PATH=/data

# Remove environment variable
pantheon env unset DATA_PATH
```

### Workspace Management
```bash
# Create new workspace
pantheon workspace create analysis-2024

# List all workspaces
pantheon workspace list

# Switch workspace
pantheon workspace switch analysis-2024

# Delete workspace
pantheon workspace delete old-project
```

## Path Operations

### Path Resolution
```bash
# Get absolute path
pantheon realpath ./data/file.csv

# Get filename
pantheon basename /path/to/file.txt

# Get directory name
pantheon dirname /path/to/file.txt

# Check if path exists
pantheon test -e /path/to/file
```

### Path Aliases
```bash
# Create path aliases
pantheon alias data="/home/user/projects/data"
pantheon alias models="/home/user/projects/models"

# Use aliases
pantheon cd $data
pantheon ls $models

# View all aliases
pantheon alias list
```

## Keyboard Shortcuts

Navigation shortcuts available in interactive mode:

| Shortcut | Function |
|----------|----------|
| `Ctrl+A` | Move to beginning of line |
| `Ctrl+E` | Move to end of line |
| `Ctrl+U` | Clear to beginning of line |
| `Ctrl+K` | Clear to end of line |
| `Ctrl+L` | Clear screen |
| `Ctrl+R` | Search history |
| `Tab` | Auto-complete |
| `↑/↓` | Browse history |

## Practical Tips

### 1. Using Wildcards
```bash
# Match all CSV files
pantheon ls *.csv

# Match specific pattern
pantheon ls data_202[3-4]_*.csv

# Exclude specific files
pantheon ls !(*.tmp|*.bak)
```

### 2. Batch Operations
```bash
# Execute operation on multiple files
pantheon foreach *.csv "pantheon analyze {}"

# Parallel processing
pantheon parallel -j 4 "pantheon process {}" ::: *.data
```

### 3. Pipes and Redirection
```bash
# Pipe operations
pantheon ls | pantheon filter "*.csv" | pantheon count

# Output redirection
pantheon tree > structure.txt

# Error redirection
pantheon analyze data.csv 2> errors.log
```

## Best Practices

1. **Organize project structure**
   ```
   project/
   ├── data/
   ├── scripts/
   ├── outputs/
   └── docs/
   ```

2. **Use meaningful bookmark names**
   ```bash
   pantheon bookmark add raw-data /project/data/raw
   pantheon bookmark add cleaned /project/data/cleaned
   ```

3. **Regular cleanup**
   ```bash
   # Clean temporary files
   pantheon clean --temp
   
   # Clean cache
   pantheon clean --cache
   ```

After mastering these navigation commands, you'll be able to work efficiently in Pantheon-CLI!