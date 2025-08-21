# Seurat与自然语言混合注释：PBMC3k单细胞分析

## 案例概述

这是一个基于**真实Pantheon CLI会话记录**的案例，展示了完整的Seurat单细胞RNA测序分析流程。通过自然语言指令完成从数据加载到细胞类型注释的全过程，演示了Pantheon CLI在生物信息学分析中的强大能力。

## 真实分析流程

### 核心用户输入
基于真实会话记录，用户使用了以下关键指令序列：

**1. 环境初始化**：
```
run r :library(dplyr) library(Seurat) library(patchwork)
```

**2. 数据加载调整**：
```
could you use /Users/fernandozeng/Downloads/pbmc3k_filtered_gene_bc_matrices.tar.gz instead?
```

**3. 质控指标计算**：
```
pbmc[["percent.mt"]] <- PercentageFeatureSet(pbmc, pattern = "^MT-")
```

**4. 质控可视化**：
```
VlnPlot(pbmc, features = c("nFeature_RNA", "nCount_RNA", "percent.mt"), ncol = 3)
```

**5. 图像保存请求**：
```
could you visualize with png?
```

**6. 标准流程执行**：
```
run standard pipeline step by step
```

**7. 标记基因可视化**：
```
VlnPlot(pbmc, features = c("MS4A1", "CD79A"))
```

**8. 细胞类型注释**：
```
Assigning cell type identity to clusters
```

这个完整的用户输入序列展现了Pantheon CLI将**复杂的单细胞分析转化为渐进式自然语言对话**的强大能力：从环境配置、数据处理、质量控制到细胞类型注释的完整Seurat分析流程。

