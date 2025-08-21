# Program Commands

Pantheon-CLI supports direct execution of various programming language code, achieving a true Mixed programming environment. Whether it's Python, R, Julia, or Shell commands, they can all be executed seamlessly within the same session.

## 1. Python Programming Support

### 1.1 AI-Executed Python Code

You can directly input Python code, and the system will automatically recognize and execute it. During recognition, it may modify and improve the code. This means you don't even need to input complete code.

Of course, you can also force it not to write code itself and not perform completion, executing exactly according to your input.

### 1.2 Direct Python Code Execution

For Python code, you need to add `%` before running, then this command will be recognized as Python code and run without going through large language model processing. For example:

```shell
%print('Hello World')
%a=1
%print(a)
```

## 2. R Language Integration

### 2.1 AI-Executed R Code

Similar to Python, but most code will be recognized as Python code, so when we first let the program execute R, we can write `Use R to run a=1`, then R will be called to execute.

### 2.2 Direct R Code Execution

For R code, you need to add `>` before running, then this command will be recognized as R code and run directly. For example:

```shell
>print('Hello World')
>a <- 1
>a
```

## 3. Julia High-Performance Computing

### 3.1 AI-Executed Julia Code

Similar to R, when we first let the program execute Julia, we can write `Use Julia to run a=1`, then Julia will be called to execute.

### 3.2 Direct Julia Code Execution

For Julia code, you need to add `]` before running, then this command will be recognized as Julia code and run directly. For example:

```shell
]println('Hello World')
]a=1
]a
```

## 4. Shell Command Execution

### 4.1 AI-Executed Shell Code

Shell recognition is almost fully automatic. Of course, you can also force it to use Bash to run code, which is not a problem for AI.

### 4.2 Direct Shell Code Execution

For shell commands, we only need to add `!` before running, then this command will be recognized as a shell command to run. For example:

```shell
!pwd
!cat README.md | head -n 10
```

## 5. Code Execution Modes

- Interactive execution: Execute code line by line, view results instantly.
- Script mode: Execute complete analysis scripts.
- Mixed mode: Mixed mode of natural language description + code execution.

## 6. Variable and State Management

- Session state persistence: All variables and objects are continuously saved in the session.
- Cross-language variable saving: Python, R, Julia can share data content through context.
- Memory management: Automatic memory optimization and garbage collection.

## 7. Error Handling and Debugging

- Intelligent error diagnosis: Automatically analyze error causes and provide repair suggestions.
- Debugging support: Support breakpoint debugging and variable inspection.
- Code optimization suggestions: Automatically provide code performance optimization suggestions.

Program command functionality makes Pantheon-CLI a true scientific computing workstation, supporting various complex research needs.