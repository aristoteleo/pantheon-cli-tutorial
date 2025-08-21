# 导航命令

学习如何在Pantheon-CLI中导航和管理你的工作环境。

## 目录操作

### 查看当前目录
```bash
pantheon pwd
```

### 切换目录
```bash
# 切换到指定目录
pantheon cd /path/to/directory

# 返回上级目录
pantheon cd ..

# 返回主目录
pantheon cd ~

# 切换到项目根目录
pantheon cd --root
```

### 列出文件
```bash
# 列出当前目录文件
pantheon ls

# 详细信息
pantheon ls -l

# 包含隐藏文件
pantheon ls -a

# 按大小排序
pantheon ls -S

# 递归列出
pantheon ls -R
```

## 项目导航

### 项目结构
```bash
# 显示项目树形结构
pantheon tree

# 限制深度
pantheon tree --depth 2

# 只显示目录
pantheon tree --dirs-only
```

### 快速跳转
```bash
# 设置书签
pantheon bookmark add mydata /path/to/data
pantheon bookmark add models /path/to/models

# 跳转到书签
pantheon goto mydata

# 列出所有书签
pantheon bookmark list

# 删除书签
pantheon bookmark remove mydata
```

## 历史记录

### 命令历史
```bash
# 查看命令历史
pantheon history

# 搜索历史
pantheon history | grep analyze

# 执行历史命令
pantheon !42  # 执行第42条命令
pantheon !!   # 执行上一条命令
```

### 目录历史
```bash
# 查看访问过的目录
pantheon dirs

# 返回之前的目录
pantheon cd -

# 清空目录历史
pantheon dirs -c
```

## 搜索和查找

### 文件搜索
```bash
# 按名称查找文件
pantheon find . -name "*.csv"

# 按类型查找
pantheon find . -type f -name "*.py"

# 按大小查找
pantheon find . -size +1M

# 按修改时间查找
pantheon find . -mtime -7  # 7天内修改的文件
```

### 内容搜索
```bash
# 在文件中搜索内容
pantheon grep "pattern" file.txt

# 递归搜索
pantheon grep -r "TODO" .

# 忽略大小写
pantheon grep -i "error" logs/

# 显示行号
pantheon grep -n "function" *.py
```

## 环境管理

### 查看环境信息
```bash
# 显示所有环境变量
pantheon env

# 查看特定变量
pantheon env PANTHEON_HOME

# 设置环境变量
pantheon env set DATA_PATH=/data

# 删除环境变量
pantheon env unset DATA_PATH
```

### 工作区管理
```bash
# 创建新工作区
pantheon workspace create analysis-2024

# 列出所有工作区
pantheon workspace list

# 切换工作区
pantheon workspace switch analysis-2024

# 删除工作区
pantheon workspace delete old-project
```

## 路径操作

### 路径解析
```bash
# 获取绝对路径
pantheon realpath ./data/file.csv

# 获取文件名
pantheon basename /path/to/file.txt

# 获取目录名
pantheon dirname /path/to/file.txt

# 检查路径是否存在
pantheon test -e /path/to/file
```

### 路径别名
```bash
# 创建路径别名
pantheon alias data="/home/user/projects/data"
pantheon alias models="/home/user/projects/models"

# 使用别名
pantheon cd $data
pantheon ls $models

# 查看所有别名
pantheon alias list
```

## 快捷键

在交互模式中可用的导航快捷键：

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+A` | 移到行首 |
| `Ctrl+E` | 移到行尾 |
| `Ctrl+U` | 清除到行首 |
| `Ctrl+K` | 清除到行尾 |
| `Ctrl+L` | 清屏 |
| `Ctrl+R` | 搜索历史 |
| `Tab` | 自动补全 |
| `↑/↓` | 浏览历史 |

## 实用技巧

### 1. 使用通配符
```bash
# 匹配所有CSV文件
pantheon ls *.csv

# 匹配特定模式
pantheon ls data_202[3-4]_*.csv

# 排除特定文件
pantheon ls !(*.tmp|*.bak)
```

### 2. 批量操作
```bash
# 对多个文件执行操作
pantheon foreach *.csv "pantheon analyze {}"

# 并行处理
pantheon parallel -j 4 "pantheon process {}" ::: *.data
```

### 3. 管道和重定向
```bash
# 管道操作
pantheon ls | pantheon filter "*.csv" | pantheon count

# 输出重定向
pantheon tree > structure.txt

# 错误重定向
pantheon analyze data.csv 2> errors.log
```

## 最佳实践

1. **组织项目结构**
   ```
   project/
   ├── data/
   ├── scripts/
   ├── outputs/
   └── docs/
   ```

2. **使用有意义的书签名称**
   ```bash
   pantheon bookmark add raw-data /project/data/raw
   pantheon bookmark add cleaned /project/data/cleaned
   ```

3. **定期清理**
   ```bash
   # 清理临时文件
   pantheon clean --temp
   
   # 清理缓存
   pantheon clean --cache
   ```

掌握这些导航命令后，你将能够高效地在Pantheon-CLI中工作！