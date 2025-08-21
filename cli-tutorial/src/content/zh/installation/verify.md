# 验证安装

完成Pantheon-CLI安装后，让我们验证一切是否正常工作。

## 基础验证

### 1. 检查版本

```bash
pantheon-cli --version
```

预期输出：
```
Pantheon-CLI version 1.0.0
Python 3.11.0
Platform: Darwin-23.0.0-x86_64
```

### 2. 启动Pantheon-CLI

直接在终端输入以下命令启动界面：

```bash
pantheon-cli
```

成功启动后，你应该看到Pantheon-CLI的交互界面。

### 3. 测试基本功能

在Pantheon-CLI界面中尝试以下操作：

```bash
# 创建一些测试数据
生成10个随机数

# 查看数据统计
显示均值和标准差

# 退出界面  
exit
```

## 功能测试

### 1. 创建测试项目

```bash
# 创建测试目录
mkdir pantheon-test
cd pantheon-test

# 初始化项目
pantheon init
```

### 2. 简单数据分析测试

创建测试数据文件 `test.csv`：
```csv
name,age,score
Alice,25,90
Bob,30,85
Charlie,35,95
```

执行分析：
```bash
读取test.csv并计算平均分
```


## 故障排除检查清单

使用以下清单排查问题：

| 检查项 | 命令 | 预期结果 |
|--------|------|----------|
| PATH设置 | `which pantheon` | 显示安装路径 |
| Python版本 | `python --version` | 3.8或更高 |
| pip版本 | `pip --version` | 20.0或更高 |
| 权限检查 | `ls -la ~/.pantheon` | 有读写权限 |
| 网络连接 | `pantheon ping` | 连接成功 |
| 日志文件 | `pantheon logs` | 无错误信息 |

## 常见问题快速修复

### 命令未找到

```bash
# Linux/macOS
echo $PATH | grep pantheon
export PATH="$HOME/.local/bin:$PATH"

# Windows PowerShell
$env:Path
$env:Path += ";C:\Program Files\Pantheon-CLI\bin"
```

### 权限错误

```bash
# Linux/macOS
chmod +x $(which pantheon)
mkdir -p ~/.pantheon && chmod 755 ~/.pantheon

# Windows (管理员PowerShell)
icacls "$env:USERPROFILE\.pantheon" /grant "${env:USERNAME}:(F)"
```

### 模块导入错误

```bash
# 重新安装核心依赖
pip install --force-reinstall pantheon-cli

# 清理缓存
pip cache purge
```

## 获取详细日志

如遇到问题，启用详细日志：

```bash
# 设置日志级别
export PANTHEON_LOG_LEVEL=DEBUG

# 运行命令并保存日志
pantheon --debug your-command 2>&1 | tee pantheon-debug.log
```

## 提交问题报告

如果问题持续存在：

1. 收集诊断信息：
```bash
pantheon diagnostic-report > report.txt
```

2. 访问 [GitHub Issues](https://github.com/pantheon-cli/pantheon-cli/issues)

3. 提供以下信息：
   - 操作系统和版本
   - Python版本
   - 完整错误信息
   - 诊断报告内容

## 验证成功！

如果所有测试都通过，恭喜你！Pantheon-CLI已成功安装并准备就绪。

下一步：
- 📚 学习[基础命令](/basic-commands)
- 🚀 探索[快速开始指南](/intro/getting-started)
- 💡 查看[使用案例](https://pantheon-cli.io/examples)