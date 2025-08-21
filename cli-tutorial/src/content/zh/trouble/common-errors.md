# 常见错误

本页面列出了使用Pantheon-CLI时最常见的错误及其解决方案。

## 安装错误

### 错误：找不到命令 'pantheon'
```bash
bash: pantheon: command not found
```

**原因**：Pantheon-CLI未正确安装或PATH未配置

**解决方案**：
```bash
# 检查是否安装
pip show pantheon-cli

# 重新安装
pip install --force-reinstall pantheon-cli

# 添加到PATH
export PATH="$HOME/.local/bin:$PATH"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

### 错误：权限被拒绝
```bash
Permission denied: '/usr/local/bin/pantheon'
```

**解决方案**：
```bash
# 使用用户级安装
pip install --user pantheon-cli

# 或修复权限
sudo chmod +x /usr/local/bin/pantheon
```

## 数据加载错误

### 错误：无法读取文件
```
DataError: Unable to read file 'data.csv'
```

**可能原因**：
1. 文件不存在
2. 文件权限不足
3. 文件编码问题

**解决方案**：
```bash
# 检查文件是否存在
pantheon test -f data.csv

# 检查权限
ls -la data.csv

# 指定编码
pantheon load data.csv --encoding utf-8
pantheon load data.csv --encoding gbk  # 中文Windows文件
```

### 错误：内存不足
```
MemoryError: Unable to allocate array with shape (1000000, 100)
```

**解决方案**：
```python
# 分块读取大文件
pantheon load data.csv --chunks 10000

# 或使用流式处理
pantheon stream data.csv | pantheon analyze
```

## 分析错误

### 错误：列名不存在
```
KeyError: 'column_name'
```

**解决方案**：
```bash
# 查看所有列名
pantheon columns data.csv

# 重命名列
pantheon rename-columns data.csv --map "old:new"

# 忽略缺失列
pantheon analyze data.csv --ignore-missing
```

### 错误：数据类型不匹配
```
TypeError: unsupported operand type(s) for +: 'str' and 'int'
```

**解决方案**：
```python
# 检查数据类型
pantheon dtypes data.csv

# 转换数据类型
pantheon convert data.csv --column age --to int
pantheon convert data.csv --column date --to datetime
```

## 可视化错误

### 错误：无法显示图形
```
RuntimeError: Unable to display plot
```

**可能原因**：
1. 无图形界面（SSH连接）
2. 缺少显示驱动

**解决方案**：
```bash
# 保存而非显示
pantheon plot data.csv --save output.png

# 使用文本模式
pantheon plot data.csv --ascii

# 导出为HTML
pantheon plot data.csv --html report.html
```

## 网络错误

### 错误：连接超时
```
ConnectionTimeout: Request timed out
```

**解决方案**：
```bash
# 增加超时时间
pantheon config set timeout 60

# 使用代理
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080

# 离线模式
pantheon --offline analyze data.csv
```

## Python环境错误

### 错误：模块未找到
```
ModuleNotFoundError: No module named 'pandas'
```

**解决方案**：
```bash
# 安装缺失依赖
pantheon deps install

# 或手动安装
pip install pandas numpy matplotlib

# 使用虚拟环境
python -m venv pantheon-env
source pantheon-env/bin/activate
pip install pantheon-cli
```

### 错误：版本冲突
```
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed
```

**解决方案**：
```bash
# 创建干净的虚拟环境
python -m venv clean-env
source clean-env/bin/activate
pip install pantheon-cli

# 或使用conda
conda create -n pantheon python=3.11
conda activate pantheon
pip install pantheon-cli
```

## 配置错误

### 错误：配置文件损坏
```
ConfigError: Invalid configuration file
```

**解决方案**：
```bash
# 重置配置
pantheon config reset

# 验证配置
pantheon config validate

# 备份并重建
mv ~/.pantheon/config.yaml ~/.pantheon/config.yaml.bak
pantheon config init
```

## 性能问题

### 问题：运行缓慢
**诊断**：
```bash
# 查看性能指标
pantheon benchmark

# 监控资源使用
pantheon monitor
```

**优化方案**：
```bash
# 启用并行处理
pantheon config set parallel true
pantheon config set workers 4

# 使用缓存
pantheon config set cache true

# 优化数据加载
pantheon optimize data.csv
```

## 编码问题

### 错误：UnicodeDecodeError
```
UnicodeDecodeError: 'utf-8' codec can't decode byte
```

**解决方案**：
```bash
# 检测文件编码
pantheon detect-encoding file.csv

# 转换编码
iconv -f GBK -t UTF-8 input.csv > output.csv

# 强制编码
pantheon load file.csv --encoding latin1
```

## 快速诊断命令

当遇到问题时，运行以下诊断命令：

```bash
# 完整系统诊断
pantheon doctor --full

# 检查特定组件
pantheon doctor --check python
pantheon doctor --check dependencies
pantheon doctor --check network

# 生成诊断报告
pantheon diagnostic-report > report.txt
```

## 获取帮助

如果问题仍未解决：

1. **查看详细错误信息**
   ```bash
   pantheon --verbose --debug your-command
   ```

2. **搜索已知问题**
   - [GitHub Issues](https://github.com/pantheon-cli/pantheon-cli/issues)
   - [社区论坛](https://community.pantheon-cli.io)

3. **提交问题报告**
   ```bash
   pantheon report-issue --auto
   ```

记住：大多数错误都有简单的解决方案，不要气馁！