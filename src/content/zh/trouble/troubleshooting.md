# 故障排除

本页面帮助解决使用Pantheon-CLI工具时遇到的常见问题。

## 关于Pantheon-CLI的重要说明

**Pantheon-CLI是一个教程工具**，主要功能：
- `pantheon-cli --version` - 查看版本信息
- 提供一个终端模拟环境用于学习数据分析
- 所有的数据分析命令都在终端模拟环境中运行

## 安装故障排除

### Python环境问题

**检查Python版本**：
```bash
# 检查Python版本
python --version
python3 --version

# Pantheon-CLI需要Python 3.8+
```

**安装Pantheon-CLI**：
```bash
# 使用pip安装
pip install pantheon-cli

# 用户级安装
pip install --user pantheon-cli

# 验证安装
pantheon-cli --version
```

### 常见安装错误

```bash
# 错误：Python版本不兼容
ERROR: Package 'pantheon-cli' requires Python '>=3.8'

# 解决方案：升级Python版本
# Ubuntu/Debian
sudo apt update && sudo apt install python3.8 python3.8-pip

# macOS (使用Homebrew)
brew install python@3.8

# Windows: 从python.org下载最新版本
```

### pip安装问题

```bash
# 升级pip
pip install --upgrade pip

# 清理缓存
pip cache purge

# 使用镜像源（中国用户）
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli

# 用户级安装
pip install --user pantheon-cli
```

### 权限问题

```bash
# Linux/macOS权限错误
# 推荐：用户级安装
pip install --user pantheon-cli

# 添加用户bin目录到PATH
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Windows权限问题
# 以管理员身份运行CMD/PowerShell
pip install pantheon-cli
```

## 运行时故障排除

### 命令未找到错误

```bash
# 检查Pantheon-CLI是否已安装
pip show pantheon-cli

# 查找可执行文件
which pantheon-cli
whereis pantheon-cli

# 添加到PATH
export PATH="$HOME/.local/bin:$PATH"

# 或直接运行
python -m pantheon_cli --version
```

### 终端环境问题

**启动终端环境**：
```bash
# 启动Pantheon-CLI终端
pantheon-cli

# 在终端环境中，您可以运行：
# - Python数据分析命令
# - R语言命令  
# - Shell命令
# - 生物信息学工具
```

**终端环境故障**：
- 如果终端无法启动，检查Python依赖
- 如果命令执行失败，检查数据文件路径
- 如果显示异常，检查终端显示设置

## 虚拟环境配置

**创建专用虚拟环境**（推荐）：
```bash
# 1. 创建虚拟环境
python -m venv pantheon-env

# 2. 激活虚拟环境
# Linux/macOS:
source pantheon-env/bin/activate
# Windows:
pantheon-env\Scripts\activate

# 3. 安装Pantheon-CLI
pip install pantheon-cli

# 4. 启动终端环境
pantheon-cli
```

## 依赖问题解决

### 检查核心依赖

**在终端环境中检查**：
```python
# 在Pantheon-CLI终端中运行
import pandas
print("pandas版本:", pandas.__version__)

import numpy  
print("numpy版本:", numpy.__version__)

import matplotlib
print("matplotlib版本:", matplotlib.__version__)
```

**安装缺失依赖**：
```bash
# 退出终端环境，在系统shell中运行
pip install pandas numpy matplotlib seaborn scipy
pip install scanpy anndata biopython
pip install scikit-learn
```

## 数据文件问题

### 文件路径问题

**在终端环境中**：
```bash
# 检查当前目录
pwd

# 列出文件
ls -la

# 检查特定文件
ls -la data.csv

# 使用绝对路径
python
>>> import pandas as pd
>>> df = pd.read_csv('/full/path/to/data.csv')
```

### 文件编码问题

```bash
# 检测文件编码（在系统shell中）
file -bi data.csv

# 转换编码
iconv -f GBK -t UTF-8 input.csv > output.csv

# 在Python中指定编码
python
>>> df = pd.read_csv('data.csv', encoding='gbk')
```

## 网络连接问题

### 模型下载问题

```bash
# 检查网络连接
ping huggingface.co
ping openai.com

# 设置代理（如果需要）
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080

# 然后启动Pantheon-CLI
pantheon-cli
```

## 性能优化

### 内存使用优化

**在终端环境中处理大文件**：
```python
# 分块读取
import pandas as pd
chunk_size = 10000
for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
    # 处理每个chunk
    result = chunk.describe()
    print(result)

# 只读取需要的列
df = pd.read_csv('data.csv', usecols=['col1', 'col2'])
```

### 系统资源监控

```bash
# 在系统shell中监控资源
top
htop
free -h

# 检查磁盘空间
df -h
```

## 终端环境使用技巧

### 基本操作

```bash
# 在Pantheon-CLI终端中：
# 1. Python数据分析
python
>>> import pandas as pd
>>> df = pd.read_csv('data.csv')
>>> df.head()

# 2. R语言分析
R
> library(ggplot2)
> data <- read.csv('data.csv')
> head(data)

# 3. Shell命令
ls -la
cat data.csv | head -10
```

### 保存和导出结果

```python
# 在Python环境中保存结果
import pandas as pd
df = pd.read_csv('data.csv')
result = df.describe()

# 保存到文件
result.to_csv('analysis_result.csv')

# 保存图表
import matplotlib.pyplot as plt
plt.figure()
df.plot()
plt.savefig('plot.png')
```

## 故障诊断步骤

### 1. 基本检查

```bash
# 检查安装
pip show pantheon-cli
pantheon-cli --version

# 检查Python环境
python --version
pip --version
```

### 2. 依赖检查

```bash
# 检查依赖
pip check
pip list | grep -E "(pandas|numpy|matplotlib)"
```

### 3. 环境测试

```bash
# 启动终端并测试基本功能
pantheon-cli

# 在终端中测试
python -c "import pandas; print('pandas正常')"
python -c "import numpy; print('numpy正常')"
```

## 获取支持

### 问题报告信息

当遇到问题时，请收集以下信息：

```bash
# 基本信息
pantheon-cli --version
python --version
pip --version
uname -a  # Linux/macOS

# 安装包列表
pip list > packages.txt

# 错误信息
# 复制完整的错误输出
```

### 寻求帮助

1. **查看教程文档** - 确保正确理解工具用法
2. **检查网络环境** - 确保能访问必要的网络资源
3. **GitHub Issues** - 搜索和提交问题
4. **社区论坛** - 与其他用户交流

**记住**：Pantheon-CLI是一个教学工具，主要用于提供终端学习环境。所有的数据分析工作都在这个终端环境中进行，而不是通过独立的CLI命令。