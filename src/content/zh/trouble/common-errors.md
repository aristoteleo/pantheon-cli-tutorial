# 常见错误

本页面列出了使用Pantheon-CLI教程工具时最常见的错误及其解决方案。

## 安装错误

### 错误：Python版本不兼容
```bash
ERROR: Package 'pantheon-cli' requires Python '>=3.8' but the running Python is 3.7.x
```

**解决方案**：
```bash
# 检查Python版本
python --version
python3 --version

# 安装Python 3.8+
# Ubuntu/Debian
sudo apt update && sudo apt install python3.8

# macOS (使用Homebrew)
brew install python@3.8

# Windows: 从python.org下载安装
```

### 错误：pip安装失败
```bash
ERROR: Could not find a version that satisfies the requirement pantheon-cli
```

**解决方案**：
```bash
# 升级pip
pip install --upgrade pip

# 使用Python 3的pip
pip3 install pantheon-cli

# 用户级安装
pip install --user pantheon-cli

# 如果网络问题，使用国内镜像
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli
```

### 错误：权限被拒绝
```bash
Permission denied: '/usr/local/bin/pantheon'
```

**解决方案**：
```bash
# 方法1：用户级安装（推荐）
pip install --user pantheon-cli

# 添加用户bin目录到PATH
export PATH="$HOME/.local/bin:$PATH"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc

# 方法2：使用sudo（不推荐）
sudo pip install pantheon-cli
```

## 运行时错误

### 错误：命令未找到
```bash
bash: pantheon-cli: command not found
```

**解决方案**：
```bash
# 检查是否安装
pip show pantheon-cli

# 检查安装位置
which pantheon-cli
whereis pantheon-cli

# 添加到PATH
export PATH="$HOME/.local/bin:$PATH"

# 或直接运行
python -m pantheon_cli --version
```

### 错误：模块导入失败
```bash
ModuleNotFoundError: No module named 'pandas'
```

**解决方案**：
```bash
# 安装缺失的依赖
pip install pandas numpy matplotlib seaborn

# 安装生物信息学相关包
pip install scanpy anndata biopython

# 批量安装（如果有requirements.txt）
pip install -r requirements.txt

# 创建虚拟环境（推荐）
python -m venv pantheon-env
source pantheon-env/bin/activate  # Linux/macOS
# 或 pantheon-env\Scripts\activate  # Windows
pip install pantheon-cli
```

## 教程环境错误

### 错误：终端无响应
```bash
# 浏览器中的终端停止响应
```

**解决方案**：
```bash
# 1. 打开浏览器开发者工具（F12）检查错误
# 2. 刷新页面
#    Ctrl+F5 (Windows/Linux) 或 Cmd+Shift+R (macOS)
# 3. 清理浏览器缓存
# 4. 重启浏览器
# 5. 测试简单命令
echo "测试终端响应"
```

### 错误：Python包不可用
```bash
ImportError: No module named 'pandas'
# 在教程环境中
```

**解决方案**：
```bash
# 检查教程环境中的Python
python --version
python -c "import sys; print(sys.executable)"

# 检查已安装包
python -c "import pandas, numpy, matplotlib; print('基础包可用')"

# 如果包缺失，这可能是教程环境的限制
# 联系教程提供者或检查文档
```

### 错误：文件访问问题
```bash
FileNotFoundError: [Errno 2] No such file or directory: 'data.csv'
```

**解决方案**：
```bash
# 检查当前目录
pwd

# 列出可用文件
ls -la

# 使用教程提供的示例数据
ls *.csv *.txt *.json

# 或创建示例数据进行练习
python -c "
import pandas as pd
import numpy as np
data = pd.DataFrame({'x': np.random.randn(100), 'y': np.random.randn(100)})
data.to_csv('sample_data.csv', index=False)
print('创建示例数据文件: sample_data.csv')
"
```

## 常见误解错误

### 错误：使用不存在的命令
```bash
# 错误的尝试
pantheon analyze data.csv
pantheon config show
pantheon models list
```

**解决方案**：
**记住**：Pantheon-CLI只有一个命令：`pantheon-cli --version`
```bash
# 正确的做法：在教程终端环境中使用标准命令
# Python数据分析
python -c "import pandas as pd; df = pd.read_csv('data.csv'); print(df.head())"
python analyze_script.py

# R语言分析
R --version
Rscript analysis.R

# Shell命令
ls -la
cat data.csv | head -5

# 查看Pantheon-CLI版本（唯一的专用命令）
pantheon-cli --version
```

### 错误：期待AI自动分析功能
```bash
# 期待但不存在的功能
pantheon "analyze my sales data and generate insights"
```

**解决方案**：
Pantheon-CLI是一个**教程工具**，不是AI分析工具：
```bash
# 使用标准的数据分析方法
# 在教程终端环境中练习这些技能

# Python数据分析示例
python -c "
import pandas as pd
import matplotlib.pyplot as plt

# 读取数据
data = pd.read_csv('sales_data.csv')

# 基本统计
print(data.describe())

# 简单可视化
data.plot(kind='hist')
plt.savefig('sales_histogram.png')
print('图表已保存为 sales_histogram.png')
"
```

## 性能问题

### 问题：教程环境运行缓慢
**诊断**：
```bash
# 检查浏览器性能
# 1. 关闭不必要的标签页
# 2. 检查浏览器内存使用（任务管理器）
# 3. 清理浏览器缓存
```

**优化**：
```python
# 在代码中优化性能
import pandas as pd

# 使用高效的数据类型
df = df.astype({'int_col': 'int32', 'float_col': 'float32'})

# 避免循环，使用向量化操作
df['new_col'] = df['col1'] * df['col2']  # 高效
# 避免: for i in range(len(df)): ...    # 低效

# 及时释放内存
import gc
del large_dataframe
gc.collect()
```

### 问题：浏览器内存不足
```bash
# 浏览器显示"页面无响应"或崩溃
```

**解决方案**：
```bash
# 1. 重启浏览器
# 2. 增加虚拟内存（Windows）
# 3. 使用较小的数据集练习
# 4. 分批处理数据
```

```python
# Python中分批处理数据
import pandas as pd

# 分块读取大文件
chunk_size = 1000
for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
    # 处理每个数据块
    result = chunk.groupby('category').mean()
    print(f"处理了 {len(chunk)} 行数据")
```

## 学习相关错误

### 错误：期待过于复杂的功能
```bash
# 尝试过于高级的分析
# "执行深度学习神经网络训练"
```

**解决方案**：
Pantheon-CLI教程专注于基础学习：
```python
# 从基础开始
# 1. 数据加载和探索
import pandas as pd
data = pd.read_csv('data.csv')
print(data.info())

# 2. 基本统计分析
print(data.describe())

# 3. 简单可视化
import matplotlib.pyplot as plt
data.hist()
plt.savefig('data_overview.png')

# 4. 基础机器学习（如果环境支持）
from sklearn.linear_model import LinearRegression
model = LinearRegression()
# 等等...
```

### 错误：不理解教程目的
**问题**：将Pantheon-CLI误解为生产分析工具

**澄清**：
Pantheon-CLI是一个**教育工具**，旨在：
1. **学习数据分析概念** - 通过实际操作理解概念
2. **练习编程技能** - Python、R、shell命令
3. **模拟真实环境** - 在安全的环境中实验
4. **建立基础** - 为真实项目做准备

## 获取帮助

### 如何有效报告问题

```bash
# 收集诊断信息
echo "=== 系统信息 ==="
uname -a
echo "=== Python版本 ==="
python --version
echo "=== Pantheon-CLI版本 ==="
pantheon-cli --version 2>&1 || echo "pantheon-cli未安装"
echo "=== 浏览器信息 ==="
# 在浏览器控制台运行：navigator.userAgent
```

### 问题报告应包含：
1. **完整错误信息** - 不要截取部分信息
2. **重现步骤** - 详细的操作步骤
3. **环境信息** - 操作系统、浏览器、Python版本
4. **期望结果** - 你期望发生什么
5. **实际结果** - 实际发生了什么

### 寻求帮助的渠道：
1. **查看文档** - 仔细阅读教程和FAQ
2. **GitHub Issues** - 搜索类似问题
3. **社区论坛** - 与其他学习者讨论
4. **Stack Overflow** - 使用相关标签

记住：详细准确的问题描述是获得有效帮助的关键！