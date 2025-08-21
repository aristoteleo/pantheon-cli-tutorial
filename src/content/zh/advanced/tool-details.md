# 工具详解：Pantheon CLI 自然语言到工具映射指南

本章节深入解析Pantheon-CLI的核心工具实现机制和自然语言映射系统，帮助您理解如何通过自然语言描述来调用相应的工具功能。

## 如何使用本指南

当您有任务需求时，在下面的**"您想说的话"**部分找到对应描述，然后使用相应的**工具调用**命令。

---

## 任务管理与规划

### 您想说的话 → 调用的工具

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "我需要跟踪我的项目进度" | `add_todo("完成数据分析项目")` | 创建新任务并自动分解为子任务 |
| "显示我正在处理的工作" | `show_todos()` | 显示所有当前任务的状态和进度 |
| "我下一步应该做什么？" | `execute_current_task()` | 为当前活跃任务提供智能指导 |
| "我完成了这一步" | `mark_task_done("数据预处理完成")` | 标记当前任务已完成并移至下一任务 |
| "清除所有任务" | `clear_all_todos()` | 移除所有任务以重新开始 |
| "移除已完成的任务" | `clear_completed_todos()` | 清理完成的任务，保留活跃任务 |
| "更新任务状态" | `update_todo_status("任务ID", "已完成")` | 更改特定任务的状态 |
| "标记特定任务完成" | `complete_todo("任务ID")` | 将特定待办事项标记为已完成 |
| "开始处理任务" | `start_todo("任务ID")` | 将特定任务设置为进行中 |
| "删除任务" | `remove_todo("任务ID")` | 从列表中移除特定待办事项 |
| "获取下一个任务" | `get_next_todo()` | 返回下一个待处理的任务 |
| "处理下一项工作" | `work_on_next_todo()` | 开始处理下一个待处理任务 |

---

## 生物信息学与ATAC-seq分析

**如需详细的生物信息学和ATAC-seq分析工具信息，请参阅详细指南：**

📖 **[生物信息学工具指南](README_BIOINFORMATICS.md)**

**快速概览：**
- **ATAC-seq分析**: `/bio atac init`（进入模式），`/bio atac upstream <文件夹>`（运行分析）
- **单细胞ATAC**: `/bio scatac init`，`/bio scatac upstream <文件夹>`（Cell Ranger ATAC工具集）
- **单细胞RNA**: `/bio scrna init`，`/bio scrna analysis <文件>`（omicverse驱动的分析）
- **核心功能**: 物种检测、基因组设置、质量控制、比对、峰检测、细胞注释
- **关键工具**: `bio_atac_scan_folder()`，`bio_scatac_install()`，`bio_scrna_analysis()`，`bio_scrna_annotate()`

生物信息学指南包括以下详细映射：
- 项目设置和物种检测
- 基因组资源管理
- 质量控制和预处理
- 比对和BAM处理
- 峰检测和分析
- 可视化和报告
- 单细胞ATAC-seq工作流（Cell Ranger ATAC）
- 单细胞RNA-seq分析（omicverse集成）
- 细胞类型注释和亚型分析
- 工具安装和依赖管理

---

## 生物信息学分析工具

### 🧬 GeneAgent - 原创7步迭代验证系统

GeneAgent是专门的生物分析工具，使用独特的7步迭代验证方法。它结合LLM推理和真实生物数据库API，产生科学验证的基因集分析。

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "使用GeneAgent分析基因TP53,BRCA1,EGFR" | `bio GeneAgent TP53,BRCA1,EGFR` | 对基因集运行完整的7步迭代验证 |
| "对基因ERBB2,ERBB4,FGFR2,FGFR4,HRAS,KRAS进行富集分析" | `bio GeneAgent ERBB2,ERBB4,FGFR2,FGFR4,HRAS,KRAS --analysis_type enrichment` | 具有生物验证的富集分析 |
| "对MYC,JUN,FOS运行综合GeneAgent分析" | `bio GeneAgent MYC,JUN,FOS --analysis_type comprehensive` | 使用所有生物数据源的完整分析 |
| "研究免疫基因CD4,CD8A,IL2的蛋白相互作用" | `bio GeneAgent CD4,CD8A,IL2 --analysis_type interactions` | 具有验证的蛋白相互作用网络分析 |
| "细胞因子的GeneAgent分析并输出摘要" | `bio GeneAgent IFNG,TNF,IL6 --output_format summary` | 基于证据的简洁摘要分析 |
| "验证肿瘤抑制基因的生物学声明" | `bio GeneAgent TP53,RB1,BRCA1 --save_results true` | 科学验证并保存结果 |

#### GeneAgent 7步流程：
1. **生成基线分析**（LLM）- 初始生物过程分析
2. **提取可测试的生物学声明**（LLM）- 生成可验证的陈述
3. **使用8个真实生物API验证声明** - NCBI、g:Profiler、Enrichr、STRING等
4. **基于验证证据修改分析**（LLM）- 证据驱动的完善
5. **生成新的分析声明**（LLM）- 第二轮声明生成
6. **使用生物API进行第二轮验证** - 额外证据收集
7. **最终基于证据的综合**（LLM）- 科学验证的结论

#### 真实生物数据源：
- **NCBI E-utilities** - 基因功能摘要和注释
- **g:Profiler** - GO富集分析和功能分析
- **Enrichr** - 通路分析（KEGG、Reactome、MSigDB数据库）
- **STRING/BioGRID** - 蛋白-蛋白相互作用网络
- **DisGeNET** - 疾病-基因关联和表型
- **InterPro** - 蛋白域和家族分类
- **CORUM** - 蛋白复合物成员数据
- **PubMed** - 文献证据和引用

#### 分析类型：
- `comprehensive`：使用所有生物数据源的完整7步验证
- `functional`：专注于生物功能和细胞过程
- `enrichment`：具有数据库验证的GO/KEGG富集分析
- `interactions`：具有实验验证的蛋白相互作用网络
- `clinical`：疾病关联和治疗靶点分析
- `custom`：基于生物证据回答自定义问题

#### GeneAgent的特殊之处：
- ✅ **基于证据**：每个生物学声明都经过真实数据库验证
- ✅ **迭代完善**：通过多轮验证改进分析
- ✅ **科学验证**：最终结果达到发表质量
- ✅ **无幻觉**：零伪造生物信息
- ✅ **真实API**：使用8个权威生物数据库
- ✅ **原创方法**：实现完整的研究论文算法

### ATAC-seq分析

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "初始化ATAC-seq项目" | `/bio atac init` | 进入ATAC-seq分析模式并清除现有待办事项 |
| "分析文件夹中的ATAC数据" | `/bio atac upstream ./data` | 运行完整的上游ATAC-seq分析管道 |
| "扫描文件夹中的ATAC数据" | `bio_atac_scan_folder("./data")` | 扫描目录中的ATAC-seq FASTQ文件 |
| "检查ATAC依赖" | `bio_atac_check_dependencies()` | 验证ATAC分析工具安装 |
| "设置基因组资源" | `bio_atac_setup_genome_resources("human", "hg38")` | 下载基因组、GTF和黑名单文件 |
| "自动比对FASTQ文件" | `bio_atac_auto_align_fastq("./data")` | 使用BWA-MEM2的自动比对管道 |
| "使用MACS2调用峰" | `bio_atac_call_peaks_macs2("./bam_files")` | 使用MACS2算法进行峰检测 |
| "生成质控报告" | `bio_atac_generate_atac_qc_report("./results")` | 创建综合质量控制报告 |

### 单细胞ATAC-seq分析

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "初始化scATAC项目" | `/bio scatac init` | 进入单细胞ATAC-seq分析模式 |
| "安装Cell Ranger ATAC" | `/bio scatac install` | 下载并安装cellranger-atac v2.2.0 |
| "分析10X Chromium ATAC数据" | `/bio scatac upstream ./10x_data` | 运行cellranger-atac上游分析管道 |
| "处理单个样本" | `/bio scatac count Sample1` | 为单个样本运行cellranger-atac count |

### 单细胞RNA-seq分析

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "初始化scRNA项目" | `/bio scrna init` | 进入单细胞RNA-seq分析模式 |
| "加载和分析scRNA数据" | `/bio scrna analysis ./data.h5ad` | 使用omicverse进行综合scRNA-seq分析 |
| "运行质量控制" | `/bio scrna qc ./data.h5ad` | 质量控制分析，包括指标和过滤 |
| "预处理scRNA数据" | `/bio scrna preprocess ./data.h5ad` | 标准化和预处理管道 |
| "注释细胞类型" | `/bio scrna annotate ./data.h5ad` | 使用CellOntologyMapper进行细胞类型注释 |
| "执行亚型分析" | `/bio scrna subtype ./data.h5ad` | 高级细胞亚型识别和分析 |

### 通用生物工具管理

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "列出所有生物工具" | `bio list` | 显示所有可用的生物信息学分析工具 |
| "获取工具信息" | `bio info atac` | 获取特定生物工具的详细信息 |
| "获取生物帮助" | `bio help scrna` | 获取生物工具的帮助和使用示例 |

---

## 直接代码执行（REPL风格命令）

### 快速执行前缀

| **前缀** | **语言** | **示例** | **描述** |
|------------|--------------|-------------|------------------|
| `!` | **Shell/Bash** | `!ls -la` | 在REPL中直接执行shell命令 |
| `%` | **Python** | `%print("Hello World")` | 直接执行Python代码并立即输出 |
| `>` | **R** | `>summary(mtcars)` | 直接执行R统计代码 |
| `]` | **Julia** | `]println("Hello Julia")` | 直接执行Julia高性能计算代码 |

### 直接执行示例

```bash
# Shell命令 - 即时系统操作
!pwd                           # 显示当前目录
!ls -la *.py                  # 列出Python文件
!git status                   # 检查git状态
!pip install pandas          # 安装Python包

# Python代码 - 数据分析和脚本
%import pandas as pd         # 导入库
%df = pd.read_csv("data.csv") # 加载数据
%df.head()                   # 显示前几行
%x = [1,2,3]; sum(x)         # 快速计算

# R统计计算 - 数据科学
>library(ggplot2)            # 加载R包
>data(mtcars)                # 加载数据集
>summary(mtcars)             # 统计摘要
>plot(mtcars$mpg, mtcars$hp) # 创建图表

# Julia高性能计算 - 数值分析
]using LinearAlgebra         # 加载Julia包
]A = [1 2; 3 4]             # 矩阵操作
]det(A)                     # 计算行列式
]using Plots; plot([1,2,3]) # 创建可视化
```

### 主要特性

- **共享解释器会话**: 所有带前缀的命令与AI代理使用相同的解释器会话
- **REPL风格输出**: 只显示最终结果和打印语句，抑制中间赋值
- **即时执行**: 无需调用函数 - 只需输入前缀和代码
- **语言切换**: 在同一会话中无缝切换语言
- **持久状态**: 每种语言内的变量和导入在命令间持续

---

## Python代码执行

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "运行这个Python代码" | `run_python("print('Hello World')")` | 执行具有完整包支持的Python代码 |
| "快速Python执行" | `%print("Hello World")` | **新功能**: 使用`%`前缀直接执行Python |
| "在特定解释器中运行代码" | `run_code_in_interpreter("interpreter_id", "print('test')")` | 在特定Python解释器会话中执行代码 |
| "创建新Python解释器" | `new_interpreter("my_python_session")` | 创建新的隔离Python解释器会话 |
| "删除Python解释器" | `delete_interpreter("interpreter_id")` | 移除Python解释器会话 |

---

## R统计计算

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "运行R统计分析" | `run_r("summary(mtcars)")` | 执行R代码进行统计计算 |
| "快速R执行" | `>summary(mtcars)` | **新功能**: 使用`>`前缀直接执行R |
| "在特定会话中运行R代码" | `run_code_in_interpreter("r_session", "plot(iris)")` | 在特定解释器会话中执行R代码 |
| "创建新R解释器" | `new_interpreter("my_r_session")` | 创建新的隔离R解释器会话 |
| "删除R解释器" | `delete_interpreter("r_session_id")` | 移除R解释器会话 |
| "获取R解释器输出" | `get_interpreter_output("r_session_id")` | 检索R解释器会话的输出 |

---

## Julia高性能计算

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "运行Julia科学计算" | `julia("using LinearAlgebra; det([1 2; 3 4])")` | 执行Julia代码进行高性能数值分析 |
| "快速Julia执行" | `]println("Hello Julia")` | **新功能**: 使用`]`前缀直接执行Julia |
| "创建Julia环境" | `new_interpreter("julia_session")` | 创建新的隔离Julia解释器会话 |
| "在会话中运行Julia代码" | `run_code_in_interpreter("julia_session", "using Plots; plot([1,2,3])")` | 在特定解释器会话中执行Julia代码 |
| "安装Julia包" | `julia_install_package("DataFrames")` | 为科学计算安装Julia包 |
| "在Julia中加载示例数据" | `load_sample_data("iris")` | 加载用于分析的示例数据集 |
| "快速Julia分析" | `quick_analysis(df)` | 执行自动化数据分析工作流 |
| "自动保存Julia图表" | `auto_save_plot()` | 自动保存生成的图表 |
| "删除Julia解释器" | `delete_interpreter("julia_session_id")` | 移除Julia解释器会话 |

---

## 文件操作与管理

### 基础文件操作

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "列出目录中的文件" | `list_files("/path/to/directory")` | 列出指定路径中的所有文件和目录 |
| "读取这个文件" | `read_file("/path/to/file.txt")` | 读取具有语法高亮的文件内容 |
| "写入内容到文件" | `write_file("/path/to/output.txt", "content")` | 将文本内容写入指定文件 |
| "创建目录" | `create_directory("/path/to/new/folder")` | 递归创建目录结构 |
| "删除文件" | `delete_file("/path/to/unwanted.txt")` | 移除指定文件 |
| "删除目录" | `delete_directory("/path/to/folder")` | 移除目录及其所有内容 |
| "移动文件" | `move_file("/old/path/file.txt", "/new/path/file.txt")` | 将文件移动到新位置 |
| "显示文件树" | `list_file_tree("/project")` | 显示分层目录结构 |
| "查看图像" | `observe_images("/path/to/images")` | 显示目录中的图像文件 |
| "读取PDF文件" | `read_pdf("/path/to/document.pdf")` | 提取和显示PDF内容 |

---

## 文本编辑与文件修改

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "编辑文件中的特定行" | `edit_file("/path/file.py", line_number=10, new_content="updated line")` | 修改文本文件中的特定行 |
| "在文件中搜索文本" | `search_in_file("/path/file.txt", "search_term")` | 在文件中搜索特定文本 |
| "在行中插入文本" | `insert_at_line("/path/file.py", line_number=5, content="import pandas")` | 在指定行号插入新内容 |
| "从文件中删除行" | `delete_lines("/path/file.txt", start_line=10, end_line=15)` | 从文件中移除指定范围的行 |
| "创建新文件" | `create_file("/path/to/new_file.txt", "initial content")` | 创建具有指定内容的新文件 |

## 工作流架构详解

## 代码搜索与分析

### 基础搜索操作

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "按模式搜索文件" | `glob("/project", "*.py")` | 查找匹配glob模式的文件 |
| "在文件中搜索文本" | `grep("/project", "TODO", "*.py")` | 在文件中搜索文本模式 |
| "列出目录内容" | `ls("/path/to/directory")` | 详细列出文件和目录 |

---

## 代码质量与验证

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "检查Python语法" | `validate_python_code("/path/script.py")` | 验证Python代码语法和结构 |
| "验证shell命令" | `validate_command("complex_command")` | 验证shell命令语法 |
| "查找常见代码错误" | `detect_common_errors("/path/script.py")` | 检测常见编程错误 |
| "建议函数替代方案" | `suggest_function_alternatives("old_function")` | 推荐函数的现代替代方案 |
| "验证函数调用" | `validate_function_call("function_name", ["arg1", "arg2"])` | 检查函数调用语法和参数 |
| "检查导入语句" | `validate_imports("/path/script.py")` | 验证Python文件中的导入语句 |
| "检查代码风格" | `check_code_style("/path/script.py")` | 分析代码风格和格式 |

---

## Jupyter Notebook操作

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "显示notebook内容" | `read_notebook("/path/analysis.ipynb")` | 以美观格式显示notebook |
| "编辑notebook单元格" | `edit_notebook_cell("/path/notebook.ipynb", cell_index=2, new_content="code")` | 修改特定notebook单元格 |
| "添加新单元格" | `add_notebook_cell("/path/notebook.ipynb", content="# Analysis", cell_type="markdown")` | 在指定位置插入新单元格 |
| "删除notebook单元格" | `delete_notebook_cell("/path/notebook.ipynb", cell_index=3)` | 从notebook中移除特定单元格 |
| "创建新notebook" | `create_notebook("/path/new_analysis.ipynb")` | 创建新的空Jupyter notebook |
| "复制notebook单元格" | `copy_notebook_cell("/path/notebook.ipynb", source_index=1, target_index=5)` | 将单元格复制到不同位置 |
| "移动notebook单元格" | `move_notebook_cell("/path/notebook.ipynb", from_index=2, to_index=8)` | 将单元格移动到不同位置 |
| "添加notebook模板" | `add_notebook_template("/path/notebook.ipynb", template_type="data_analysis")` | 添加预定义模板单元格 |

---

## 网络操作

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "获取网页内容" | `web_fetch("https://example.com")` | 检索和显示网页内容 |
| "搜索互联网" | `web_search("Python data analysis tutorials")` | 使用搜索引擎搜索网络 |
| "Google搜索信息" | `google_search("ATAC-seq analysis methods")` | 执行Google搜索并返回结果 |
| "爬取网页数据" | `fetch_web_page("https://site.com")` | 从网页提取结构化数据 |

---

## 系统与Shell操作

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "直接运行shell命令" | `!ls -la` | **新功能**: 使用`!`前缀直接执行shell |
| "执行系统命令" | `!pwd` | **新功能**: 即时系统命令执行 |
| "创建新shell会话" | `new_shell("my_shell_session")` | 创建新的隔离shell环境 |
| "关闭shell会话" | `close_shell("shell_session_id")` | 终止特定shell会话 |
| "在shell中运行命令" | `run_command_in_shell("shell_id", "ls -la")` | 在特定shell会话中执行命令 |
| "获取shell输出" | `get_shell_output("shell_session_id")` | 检索shell会话的输出 |
| "运行单个命令" | `run_command("ps aux")` | 执行单个shell命令 |

---

## 文件传输与同步

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "打开文件用于写入" | `open_file_for_write("/path/to/file.txt")` | 打开文件句柄进行流式写入操作 |
| "写入数据块" | `write_chunk("file_handle", "data_chunk")` | 将数据块写入打开的文件句柄 |
| "关闭文件句柄" | `close_file("file_handle")` | 关闭文件句柄并完成写入 |

---

## 向量数据库与RAG操作

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "搜索向量数据库" | `query_vector_db("database_name", "search query")` | 在向量数据库中执行语义搜索 |
| "获取数据库信息" | `get_vector_db_info("database_name")` | 检索向量数据库的元数据和统计信息 |

---

## AI驱动的外部工具集生成

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "生成网页爬取工具集" | `generate_toolset("web_scraper", "web_scraping", "scrape e-commerce sites")` | AI创建自定义网页爬取工具 |
| "创建区块链分析工具" | `generate_toolset("crypto_analyzer", "cryptocurrency", "analyze DeFi protocols")` | AI生成区块链分析工具集 |
| "构建ML管道工具集" | `generate_toolset("ml_pipeline", "machine_learning", "automate model training")` | AI创建机器学习工作流工具 |
| "生成自定义领域工具集" | `generate_toolset("custom_tools", "domain", "description")` | AI自动适应任何领域 |
| "列出现有工具集" | `list_existing_toolsets()` | 显示所有已生成的外部工具集 |
| "移除特定工具集" | `remove_toolset("toolset_name")` | 移除特定外部工具集 |
| "清除所有外部工具集" | `clear_all_toolsets()` | 移除所有外部工具集（谨慎使用） |
| "获取生成帮助" | `get_generation_help()` | 获取工具集生成的帮助和示例 |

**关键特性：**
- **AI驱动**: 每个工具集都包含智能工作流指导
- **领域无关**: 适用于任何领域 - 网页爬取、区块链、ML、生物信息学等
- **自动集成**: 生成的工具集自动与TodoList管理配合工作
- **智能工具**: AI根据领域和描述确定适当的工具

---

## 服务与端点管理

| **自然语言请求** | **工具调用** | **功能描述** |
|------------------------------|---------------|--------------------------|
| "列出所有服务" | `list_services()` | 显示所有注册的服务端点 |
| "获取图像为base64" | `fetch_image_base64("image_url")` | 检索图像并转换为base64格式 |
| "添加新服务" | `add_service("service_name", "http://localhost:8080")` | 注册新服务端点 |
| "获取服务详情" | `get_service("service_name")` | 检索特定服务的信息 |
| "检查服务状态" | `services_ready()` | 检查所有注册服务是否可用 |

---

## 常见工作流模式

### 模式1：完整数据分析工作流
```
用户："我想做一个完整的RNA-seq分析"
命令：add_todo("从FASTQ到结果完成RNA-seq分析")
命令：execute_current_task()  # 获取第一步指导
命令：run_python("# 预处理脚本")  # 执行分析
命令：mark_task_done("预处理完成")  # 标记进度
```

### 模式2：从头开始的ATAC-seq分析
```
用户："分析我文件夹中的ATAC-seq数据"
命令：/bio atac init  # 进入ATAC模式
命令：/bio atac upstream ./data_folder  # 开始上游分析
命令：bio_atac_scan_folder("./data_folder")  # 扫描内容
命令：bio_atac_auto_detect_species("./data_folder")  # 检测物种
命令：bio_atac_setup_genome_resources("human", "hg38")  # 设置基因组
命令：bio_atac_auto_align_fastq("./data_folder")  # 比对reads
```

### 模式3：代码质量与验证
```
用户："检查和修复我的Python代码"
命令：validate_python_code("/path/script.py")  # 检查语法
命令：check_code_style("/path/script.py")  # 质量检查
命令：edit_file("/path/script.py", line_number=10, new_content="fixed_line")  # 修复问题
命令：validate_python_code("/path/script.py")  # 重新验证
```

### 模式4：研究与文档
```
用户："研究我的分析最佳实践"
命令：web_search("ATAC-seq analysis best practices 2024")  # 网络搜索
命令：google_search("quality control methods genomics")  # Google搜索
命令：query_vector_db("research_docs", "QC metrics importance")  # 搜索文档
命令：write_file("/notes/research.md", "findings")  # 保存笔记
```

### 模式5：单细胞RNA-seq分析
```
用户："分析带有细胞类型注释的单细胞RNA数据"
命令：/bio scrna init  # 进入scRNA模式
命令：/bio scrna analysis ./data.h5ad  # 加载和分析数据
命令：bio_scrna_run_quality_control("./data.h5ad")  # QC分析
命令：bio_scrna_run_preprocessing("./data.h5ad")  # 标准化
命令：bio_scrna_run_cell_type_annotation("./data.h5ad")  # 细胞注释
```

### 模式6：Julia高性能计算
```
用户："用Julia求解微分方程"
命令：]using DifferentialEquations  # 直接加载包
命令：]prob = ODEProblem(f, u0, tspan)  # 定义问题
命令：]sol = solve(prob)  # 求解方程
命令：]using Plots; plot(sol)  # 绘制解
```

### 模式7：多语言REPL开发
```
用户："跨语言快速分析"
命令：!ls data/  # 检查可用数据文件
命令：%import pandas as pd; df = pd.read_csv("data/data.csv")  # 在Python中加载
命令：%df.describe()  # Python描述性统计
命令：>library(ggplot2)  # 切换到R进行绘图
命令：>data <- read.csv("data/data.csv")  # 在R中加载
命令：>ggplot(data, aes(x=var1, y=var2)) + geom_point()  # R可视化
命令：]using DataFrames, CSV  # 切换到Julia进行性能计算
命令：]df = CSV.read("data/data.csv", DataFrame)  # 在Julia中加载
命令：]mean(df.var1)  # Julia统计计算
```

### 模式8：系统管理工作流
```
用户："检查系统状态和管理进程"
命令：!ps aux | grep python  # 检查Python进程
命令：!df -h  # 检查磁盘使用
命令：!free -m  # 检查内存使用
命令：!top -n 1 | head -20  # 检查CPU使用
命令：%import psutil; psutil.cpu_percent()  # Python系统监控
命令：!systemctl status nginx  # 检查服务状态
```

## 专业技巧

1. **从TODO开始** - 对复杂的多步任务使用`add_todo()`
2. **获取指导** - 不确定下一步时使用`execute_current_task()`
3. **使用直接执行** - **新功能**: 使用`!`、`%`、`>`、`]`进行即时代码执行
4. **快速命令** - 使用`!ls`、`%import pandas`、`>summary()`、`]println()`进行快速操作
5. **先验证** - 在运行昂贵操作前检查语法和文件
6. **跟踪进度** - 始终使用`mark_task_done()`跟踪完成情况
7. **使用会话** - 为复杂工作流创建解释器/shell会话
8. **组合工具** - 将多个工具链接在一起形成强大的工作流
9. **智能搜索** - 使用`glob()`搜索文件，`grep()`搜索内容，`web_search()`进行研究
10. **管理质量** - 执行前使用质量工具验证代码
11. **选择正确语言** - Python用于一般分析，R用于统计/Seurat，Julia用于HPC
12. **无缝切换语言** - **新功能**: 在同一会话中混合使用`%python`、`>R`、`]julia`、`!shell`
13. **生物模式进入** - 使用`/bio <tool> init`进入专注的分析模式
14. **生成自定义工具** - 使用`generate_toolset()`创建特定领域的工作流
15. **利用AI指导** - 生成的工具集包含智能工作流建议
16. **REPL风格开发** - **新功能**: 使用直接执行进行交互式开发和测试

本指南将您的自然语言意图映射到特定的工具调用，使您能够在Pantheon CLI中高效完成任何任务。