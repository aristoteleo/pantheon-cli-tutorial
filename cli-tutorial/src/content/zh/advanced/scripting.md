# 脚本编写

学习如何编写和使用Pantheon-CLI脚本来自动化你的数据分析工作流。

## Pantheon脚本基础

### 创建脚本文件
```bash
# 创建.pan脚本文件
pantheon script create analysis.pan

# 使用模板创建
pantheon script create --template data-pipeline pipeline.pan
```

### 脚本结构
```python
#!/usr/bin/env pantheon
# -*- coding: utf-8 -*-

# 脚本元数据
@metadata({
    "name": "数据分析脚本",
    "version": "1.0.0",
    "author": "Your Name",
    "description": "自动化数据分析流程"
})

# 导入所需模块
import pantheon as pan
from pantheon.data import Dataset
from pantheon.viz import Plot

# 主函数
def main():
    # 加载数据
    data = pan.load("data.csv")
    
    # 数据处理
    cleaned = pan.clean(data)
    
    # 分析
    results = pan.analyze(cleaned)
    
    # 可视化
    pan.plot(results)
    
    # 导出结果
    pan.export(results, "output.xlsx")

if __name__ == "__main__":
    main()
```

## 自然语言脚本

### 混合模式脚本
```pantheon
# analysis.pan
加载销售数据从 "sales_2024.csv"
清理数据：删除空值，标准化日期格式

# 使用Python代码
df['profit'] = df['revenue'] - df['cost']

按月份分组并计算总收入
创建月度收入趋势图
导出结果到 "monthly_report.xlsx"
```

### 纯自然语言脚本
```pantheon
# simple_analysis.pan
读取 customer_data.csv 文件
显示数据的基本统计信息
找出购买金额最高的前10个客户
创建客户年龄分布的直方图
将分析结果保存为 HTML 报告
```

## 参数化脚本

### 接收命令行参数
```python
#!/usr/bin/env pantheon

import pantheon as pan
import sys

# 获取参数
input_file = sys.argv[1] if len(sys.argv) > 1 else "default.csv"
output_format = sys.argv[2] if len(sys.argv) > 2 else "xlsx"

# 使用参数
data = pan.load(input_file)
results = pan.analyze(data)
pan.export(results, f"output.{output_format}")
```

### 使用配置文件
```yaml
# config.yaml
data:
  input: "data/*.csv"
  encoding: "utf-8"
  
analysis:
  methods: ["correlation", "regression"]
  confidence: 0.95
  
output:
  format: "html"
  directory: "./results/"
```

```python
# 在脚本中使用配置
config = pan.load_config("config.yaml")
data = pan.load(config['data']['input'])
```

## 错误处理和日志

### 添加错误处理
```python
#!/usr/bin/env pantheon

import pantheon as pan
from pantheon.exceptions import DataError, AnalysisError

try:
    # 加载数据
    data = pan.load("data.csv")
    
    if data.empty:
        raise DataError("数据文件为空")
    
    # 执行分析
    results = pan.analyze(data)
    
except DataError as e:
    pan.log.error(f"数据错误: {e}")
    pan.exit(1)
    
except AnalysisError as e:
    pan.log.error(f"分析错误: {e}")
    pan.exit(2)
    
except Exception as e:
    pan.log.error(f"未知错误: {e}")
    pan.exit(3)
```

### 日志记录
```python
# 配置日志
pan.log.set_level("DEBUG")
pan.log.to_file("analysis.log")

# 使用日志
pan.log.info("开始数据分析")
pan.log.debug(f"数据形状: {data.shape}")
pan.log.warning("检测到异常值")
pan.log.success("分析完成")
```

## 模块化脚本

### 创建可重用模块
```python
# utils.pan
def clean_data(df):
    """清理数据函数"""
    df = df.dropna()
    df = df.drop_duplicates()
    return df

def calculate_metrics(df):
    """计算关键指标"""
    metrics = {
        'total': df['amount'].sum(),
        'average': df['amount'].mean(),
        'median': df['amount'].median()
    }
    return metrics
```

### 导入和使用模块
```python
# main.pan
from utils import clean_data, calculate_metrics

data = pan.load("sales.csv")
clean = clean_data(data)
metrics = calculate_metrics(clean)
pan.print(metrics)
```

## 并行处理

### 并行执行任务
```python
#!/usr/bin/env pantheon

import pantheon as pan
from pantheon.parallel import Pool

def process_file(filename):
    """处理单个文件"""
    data = pan.load(filename)
    result = pan.analyze(data)
    pan.save(result, f"output_{filename}")
    return f"完成: {filename}"

# 获取所有文件
files = pan.glob("data/*.csv")

# 并行处理
with Pool(workers=4) as pool:
    results = pool.map(process_file, files)
    
for result in results:
    pan.log.info(result)
```

## 定时执行

### 创建定时任务
```python
# scheduled_task.pan
#!/usr/bin/env pantheon

import pantheon as pan
from pantheon.schedule import every, run_pending
import time

@every(hours=1)
def hourly_analysis():
    """每小时执行的分析"""
    data = pan.load_latest("data/*.csv")
    report = pan.quick_analysis(data)
    pan.email(report, to="admin@example.com")

@every(day_at="09:00")
def daily_report():
    """每日报告"""
    pan.run("generate_daily_report.pan")

# 持续运行
while True:
    run_pending()
    time.sleep(60)
```

## 交互式脚本

### 用户输入
```python
#!/usr/bin/env pantheon

import pantheon as pan

# 获取用户输入
filename = pan.input("请输入数据文件名: ")
analysis_type = pan.select("选择分析类型:", 
    ["描述统计", "相关分析", "回归分析"])

# 确认操作
if pan.confirm(f"确定要对{filename}执行{analysis_type}?"):
    data = pan.load(filename)
    
    if analysis_type == "描述统计":
        result = pan.describe(data)
    elif analysis_type == "相关分析":
        result = pan.correlate(data)
    else:
        result = pan.regress(data)
    
    pan.display(result)
```

## 脚本调试

### 调试模式
```bash
# 启用调试模式运行
pantheon run --debug script.pan

# 设置断点
pantheon debug script.pan --break 15

# 逐步执行
pantheon step script.pan
```

### 性能分析
```python
# 添加性能监控
@pan.profile
def slow_function(data):
    # 耗时操作
    result = complex_calculation(data)
    return result

# 查看性能报告
pan.performance_report()
```

## 最佳实践

### 1. 脚本组织
```
project/
├── scripts/
│   ├── main.pan
│   ├── utils/
│   │   ├── data.pan
│   │   └── analysis.pan
│   └── config.yaml
├── data/
└── output/
```

### 2. 文档和注释
```python
#!/usr/bin/env pantheon
"""
数据分析主脚本

用途：处理销售数据并生成月度报告
作者：Your Name
日期：2024-03-15
"""

def process_data(df):
    """
    处理数据框
    
    参数:
        df: pandas DataFrame
    
    返回:
        处理后的DataFrame
    """
    # 具体实现
    pass
```

### 3. 版本控制
```bash
# 初始化Git仓库
pantheon git init

# 添加脚本
pantheon git add scripts/*.pan

# 提交更改
pantheon git commit -m "添加数据分析脚本"
```

通过掌握脚本编写，你可以将复杂的分析流程自动化，大大提高工作效率！