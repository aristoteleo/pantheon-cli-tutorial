# System Commands

## 1. Basic System Commands Introduction

In Pantheon-CLI's design, to ensure system simplicity while maintaining usability, we haven't designed too many redundant system commands. This is because many commands can be run through `bash`.

We can use `/help` to query available system commands:

```shell
/help
```

## 2. Additional Commands

In Pantheon-CLI version 1.0, thanks to our biology background, we designed a series of available biological analysis tools. In the future, we will expand tools to sociology, finance, physics, environmental science, and more.

We can use `/bio` to query available biological tool commands:

```shell
/bio
```

## 3. System Command Function Demonstrations

### 3.1 Current Usage Status Query

```shell
/status
```

### 3.2 Dialog History Query

```shell
/history
```

### 3.3 Current Token Consumption Query

```shell
/tokens
```

### 3.4 Save Current Dialog

```shell
/save
```

### 3.5 Exit

```shell
/exit
```

> This exit is too elegant. I usually exit with two consecutive Ctrl+C presses. The difference is that we have a Todo List, and elegant exit can clear this Todo.