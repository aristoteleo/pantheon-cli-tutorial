# General Tool Invocation

Pantheon-CLI has built-in rich general tool functions, organized by functional categories, which can be flexibly combined to complete various data science tasks.

## 1. Shell / Process Management

### Core Tools
- `new_shell` / `run_command_in_shell` / `run_command` - Create shell, run commands
- `get_shell_output` / `close_shell` - Get output, close shell

### Usage Examples
```bash
# Create new shell and execute commands
> Create a new shell environment and run data processing script

# Get command output
> Run ls -la and get output results

# Execute shell commands in batch
> Execute in sequence: create directory, move files, run analysis script
```

## 2. File and Directory Operations

### Core Tools
- `list_files` / `list_file_tree` - List directory contents, show file tree
- `create_directory` / `delete_directory` - Create/delete directories
- `create_file` / `read_file` / `write_file` / `delete_file` - Basic file operations
- `move_file` - Move or rename files

### Usage Examples
```bash
# View project structure
> Display file tree structure of current directory

# Batch file operations
> Create results directory, move all .csv files into it

# Read and process files
> Read config.yaml file and parse configuration
```

## 3. Text Editing and Search

### Core Tools
- `edit_file` - Edit file content
- `delete_lines` / `insert_at_line` - Delete lines/insert at specified line
- `search_in_file` - Search within files
- `grep` - Search text across files
- `glob` - Find files by pattern
- `ls` - Enhanced directory listing

### Usage Examples
```bash
# Code refactoring
> Search for "old_function" in all .py files and replace with "new_function"

# Configuration file modification
> Edit config.json, insert new configuration item at line 10

# Find specific files
> Use glob to find all files matching "*test*.py"
```

## 4. Programming Language Interpreters

### 4.1 Python Execution
- `run_python_code` - Run code in persistent Python environment

```bash
# Data analysis
> Run Python code: load data, calculate statistics, generate charts

# Machine learning
> Use sklearn to train a classification model
```

### 4.2 R Language Execution
- `run_r_code` - Run R code with Seurat/plotting support

```bash
# Seurat analysis
> Use R to run Seurat single-cell analysis pipeline

# Statistical analysis
> Use R for ANOVA and multiple comparisons
```

### 4.3 Julia Execution
- `run_julia_code` - Run Julia code
- `new_interpreter` / `delete_interpreter` - Manage interpreters
- `run_code_in_interpreter` / `get_interpreter_output` - Execute and get output

```bash
# High-performance computing
> Use Julia for large-scale matrix operations

# Numerical simulation
> Run Julia code for differential equation solving
```

## 5. Jupyter Notebook Operations

### Core Tools
- `create_notebook` / `read_notebook` - Create/read notebooks
- `add_notebook_cell` / `edit_notebook_cell` - Add/edit cells
- `delete_notebook_cell` / `copy_notebook_cell` / `move_notebook_cell` - Cell management
- `add_notebook_template` - Add templates

### Usage Examples
```bash
# Create analysis notebook
> Create a new Jupyter notebook, add data loading and analysis code

# Modify existing notebook
> Read analysis.ipynb, add visualization code after 3rd cell

# Apply template
> Add standard machine learning project template to notebook
```

## 6. PDF and Image Processing

### Core Tools
- `read_pdf` - Read and extract PDF text (must be used for all PDF operations)
- `observe_images` - View images and answer questions

### Usage Examples
```bash
# PDF literature processing
> Read research_paper.pdf, extract content from methods section

# Image analysis
> View experimental result images, describe observed patterns

# Batch PDF processing
> Read all PDFs in literature/ directory, extract abstracts
```

## 7. Web and Retrieval

### Core Tools
- `web_fetch` - Fetch specified URL page content (must use when user gives specific URL)
- `web_search` - DuckDuckGo-based search interface (general search)

### Usage Examples
```bash
# Get online documentation
> Reference content from https://docs.scipy.org to learn statistical methods

# Search information
> Search for "single-cell RNA sequencing best practices"

# Batch web scraping
> Scrape all page content from provided URL list
```

## 8. Todo Task Management

### Core Tools
- `add_todo` / `show_todos` - Add/display tasks
- `execute_current_task` / `mark_task_done` - Execute/mark complete
- `complete_current_todo` / `complete_todo` - Complete tasks
- `start_todo` / `work_on_next_todo` / `get_next_todo` - Task flow control
- `update_todo_status` / `remove_todo` - Update/delete tasks
- `clear_all_todos` / `clear_completed_todos` - Clean up tasks
- `configure_auto_cleanup` - Configure auto cleanup

### Usage Examples
```bash
# Create analysis pipeline
> Add todos: 1. Data cleaning 2. Feature engineering 3. Model training 4. Result evaluation

# Execute tasks
> Start executing current task, automatically proceed to next after completion

# Task management
> Display status of all pending tasks

# Automated workflow
> Configure automatic task execution pipeline
```

## 9. Tool Combination Examples

### Data Analysis Project
```bash
# Complete project setup and execution
> Execute the following operations:
1. Create project directory structure
2. Get dataset URL from web
3. Download and read data files
4. Run Python analysis code
5. Generate Jupyter notebook report
6. Save results as PDF
```

### Literature Research Workflow
```bash
# Batch process research literature
> Execute the following steps:
1. List all PDF files in papers/ directory
2. Read PDFs one by one to extract key information
3. Search for specific methods in files
4. Create literature review document
5. Generate citation list
```

### Automated Data Processing
```bash
# Set up automated pipeline
> Create todo list:
1. Daily scheduled new data retrieval
2. Run data cleaning script
3. Execute statistical analysis
4. Update visualization dashboard
5. Send completion notification
```

## Best Practices

1. **Reasonable tool combination** - Choose appropriate tool combinations based on task requirements
2. **Utilize Todo system** - Break complex tasks into manageable steps
3. **Keep environment clean** - Close unused shells and interpreters promptly
4. **Error handling** - Add checks and error handling at critical steps
5. **Result validation** - Verify output meets expectations after each step

These general tools provide the foundation functionality of Pantheon-CLI, and through flexible combination can complete various complex data science tasks.