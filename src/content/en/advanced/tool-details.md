# Tool Details: Pantheon CLI Natural Language to Tool Mapping Guide

This chapter provides an in-depth analysis of Pantheon-CLI's core tool implementation mechanisms and natural language mapping system, helping you understand how to invoke corresponding tool functions through natural language descriptions.

## How to Use This Guide

When you have task requirements, find the corresponding description in the **"What You Want to Say"** section below, then use the corresponding **tool invocation** command.

---

## Task Management & Planning

### What You Want to Say → Tool Called

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "I need to track my project progress" | `add_todo("Complete data analysis project")` | Create new task and automatically decompose into subtasks |
| "Show me the work I'm currently handling" | `show_todos()` | Display status and progress of all current tasks |
| "What should I do next?" | `execute_current_task()` | Provide intelligent guidance for current active task |
| "I completed this step" | `mark_task_done("Data preprocessing completed")` | Mark current task as completed and move to next task |
| "Clear all tasks" | `clear_all_todos()` | Remove all tasks to start fresh |
| "Remove completed tasks" | `clear_completed_todos()` | Clean up completed tasks, keep active ones |
| "Update task status" | `update_todo_status("Task ID", "Completed")` | Change specific task status |
| "Mark specific task complete" | `complete_todo("Task ID")` | Mark specific todo item as completed |
| "Start working on task" | `start_todo("Task ID")` | Set specific task as in progress |
| "Delete task" | `remove_todo("Task ID")` | Remove specific todo item from list |
| "Get next task" | `get_next_todo()` | Return next pending task |
| "Work on next item" | `work_on_next_todo()` | Start working on next pending task |

---

## Bioinformatics & ATAC-seq Analysis

**For detailed bioinformatics and ATAC-seq analysis tool information, please see the detailed guide:**

📖 **[Bioinformatics Tools Guide](README_BIOINFORMATICS.md)**

**Quick Overview:**
- **ATAC-seq Analysis**: `/bio atac init` (enter mode), `/bio atac upstream <folder>` (run analysis)
- **Single-cell ATAC**: `/bio scatac init`, `/bio scatac upstream <folder>` (Cell Ranger ATAC toolset)
- **Single-cell RNA**: `/bio scrna init`, `/bio scrna analysis <file>` (omicverse-powered analysis)
- **Core Features**: Species detection, genome setup, quality control, alignment, peak calling, cell annotation
- **Key Tools**: `bio_atac_scan_folder()`, `bio_scatac_install()`, `bio_scrna_analysis()`, `bio_scrna_annotate()`

The bioinformatics guide includes detailed mappings for:
- Project setup and species detection
- Genome resource management
- Quality control and preprocessing
- Alignment and BAM processing
- Peak calling and analysis
- Visualization and reporting
- Single-cell ATAC-seq workflows (Cell Ranger ATAC)
- Single-cell RNA-seq analysis (omicverse integration)
- Cell type annotation and subtype analysis
- Tool installation and dependency management

---

## Direct Code Execution (REPL-style Commands)

### Quick Execution Prefixes

| **Prefix** | **Language** | **Example** | **Description** |
|------------|--------------|-------------|-----------------|
| `!` | **Shell/Bash** | `!ls -la` | Execute shell commands directly in REPL |
| `%` | **Python** | `%print("Hello World")` | Execute Python code directly with immediate output |
| `>` | **R** | `>summary(mtcars)` | Execute R statistical code directly |
| `]` | **Julia** | `]println("Hello Julia")` | Execute Julia high-performance computing code directly |

### Direct Execution Examples

```bash
# Shell commands - instant system operations
!pwd                           # Show current directory
!ls -la *.py                  # List Python files
!git status                   # Check git status
!pip install pandas          # Install Python package

# Python code - data analysis and scripting
%import pandas as pd         # Import library
%df = pd.read_csv("data.csv") # Load data
%df.head()                   # Show first few rows
%x = [1,2,3]; sum(x)         # Quick calculation

# R statistical computing - data science
>library(ggplot2)            # Load R package
>data(mtcars)                # Load dataset
>summary(mtcars)             # Statistical summary
>plot(mtcars$mpg, mtcars$hp) # Create plot

# Julia high-performance computing - numerical analysis
]using LinearAlgebra         # Load Julia package
]A = [1 2; 3 4]             # Matrix operations
]det(A)                     # Calculate determinant
]using Plots; plot([1,2,3]) # Create visualization
```

### Key Features

- **Shared Interpreter Sessions**: All prefixed commands use same interpreter sessions as AI agent
- **REPL-style Output**: Shows only final results and print statements, suppresses intermediate assignments
- **Instant Execution**: No need to call functions - just type prefix and code
- **Language Switching**: Seamlessly switch languages within same session
- **Persistent State**: Variables and imports persist between commands within each language

---

## Python Code Execution

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "Run this Python code" | `run_python("print('Hello World')")` | Execute Python code with full package support |
| "Quick Python execution" | `%print("Hello World")` | **NEW**: Direct Python execution with `%` prefix |
| "Run code in specific interpreter" | `run_code_in_interpreter("interpreter_id", "print('test')")` | Execute code in specific Python interpreter session |
| "Create new Python interpreter" | `new_interpreter("my_python_session")` | Create new isolated Python interpreter session |
| "Delete Python interpreter" | `delete_interpreter("interpreter_id")` | Remove Python interpreter session |

---

## R Statistical Computing

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "Run R statistical analysis" | `run_r("summary(mtcars)")` | Execute R code for statistical computing |
| "Quick R execution" | `>summary(mtcars)` | **NEW**: Direct R execution with `>` prefix |
| "Run R code in specific session" | `run_code_in_interpreter("r_session", "plot(iris)")` | Execute R code in specific interpreter session |
| "Create new R interpreter" | `new_interpreter("my_r_session")` | Create new isolated R interpreter session |
| "Delete R interpreter" | `delete_interpreter("r_session_id")` | Remove R interpreter session |
| "Get R interpreter output" | `get_interpreter_output("r_session_id")` | Retrieve output from R interpreter session |

---

## File Operations & Management

### Basic File Operations

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "List files in directory" | `list_files("/path/to/directory")` | List all files and directories in specified path |
| "Read this file" | `read_file("/path/to/file.txt")` | Read file contents with syntax highlighting |
| "Write content to file" | `write_file("/path/to/output.txt", "content")` | Write text content to specified file |
| "Create directory" | `create_directory("/path/to/new/folder")` | Create directory structure recursively |
| "Delete file" | `delete_file("/path/to/unwanted.txt")` | Remove specified file |
| "Delete directory" | `delete_directory("/path/to/folder")` | Remove directory and all its contents |
| "Move file" | `move_file("/old/path/file.txt", "/new/path/file.txt")` | Move file to new location |
| "Show file tree" | `list_file_tree("/project")` | Display hierarchical directory structure |
| "View images" | `observe_images("/path/to/images")` | Display image files in directory |
| "Read PDF file" | `read_pdf("/path/to/document.pdf")` | Extract and display PDF content |

---

## Text Editing & File Modification

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "Edit specific line in file" | `edit_file("/path/file.py", line_number=10, new_content="updated line")` | Modify specific line in text file |
| "Search text in file" | `search_in_file("/path/file.txt", "search_term")` | Search for specific text within file |
| "Insert text at line" | `insert_at_line("/path/file.py", line_number=5, content="import pandas")` | Insert new content at specified line number |
| "Delete lines from file" | `delete_lines("/path/file.txt", start_line=10, end_line=15)` | Remove specified range of lines from file |
| "Create new file" | `create_file("/path/to/new_file.txt", "initial content")` | Create new file with specified content |

## Workflow Architecture Details

## Code Search & Analysis

### Basic Search Operations

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "Search files by pattern" | `glob("/project", "*.py")` | Find files matching glob pattern |
| "Search text in files" | `grep("/project", "TODO", "*.py")` | Search for text patterns in files |
| "List directory contents" | `ls("/path/to/directory")` | List files and directories with details |

---

## Todo Task Management

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "I need to track my project progress" | `add_todo("Complete data analysis project")` | Create new task and automatically break into subtasks |
| "Show my current work" | `show_todos()` | Display all current tasks' status and progress |
| "What should I do next?" | `execute_current_task()` | Get intelligent guidance for current active task |
| "I completed this step" | `mark_task_done("Data preprocessing done")` | Mark current task complete and advance to next |
| "Clear all tasks" | `clear_all_todos()` | Remove all tasks to start fresh |
| "Remove completed tasks" | `clear_completed_todos()` | Clean finished tasks, keep active ones |
| "Update task status" | `update_todo_status("task_id", "completed")` | Change specific task's status |
| "Complete specific task" | `complete_todo("task_id")` | Mark specific todo item as done |
| "Start working on task" | `start_todo("task_id")` | Set specific task to in-progress |
| "Delete task" | `remove_todo("task_id")` | Remove specific todo item from list |
| "Get next task" | `get_next_todo()` | Return next pending task to work on |
| "Work on next item" | `work_on_next_todo()` | Start working on next pending task |

---

## Web Operations

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "Get webpage content" | `web_fetch("https://example.com")` | Retrieve and display webpage content |
| "Search the internet" | `web_search("Python data analysis tutorials")` | Search web using search engine |
| "Google search for information" | `google_search("ATAC-seq analysis methods")` | Perform Google search and return results |
| "Scrape webpage data" | `fetch_web_page("https://site.com")` | Extract structured data from webpage |

---

## System & Shell Operations

| **Natural Language Request** | **Tool Call** | **Function Description** |
|------------------------------|---------------|--------------------------|
| "Run shell command directly" | `!ls -la` | **NEW**: Direct shell execution with `!` prefix |
| "Execute system command" | `!pwd` | **NEW**: Instant system command execution |
| "Create new shell session" | `new_shell("my_shell_session")` | Create new isolated shell environment |
| "Close shell session" | `close_shell("shell_session_id")` | Terminate specific shell session |
| "Run command in shell" | `run_command_in_shell("shell_id", "ls -la")` | Execute command in specific shell session |
| "Get shell output" | `get_shell_output("shell_session_id")` | Retrieve output from shell session |
| "Run single command" | `run_command("ps aux")` | Execute single shell command |

---

This guide maps your natural language intentions to specific tool calls, enabling you to accomplish any task efficiently in Pantheon CLI.