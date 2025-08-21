# 快速开始

让我们用5分钟体验Pantheon-CLI的混合编程魔法！

## 安装准备

### 简单安装
```bash
pip install pantheon-cli
```

### 验证安装
```bash
pantheon-cli --version
```

你应该看到版本信息，例如：`Pantheon-CLI version 1.0.0`

## 第一次启动

### 启动Pantheon-CLI
```bash
pantheon-cli
```

系统会提示你配置API密钥或选择本地模型。对于快速体验，可以配置一个OpenAI或Anthropic的API密钥。

## 体验混合编程

### 自然语言与Python的完美融合
```bash
# 启动后，你可以直接用自然语言描述需求
> 生成10个随机数并计算它们的均值和标准差

# 系统会自动生成并执行Python代码
# 你也可以直接写Python
> import numpy as np
> data = np.random.randn(1000)
> 现在对这个数据进行可视化

# 甚至可以混合使用R语言
> 用R语言对这个数据做正态性检验
```

### 单细胞数据分析示例
```bash
> 加载单细胞RNA-seq数据，文件是data.h5ad

# 系统自动使用scanpy加载数据
> 进行基础的质控，过滤低质量细胞和基因

> 现在用Seurat做细胞聚类分析

# 无缝切换到R语言环境进行Seurat分析
```

## 核心功能体验

### 智能代理助手
Pantheon-CLI内置PhD级别的科学分析代理：
- **理解科学上下文**：知道你在做什么类型的分析
- **推荐最佳方法**：自动选择合适的算法和参数  
- **解释分析结果**：提供专业的生物学解读

### 工具生态整合
- **Python生态**：Scanpy, Pandas, Matplotlib, Scikit-learn等
- **R语言支持**：Seurat, DESeq2, Monocle等
- **Julia集成**：高性能数值计算
- **生物信息学工具**：STAR, kallisto, Cell Ranger等

### 数据隐私保护
- **本地运行**：所有计算在你的机器上进行
- **支持本地模型**：可以完全离线使用
- **零数据上传**：研究数据永不离开你的控制

## 命令参考

### 基本启动选项
```bash
# 标准启动
pantheon-cli

# 指定模型
pantheon-cli --model gpt-4

# 禁用RAG知识库
pantheon-cli --disable_rag

# 指定工作目录
pantheon-cli --workspace /path/to/project
```

### CLI内命令
```bash
# 配置API密钥
/api-key openai sk-your-key-here

# 设置模型
/model gpt-4

# 查看帮助
/help
```

## 实际应用场景

### 生物医学研究
```bash
> 我有一个10x单细胞数据集，想分析T细胞的分化轨迹

> 加载空间转录组数据，识别组织结构中的基因表达模式

> 整合多组学数据，找到疾病相关的生物标志物
```

### 数据科学分析
```bash
> 对这个销售数据做时间序列分析和预测

> 构建一个机器学习模型来预测客户流失

> 用深度学习分析这些医学图像
```

### 教学和学习
```bash
> 解释一下主成分分析的原理并用代码演示

> 比较不同聚类算法在这个数据集上的表现

> 展示如何做A/B测试的统计分析
```

## 高级特性预览

### RAG知识库
- 内置单细胞基因组学领域的专业知识
- 自动获取最新的方法和最佳实践
- 支持自定义领域知识库

### 可扩展架构
- 通过toolsets系统添加新功能
- 社区贡献的分析模块
- 支持外部工具集成

### 多语言环境
- 中英文界面支持
- 多语言科学术语理解
- 本地化的分析建议

## 下一步学习路径

完成快速入门后，建议按以下顺序深入学习：

1. **[安装配置](/installation)** - 详细的安装和环境配置
2. **[模型配置](/installation/model-config)** - API密钥和模型选择
3. **[知识库配置](/installation/knowledge-base)** - 可选的RAG功能设置
4. **[基础命令](/basic-commands)** - 掌握核心功能
5. **[高级用法](/advanced-usage)** - 探索更多可能性

开始你的AI驱动科学分析之旅吧！