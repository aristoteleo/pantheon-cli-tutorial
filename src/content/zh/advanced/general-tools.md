# 泛用工具调用

Pantheon-CLI内置了丰富的通用工具函数，按功能类别组织，可以灵活组合使用来完成各种数据科学任务。

## 1. Shell / 进程管理

### 核心工具
- `new_shell` / `run_command_in_shell` / `run_command` - 创建shell、运行命令
- `get_shell_output` / `close_shell` - 获取输出、关闭shell

### 使用示例
```bash
# 创建新shell并执行命令
> 创建一个新的shell环境，运行数据处理脚本

# 获取命令输出
> 运行ls -la并获取输出结果

# 批量执行shell命令
> 依次执行：创建目录、移动文件、运行分析脚本
```

## 2. 文件与目录操作

### 核心工具
- `list_files` / `list_file_tree` - 列出目录内容、显示文件树
- `create_directory` / `delete_directory` - 创建/删除目录
- `create_file` / `read_file` / `write_file` / `delete_file` - 文件基本操作
- `move_file` - 移动或重命名文件

### 使用示例
```bash
# 查看项目结构
> 显示当前目录的文件树结构

# 批量文件操作
> 创建results目录，将所有.csv文件移动到其中

# 读取和处理文件
> 读取config.yaml文件并解析配置
```

## 3. 文本编辑与搜索

### 核心工具
- `edit_file` - 编辑文件内容
- `delete_lines` / `insert_at_line` - 删除行/在指定行插入
- `search_in_file` - 在文件内搜索
- `grep` - 跨文件搜索文本
- `glob` - 按模式查找文件
- `ls` - 增强版目录列表

### 使用示例
```bash
# 代码重构
> 在所有.py文件中搜索"old_function"并替换为"new_function"

# 配置文件修改
> 编辑config.json，在第10行插入新的配置项

# 查找特定文件
> 使用glob查找所有匹配"*test*.py"的文件
```

## 4. 编程语言解释器

### 4.1 Python执行
- `run_python_code` - 在持续的Python环境中运行代码

```bash
# 数据分析
> 运行Python代码：加载数据，计算统计量，生成图表

# 机器学习
> 使用sklearn训练一个分类模型
```

### 4.2 R语言执行
- `run_r_code` - 运行R代码，集成Seurat/绘图支持

```bash
# Seurat分析
> 使用R运行Seurat单细胞分析流程

# 统计分析
> 用R进行方差分析和多重比较
```

### 4.3 Julia执行
- `run_julia_code` - 运行Julia代码
- `new_interpreter` / `delete_interpreter` - 管理解释器
- `run_code_in_interpreter` / `get_interpreter_output` - 执行和获取输出

```bash
# 高性能计算
> 使用Julia进行大规模矩阵运算

# 数值模拟
> 运行Julia代码进行微分方程求解
```

## 5. Jupyter Notebook操作

### 核心工具
- `create_notebook` / `read_notebook` - 创建/读取notebook
- `add_notebook_cell` / `edit_notebook_cell` - 添加/编辑单元格
- `delete_notebook_cell` / `copy_notebook_cell` / `move_notebook_cell` - 单元格管理
- `add_notebook_template` - 添加模板

### 使用示例
```bash
# 创建分析notebook
> 创建一个新的Jupyter notebook，添加数据加载和分析代码

# 修改现有notebook
> 读取analysis.ipynb，在第3个cell后添加可视化代码

# 应用模板
> 为notebook添加标准的机器学习项目模板
```

## 6. PDF与图像处理

### 核心工具
- `read_pdf` - 读取并提取PDF文本（必须用于所有PDF操作）
- `observe_images` - 查看图片并回答问题

### 使用示例
```bash
# PDF文献处理
> 读取research_paper.pdf，提取方法部分的内容

# 图像分析
> 查看实验结果图片，描述观察到的模式

# 批量PDF处理
> 读取literature/目录下所有PDF，提取摘要
```

## 7. Web与检索

### 核心工具
- `web_fetch` - 抓取指定URL的页面内容（用户给出具体URL时必须使用）
- `web_search` - 基于DuckDuckGo的搜索接口（一般性搜索）

### 使用示例
```bash
# 获取在线文档
> 参考 https://docs.scipy.org 的内容，学习统计方法

# 搜索信息
> 搜索"单细胞RNA测序最佳实践"

# 批量网页抓取
> 从提供的URL列表中抓取所有页面内容
```

## 8. Todo任务管理

### 核心工具
- `add_todo` / `show_todos` - 添加/显示任务
- `execute_current_task` / `mark_task_done` - 执行/标记完成
- `complete_current_todo` / `complete_todo` - 完成任务
- `start_todo` / `work_on_next_todo` / `get_next_todo` - 任务流程控制
- `update_todo_status` / `remove_todo` - 更新/删除任务
- `clear_all_todos` / `clear_completed_todos` - 清理任务
- `configure_auto_cleanup` - 配置自动清理

### 使用示例
```bash
# 创建分析流程
> 添加todo：1.数据清洗 2.特征工程 3.模型训练 4.结果评估

# 执行任务
> 开始执行当前任务，完成后自动进入下一个

# 任务管理
> 显示所有待办任务的状态

# 自动化工作流
> 配置自动执行任务流程
```

## 9. 工具组合示例

### 数据分析项目
```bash
# 完整的项目设置和执行
> 执行以下操作：
1. 创建项目目录结构
2. 从网页获取数据集URL
3. 下载并读取数据文件
4. 运行Python分析代码
5. 生成Jupyter notebook报告
6. 将结果保存为PDF
```

### 文献研究流程
```bash
# 批量处理研究文献
> 执行以下步骤：
1. 列出papers/目录下所有PDF文件
2. 逐个读取PDF提取关键信息
3. 在文件中搜索特定方法
4. 创建文献综述文档
5. 生成引用列表
```

### 自动化数据处理
```bash
# 设置自动化流程
> 创建todo列表：
1. 每天定时获取新数据
2. 运行数据清洗脚本
3. 执行统计分析
4. 更新可视化仪表板
5. 发送完成通知
```

## 最佳实践

1. **合理组合工具** - 根据任务需求选择合适的工具组合
2. **利用Todo系统** - 将复杂任务分解为可管理的步骤
3. **保持环境整洁** - 及时关闭不用的shell和解释器
4. **错误处理** - 在关键步骤添加检查和错误处理
5. **结果验证** - 每步执行后验证输出是否符合预期

这些泛用工具提供了Pantheon-CLI的基础功能，通过灵活组合可以完成各种复杂的数据科学任务。