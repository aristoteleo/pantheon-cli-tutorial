# 调试指南

本页面提供Pantheon-CLI教程中常见问题的调试方法和技巧。

## 调试终端模拟器

### 检查浏览器控制台

当终端出现问题时，首先检查浏览器开发者工具：

```javascript
// 打开浏览器控制台 (F12)
// 查看Console标签页的错误信息

// 常见错误类型：
// - ReferenceError: 变量未定义
// - TypeError: 类型错误  
// - NetworkError: 网络连接问题
```

### 终端状态诊断

```bash
# 检查终端是否响应
# 在终端中输入简单命令测试
echo "Terminal is working"

# 如果终端无响应，尝试刷新页面
# Ctrl+F5 (Windows/Linux) 或 Cmd+Shift+R (macOS)
```

## 调试学习内容

### 命令执行问题

**问题**：命令不能正常执行或返回错误

**调试步骤**：

1. **检查命令语法**
```bash
# 确保命令拼写正确
python --version  # 正确
phyton --version  # 错误拼写

# 检查参数格式
ls -la           # 正确
ls-la            # 缺少空格
```

2. **验证文件路径**
```bash
# 检查当前目录
pwd

# 列出文件
ls -la

# 检查文件是否存在
ls data.csv
```

3. **查看完整错误信息**
```bash
# 运行命令并查看详细输出
python script.py 2>&1

# 或使用调试模式
python -v script.py
```

### 数据分析调试

**Python调试技巧**：

```python
# 1. 使用print语句调试
print("变量值:", variable_name)
print("数据类型:", type(data))
print("数据形状:", data.shape)

# 2. 检查数据
print(data.head())      # 查看前几行
print(data.info())      # 查看数据信息
print(data.describe())  # 统计描述

# 3. 逐步执行
# 将复杂操作分解为多个简单步骤
step1 = data.groupby('column1')
print("分组结果:", step1.size())
step2 = step1.mean()
print("均值结果:", step2)
```

**R调试技巧**：

```r
# 1. 查看对象结构
str(data)
class(data)
dim(data)

# 2. 调试函数
debug(my_function)     # 进入调试模式
undebug(my_function)   # 退出调试模式

# 3. 错误处理
tryCatch({
  result <- risky_operation()
}, error = function(e) {
  print(paste("错误:", e$message))
})
```

## 性能调试

### 内存使用监控

```python
# Python内存监控
import psutil
import os

# 获取当前进程内存使用
process = psutil.Process(os.getpid())
memory_info = process.memory_info()
print(f"内存使用: {memory_info.rss / 1024 / 1024:.2f} MB")

# 监控数据框内存
import pandas as pd
df = pd.read_csv('data.csv')
print(f"数据框内存: {df.memory_usage(deep=True).sum() / 1024 / 1024:.2f} MB")
```

### 执行时间分析

```python
# 时间测量
import time

start_time = time.time()
# 执行代码
result = complex_operation()
end_time = time.time()

print(f"执行时间: {end_time - start_time:.2f} 秒")

# 使用timeit进行精确测量
import timeit
execution_time = timeit.timeit(lambda: your_function(), number=100)
print(f"平均执行时间: {execution_time/100:.4f} 秒")
```

## 网络调试

### 检查网络连接

```bash
# 测试网络连接
ping google.com

# 检查DNS解析
nslookup google.com

# 测试特定端口
telnet example.com 80
```

### 代理设置调试

```bash
# 检查代理设置
echo $HTTP_PROXY
echo $HTTPS_PROXY

# 临时设置代理
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080

# 取消代理设置
unset HTTP_PROXY
unset HTTPS_PROXY
```

## 日志和诊断

### 启用详细日志

```python
# Python日志配置
import logging

# 设置日志级别
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# 记录调试信息
logger.debug("调试信息")
logger.info("一般信息")
logger.warning("警告信息")
logger.error("错误信息")
```

### 生成诊断报告

```bash
# 系统信息收集
echo "=== 系统信息 ===" > diagnostic.txt
uname -a >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== Python版本 ===" >> diagnostic.txt
python --version >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== 已安装包 ===" >> diagnostic.txt
pip list >> diagnostic.txt
echo "" >> diagnostic.txt

echo "=== 内存使用 ===" >> diagnostic.txt
free -h >> diagnostic.txt
```

## 常见调试场景

### 1. 数据加载失败

```python
# 调试步骤
try:
    data = pd.read_csv('file.csv')
except FileNotFoundError:
    print("文件未找到，检查路径")
except pd.errors.EmptyDataError:
    print("文件为空")
except pd.errors.ParserError as e:
    print(f"解析错误: {e}")
    # 尝试不同的分隔符
    data = pd.read_csv('file.csv', sep=';')
```

### 2. 绘图显示问题

```python
import matplotlib.pyplot as plt

# 调试绘图问题
try:
    plt.figure(figsize=(10, 6))
    plt.plot(data)
    plt.show()
except Exception as e:
    print(f"绘图错误: {e}")
    # 尝试保存而不是显示
    plt.savefig('plot.png')
    print("图像已保存为 plot.png")
```

### 3. 包导入失败

```python
# 调试导入问题
try:
    import pandas as pd
except ImportError:
    print("pandas未安装，请运行: pip install pandas")

try:
    import numpy as np
except ImportError:
    print("numpy未安装，请运行: pip install numpy")
```

## 调试最佳实践

### 1. 系统化调试

1. **重现问题** - 确保能够一致地重现错误
2. **隔离问题** - 找到引起问题的最小代码片段
3. **检查假设** - 验证你对代码行为的假设
4. **逐步调试** - 一次只改变一个变量

### 2. 有效的错误报告

包含以下信息：
- 完整的错误信息
- 重现步骤
- 输入数据示例
- 期望的输出
- 实际的输出
- 系统环境信息

### 3. 预防性调试

```python
# 添加断言检查
assert len(data) > 0, "数据不能为空"
assert 'column1' in data.columns, "缺少必需的列"

# 参数验证
def process_data(data, threshold=0.5):
    if not isinstance(data, pd.DataFrame):
        raise TypeError("data必须是DataFrame")
    if not 0 <= threshold <= 1:
        raise ValueError("threshold必须在0-1之间")
    # 处理逻辑...
```

通过系统化的调试方法，可以快速定位和解决问题，提高学习效率。