# 知识库配置（可选）

Pantheon-CLI支持配置RAG（检索增强生成）知识库来增强分析能力，
特别是为单细胞/空间基因组学等生物信息学分析提供专业知识支持。

## 什么是RAG知识库

RAG知识库是基于向量数据库的知识检索系统，可以帮助Pantheon-CLI：

### 主要功能
- **工具文档检索** - 快速查找kallisto-bustools、STAR、Cell Ranger等工具文档
- **最佳实践指导** - 提供单细胞RNA-seq、ATAC-seq等分析流程建议
- **参数优化建议** - 根据数据类型推荐合适的分析参数
- **错误诊断** - 帮助诊断常见的生物信息学分析问题

### 支持的数据源类型
- **在线包文档** - 官方文档网站（如Seurat、Scanpy）
- **PDF文档** - 技术手册和论文
- **教程和指南** - Galaxy项目等培训材料
- **工具说明** - 命令行工具使用指南

## 配置方法

### 方法一：构建默认RAG数据库（推荐）

Pantheon-CLI提供了预配置的RAG系统，包含主要的生物信息学工具文档：

```bash
# 构建默认RAG数据库
python -m pantheon.toolsets.utils.rag build \
    pantheon_cli/cli/rag_system_config.yaml \
    tmp/pantheon_cli_tools_rag
```

这将创建一个向量数据库，包含以下工具的文档：

- **kallisto-bustools** - 单细胞RNA-seq预处理工具
- **STAR** - RNA-seq比对工具  
- **Cell Ranger** - 10x Genomics单细胞分析流程
- **Seurat** - R语言单细胞基因组学分析工具包
- **Scanpy** - Python单细胞分析工具包
- **Galaxy Bulk RNA-seq** - 批量RNA-seq分析教程

### 方法二：自定义RAG配置

创建自定义的 `rag_config.yaml` 文件：

```yaml
custom-knowledge-base:
  description: 自定义知识库，包含特定领域文档
  type: vector_db
  parameters:
    embedding_model: text-embedding-3-large
    chunk_size: 4000
    chunk_overlap: 200
  items:
    my-protocol:
      type: package documentation
      url: https://my-lab.com/protocols/
      description: "实验室标准操作流程"
    custom-tools:
      type: pdf
      url: https://example.com/manual.pdf
      description: "自定义工具使用手册"
    local-docs:
      type: local_directory
      path: /path/to/local/docs
      description: "本地文档目录"
```

然后构建自定义数据库：

```bash
python -m pantheon.toolsets.utils.rag build \
    custom_rag_config.yaml \
    tmp/custom_rag_db
```

## 启动带有RAG功能的Pantheon-CLI

### 使用默认RAG数据库

```bash
# 启动时自动使用默认RAG数据库（如果存在）
pantheon-cli

# 指定RAG数据库路径
pantheon-cli --rag_db tmp/pantheon_cli_tools_rag/pantheon-cli-tools

# 启动时禁用RAG功能
pantheon-cli --disable_rag
```

**注意**: 如果默认RAG数据库路径 `tmp/pantheon_cli_tools_rag/pantheon-cli-tools` 
不存在，CLI会自动禁用RAG功能。

### 使用自定义RAG数据库

```bash
# 使用自定义构建的RAG数据库
pantheon-cli --rag_db tmp/custom_rag_db/custom-knowledge-base
```

## RAG系统技术参数

### 向量化配置
- **嵌入模型**: `text-embedding-3-large` (OpenAI)
- **文档分块大小**: 4000 字符
- **分块重叠**: 200 字符  
- **向量维度**: 3072 维

### 支持的文档格式
- **package documentation**: 在线文档网站
- **pdf**: PDF文件（自动文本提取）
- **local_directory**: 本地文档目录
- **markdown**: Markdown格式文档

## 在CLI中使用RAG知识库

启动Pantheon-CLI后，RAG功能会自动集成到对话中。你可以这样使用：

### 自然语言查询

```bash
# 启动CLI
pantheon-cli

# 在对话中直接询问工具相关问题
> 如何使用kallisto和bustools处理单细胞RNA-seq数据？

> Cell Ranger的主要流程是什么？

> Seurat和Scanpy有什么区别，分别适合什么场景？

> STAR比对的关键参数有哪些？
```

### 分析任务中的智能建议

```bash
# RAG会自动在分析过程中提供相关建议
> 我有10x单细胞数据，想做质控和降维分析

> 如何处理ATAC-seq数据进行peak calling？

> 想比较不同实验条件下的基因表达差异
```

## 高级RAG管理

### 构建自定义数据库

```bash
# 从配置文件构建RAG数据库
python -m pantheon.toolsets.utils.rag build config.yaml ./output_dir

# 构建时指定输出目录
python -m pantheon.toolsets.utils.rag build \
    my_rag_config.yaml \
    ./my_custom_rag_db
```

### 上传到Hugging Face（可选）

```bash
# 设置Hugging Face token
export HUGGINGFACE_TOKEN=your_hf_token

# 上传构建的数据库
python -m pantheon.toolsets.utils.rag upload ./output_dir
```

### 下载预构建数据库

```bash
# 从Hugging Face下载预构建的数据库
python -m pantheon.toolsets.utils.rag download ./local_dir
```


## 最佳实践

### RAG配置优化

1. **合适的分块大小**
   - 默认4000字符适合大多数文档
   - 技术文档可适当增大到6000字符
   - API文档可减小到2000字符

2. **嵌入模型选择**
   - `text-embedding-3-large`: 最佳质量，适合生产环境
   - `text-embedding-3-small`: 更快速度，适合开发测试
   - `text-embedding-ada-002`: 成本较低的选择

3. **文档源组织**
   - 按工具类型分组（比对工具、质控工具、可视化工具）
   - 包含官方文档、教程和最佳实践
   - 定期更新过时的文档链接

### 知识库维护

```yaml
# 推荐的RAG配置结构
bioinformatics-tools:
  description: 生物信息学工具综合文档库
  type: vector_db
  parameters:
    embedding_model: text-embedding-3-large
    chunk_size: 4000
    chunk_overlap: 200
  items:
    # 单细胞分析工具
    single-cell-tools:
      type: package documentation
      url: https://scanpy.readthedocs.io/
      description: "Python单细胞分析"
    
    # R语言工具
    r-genomics:
      type: package documentation  
      url: https://satijalab.org/seurat/
      description: "R语言基因组学分析"
      
    # 命令行工具
    alignment-tools:
      type: pdf
      url: https://github.com/alexdobin/STAR/raw/master/doc/STARmanual.pdf
      description: "STAR比对工具手册"
```

## 故障排除

### 常见问题

**RAG数据库构建失败**
```bash
# 检查配置文件格式
python -c "import yaml; yaml.safe_load(open('config.yaml'))"

# 手动测试单个URL
curl -I https://your-documentation-url.com

# 查看详细构建日志
python -m pantheon.toolsets.utils.rag build config.yaml ./output --verbose
```

**启动时RAG功能未加载**
```bash
# 检查数据库路径是否存在
ls -la tmp/pantheon_cli_tools_rag/pantheon-cli-tools

# 手动指定数据库路径启动
pantheon-cli --rag_db /full/path/to/your/rag/database

# 查看启动日志
pantheon-cli --verbose
```

**查询结果质量不佳**
```bash
# 检查嵌入模型是否正确配置
# 确保OpenAI API密钥有效
export OPENAI_API_KEY=your_api_key

# 重新构建数据库，调整chunk_size参数
# 在config.yaml中修改：
parameters:
  chunk_size: 6000  # 增大分块大小
  chunk_overlap: 300  # 增加重叠
```

### 网络问题解决

```bash
# 如果在网络受限环境下构建RAG
# 可以先下载文档到本地，然后使用local_directory类型

# 例如，下载Scanpy文档
wget -r -np -k https://scanpy.readthedocs.io/

# 然后在配置中使用
local-scanpy:
  type: local_directory
  path: ./scanpy.readthedocs.io
  description: "本地Scanpy文档"
```

### 性能优化

```bash
# 对于大型数据库，可以启用缓存
export PANTHEON_CACHE_DIR=/tmp/pantheon_cache

# 调整查询参数优化响应速度
# 在Python API中：
results = await db.query(
    query="your query",
    top_k=3,  # 减少返回结果数量
    source="specific_source"  # 指定特定源
)
```

## 总结

RAG知识库为Pantheon-CLI提供了强大的领域知识支持，特别适合：

- **生物信息学研究** - 快速获取工具使用指南和分析流程
- **数据科学项目** - 自动获取最佳实践和参数建议  
- **教学培训** - 为学习者提供实时的工具文档支持
- **团队协作** - 统一的知识库确保分析标准的一致性

配置完成后，你可以在日常分析中充分利用RAG知识库的智能检索功能！

前往[验证安装](/installation/verify)确认RAG功能正常工作。