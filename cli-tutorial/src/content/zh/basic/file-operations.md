# 文件操作

掌握Pantheon-CLI中的文件管理和数据操作命令。

## 基础文件操作

### 创建文件
```bash
# 创建空文件
pantheon touch newfile.txt

# 创建并写入内容
pantheon echo "Hello World" > file.txt

# 追加内容
pantheon echo "New line" >> file.txt
```

### 复制文件
```bash
# 复制单个文件
pantheon cp source.txt dest.txt

# 复制到目录
pantheon cp file.txt /backup/

# 递归复制目录
pantheon cp -r project/ backup/

# 保留属性复制
pantheon cp -p important.dat archive/
```

### 移动和重命名
```bash
# 重命名文件
pantheon mv oldname.txt newname.txt

# 移动文件
pantheon mv file.txt /new/location/

# 批量重命名
pantheon rename 's/\.txt$/\.bak/' *.txt
```

### 删除文件
```bash
# 删除文件
pantheon rm file.txt

# 强制删除
pantheon rm -f locked.txt

# 递归删除目录
pantheon rm -rf old_project/

# 交互式删除
pantheon rm -i important.*
```

## 查看文件内容

### 显示文件
```bash
# 查看整个文件
pantheon cat file.txt

# 显示行号
pantheon cat -n file.txt

# 查看多个文件
pantheon cat file1.txt file2.txt
```

### 分页查看
```bash
# 分页显示
pantheon less large_file.txt

# 从末尾开始查看
pantheon less +G log.txt

# 搜索内容（在less中按/）
pantheon less data.csv
# 然后输入: /search_term
```

### 部分查看
```bash
# 查看前10行
pantheon head file.txt

# 查看前20行
pantheon head -n 20 file.txt

# 查看后10行
pantheon tail file.txt

# 实时监控文件
pantheon tail -f log.txt
```

## 文件信息

### 文件属性
```bash
# 详细信息
pantheon stat file.txt

# 文件类型
pantheon file data.csv

# 文件大小
pantheon du -h file.txt

# 目录大小
pantheon du -sh directory/
```

### 文件权限
```bash
# 查看权限
pantheon ls -l file.txt

# 修改权限
pantheon chmod 644 file.txt
pantheon chmod +x script.py

# 修改所有者
pantheon chown user:group file.txt
```

## 数据文件操作

### CSV文件处理
```bash
# 查看CSV结构
pantheon csv-info data.csv

# 显示前几行
pantheon csv-head data.csv

# 提取特定列
pantheon csv-cut -c name,age data.csv

# CSV转JSON
pantheon csv-to-json data.csv > data.json
```

### JSON文件处理
```bash
# 格式化JSON
pantheon json-format messy.json > pretty.json

# 提取字段
pantheon json-get ".users[0].name" data.json

# 验证JSON
pantheon json-validate config.json
```

### Excel文件处理
```bash
# 查看Excel信息
pantheon excel-info data.xlsx

# 转换为CSV
pantheon excel-to-csv data.xlsx

# 提取特定sheet
pantheon excel-sheet "Sheet2" data.xlsx > sheet2.csv
```

## 文件压缩和解压

### 压缩操作
```bash
# 创建zip文件
pantheon zip archive.zip file1 file2 dir/

# 创建tar.gz
pantheon tar -czf archive.tar.gz directory/

# 添加到现有压缩包
pantheon zip -u archive.zip newfile.txt
```

### 解压操作
```bash
# 解压zip
pantheon unzip archive.zip

# 解压到指定目录
pantheon unzip archive.zip -d target/

# 解压tar.gz
pantheon tar -xzf archive.tar.gz

# 查看压缩包内容
pantheon unzip -l archive.zip
```

## 文件比较和合并

### 比较文件
```bash
# 比较两个文件
pantheon diff file1.txt file2.txt

# 并排比较
pantheon diff -y old.py new.py

# 忽略空白
pantheon diff -w version1.txt version2.txt
```

### 合并文件
```bash
# 合并文本文件
pantheon cat file1.txt file2.txt > merged.txt

# 合并CSV文件
pantheon csv-merge data1.csv data2.csv > combined.csv

# 合并并去重
pantheon sort -u file1.txt file2.txt > unique.txt
```

## 批量操作

### 批量处理
```bash
# 对所有CSV文件执行操作
pantheon foreach *.csv 'pantheon analyze "$1"'

# 批量转换格式
pantheon batch-convert *.xlsx --to csv

# 批量重命名
pantheon batch-rename 's/old/new/g' *.txt
```

### 文件监控
```bash
# 监控文件变化
pantheon watch file.txt

# 文件变化时执行命令
pantheon watch -c "pantheon analyze" data.csv

# 监控目录
pantheon watch -r directory/
```

## 高级技巧

### 1. 文件模板
```bash
# 创建文件模板
pantheon template create analysis.py

# 使用模板创建新文件
pantheon template use analysis.py new_analysis.py
```

### 2. 文件备份
```bash
# 自动备份
pantheon backup file.txt  # 创建file.txt.bak

# 带时间戳备份
pantheon backup -t data.csv  # data.csv.20240315_143022
```

### 3. 安全操作
```bash
# 加密文件
pantheon encrypt sensitive.txt

# 解密文件
pantheon decrypt sensitive.txt.enc

# 安全删除（覆盖后删除）
pantheon shred confidential.dat
```

## 最佳实践

1. **始终备份重要文件**
   ```bash
   pantheon cp -p important.csv important.csv.backup
   ```

2. **使用版本控制**
   ```bash
   pantheon git init
   pantheon git add .
   pantheon git commit -m "Initial data"
   ```

3. **验证操作结果**
   ```bash
   pantheon cp large.csv backup/ && pantheon verify backup/large.csv
   ```

掌握这些文件操作命令，让你的数据管理更加高效！