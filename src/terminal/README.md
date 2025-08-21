# Terminal 演示内容格式规范

## 文件结构
Terminal目录结构与content目录完全一致，每个markdown文件对应一个同名的txt文件。

## TXT文件格式

使用以下标记来定义不同类型的内容：

### 命令行
```
$ <命令>
```

### 输出
```
> 输出内容第一行
> 输出内容第二行
> ...
```

### 注释
```
# 这是一个注释
```

### 分隔符
使用 `---` 分隔不同的命令块

## 示例

```txt
# 检查Python版本
$ python --version
> Python 3.11.5

---

# 安装Pantheon-CLI
$ pip install pantheon-cli
> Collecting pantheon-cli...
> Successfully installed pantheon-cli-1.0.0

---

$ pantheon --help
> Usage: pantheon [OPTIONS] COMMAND [ARGS]...
> 
> Options:
>   --version  Show version
>   --help     Show this message
```

## 特殊标记

- `$` - 普通命令提示符
- `#` - root用户提示符（可选）
- `pantheon>` - Pantheon交互模式提示符
- `>>>` - Python提示符（可选）