# 常见错误

本页面列出了使用Pantheon-CLI教程时最常见的错误及其解决方案。

## 网页终端错误

### 错误：终端无法加载
**症状**：
- 页面显示空白的终端区域
- 终端界面不响应

**解决方案**：
```bash
# 1. 刷新页面
按 Ctrl+F5 (Windows/Linux) 或 Cmd+Shift+R (macOS)

# 2. 清除浏览器缓存
# Chrome: 设置 → 隐私设置和安全性 → 清除浏览数据
# Firefox: 设置 → 隐私与安全 → 清除数据

# 3. 检查浏览器控制台错误
按 F12 → Console 标签
```

### 错误：命令执行后无输出
**症状**：
- 输入命令后没有任何显示
- 光标不移动或无响应

**解决方案**：
```bash
# 1. 等待几秒钟（某些命令需要处理时间）

# 2. 检查命令是否正确
python --version   # 正确
python version     # 错误

# 3. 尝试简单命令测试
echo "Hello World"
ls
pwd
```

## 浏览器兼容性错误

### 错误：JavaScript功能不工作
**症状**：
- 终端完全无法交互
- 页面功能异常

**解决方案**：
1. **更新浏览器**到最新版本
2. **禁用浏览器扩展**（特别是广告拦截器）
3. **尝试无痕模式**：
   - Chrome: Ctrl+Shift+N
   - Firefox: Ctrl+Shift+P
   - Safari: Cmd+Shift+N

### 错误：复制粘贴不工作
**解决方案**：
```bash
# 方法1：标准快捷键
Ctrl+C (复制) / Ctrl+V (粘贴)   # Windows/Linux
Cmd+C (复制) / Cmd+V (粘贴)     # macOS

# 方法2：如果快捷键不工作
Ctrl+Shift+C / Ctrl+Shift+V    # Linux终端风格
右键菜单选择复制/粘贴

# 方法3：浏览器菜单
编辑 → 复制/粘贴
```

## 数据处理错误

### 错误：文件未找到
```bash
FileNotFoundError: [Errno 2] No such file or directory: 'data.csv'
```

**解决方案**：
```python
# 1. 检查当前目录
import os
print("当前目录:", os.getcwd())
print("目录内容:", os.listdir('.'))

# 2. 检查文件是否存在
import os
if os.path.exists('data.csv'):
    print("文件存在")
else:
    print("文件不存在")

# 3. 使用正确的文件路径
# 如果文件在data子目录中
df = pd.read_csv('data/data.csv')
```

### 错误：模块未找到
```bash
ModuleNotFoundError: No module named 'pandas'
```

**说明**：在网页教程中，常用的数据科学包（pandas, numpy, matplotlib等）应该已经预装。如果遇到此错误：

**解决方案**：
```python
# 1. 检查是否是拼写错误
import pandas as pd      # 正确
import panda as pd       # 错误拼写

# 2. 检查导入方式
import numpy as np       # 正确
import numpy            # 也正确，但推荐使用别名

# 3. 如果确实缺少模块，在本地环境中安装
# (仅限本地环境，网页教程中不适用)
pip install pandas numpy matplotlib
```

## Python代码错误

### 错误：语法错误
```python
SyntaxError: invalid syntax
```

**常见原因和解决方案**：
```python
# 1. 缺少冒号
if x > 5          # 错误
if x > 5:         # 正确

# 2. 括号不匹配
print("Hello"     # 错误：缺少右括号
print("Hello")    # 正确

# 3. 缩进错误
if x > 5:
print("大于5")    # 错误：缺少缩进
    print("大于5")    # 正确

# 4. 引号不匹配
text = "Hello'    # 错误：引号不匹配
text = "Hello"    # 正确
text = 'Hello'    # 也正确
```

### 错误：变量未定义
```python
NameError: name 'variable_name' is not defined
```

**解决方案**：
```python
# 1. 在使用前定义变量
print(x)          # 错误：x未定义
x = 10
print(x)          # 正确

# 2. 检查变量名拼写
data_frame = pd.DataFrame()
print(data_fram)  # 错误：拼写错误
print(data_frame) # 正确

# 3. 检查作用域
def my_function():
    local_var = 10
print(local_var)  # 错误：变量在函数外不可见
```

## 数据分析错误

### 错误：键错误（列不存在）
```python
KeyError: 'column_name'
```

**解决方案**：
```python
import pandas as pd

# 1. 检查列名
print(df.columns.tolist())  # 查看所有列名

# 2. 检查列名拼写和大小写
df['Age']        # 正确
df['age']        # 如果列名是'Age'则错误
df['AGE']        # 如果列名是'Age'则错误

# 3. 安全地访问列
if 'column_name' in df.columns:
    result = df['column_name']
else:
    print("列不存在")
```

### 错误：数据类型错误
```python
TypeError: unsupported operand type(s) for +: 'str' and 'int'
```

**解决方案**：
```python
# 1. 检查数据类型
print(df.dtypes)          # 查看所有列的数据类型
print(type(variable))     # 查看变量类型

# 2. 转换数据类型
df['age'] = df['age'].astype(int)        # 转换为整数
df['date'] = pd.to_datetime(df['date'])  # 转换为日期

# 3. 处理字符串数字
age_str = "25"
age_int = int(age_str)    # 转换为整数
result = age_int + 5      # 现在可以进行数学运算
```

## 绘图错误

### 错误：图形无法显示
**在网页教程中，有时图形可能不显示**

**解决方案**：
```python
import matplotlib.pyplot as plt

# 1. 确保调用show()
plt.plot([1, 2, 3, 4])
plt.show()                # 必须调用show()

# 2. 设置后端（如果需要）
import matplotlib
matplotlib.use('Agg')     # 用于保存图片

# 3. 保存图片而不是显示
plt.plot([1, 2, 3, 4])
plt.savefig('plot.png')   # 保存图片
```

## 网络和性能问题

### 错误：页面加载缓慢
**解决方案**：
1. **检查网络连接**
2. **关闭其他浏览器标签页**
3. **清理浏览器缓存**
4. **尝试不同时间段访问**

### 错误：内存不足警告
**在处理大数据时可能出现**

**解决方案**：
```python
# 1. 分块读取数据
chunk_size = 1000
for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
    # 处理每个chunk
    result = chunk.describe()

# 2. 只读取需要的列
df = pd.read_csv('data.csv', usecols=['col1', 'col2'])

# 3. 优化数据类型
df['int_col'] = df['int_col'].astype('int32')  # 使用较小的整数类型
```

## 调试技巧

### 使用print语句调试
```python
# 在关键位置添加print语句
data = pd.read_csv('data.csv')
print("数据加载完成，形状:", data.shape)

result = data.groupby('category').mean()
print("分组计算完成，结果:", result.head())
```

### 检查中间结果
```python
# 逐步检查计算过程
step1 = data.dropna()
print("删除缺失值后的行数:", len(step1))

step2 = step1[step1['age'] > 18]
print("过滤年龄后的行数:", len(step2))

final_result = step2.groupby('gender').mean()
print("最终结果:", final_result)
```

## 获取帮助

如果问题仍未解决：

1. **查看其他帮助页面**：
   - [故障排除](./troubleshooting.md)
   - [调试指南](./debugging.md)
   - [常见问题FAQ](./faq.md)

2. **检查浏览器控制台**：
   - 按F12打开开发者工具
   - 查看Console标签页的错误信息

3. **尝试简化问题**：
   - 使用最简单的代码重现问题
   - 逐步添加复杂度找出问题所在

4. **寻求帮助**：
   - 在GitHub Issues中搜索类似问题
   - 提交新的Issue并提供详细信息

记住：编程学习中遇到错误是正常的，每个错误都是学习的机会！