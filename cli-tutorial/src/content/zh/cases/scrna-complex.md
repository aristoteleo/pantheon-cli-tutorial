# 复杂单细胞RNA-seq注释：scVI深度学习分析

## 案例概述

这是一个基于**真实Pantheon CLI会话记录**的案例，展示了复杂单细胞RNA-seq数据的高级分析流程。通过自然语言指令完成从数据加载到scVI潜在空间聚类的全过程，演示了Pantheon CLI在处理复杂生物信息学分析中的强大能力。

## 真实分析流程

### 核心用户输入
基于真实会话记录，用户使用了以下关键指令序列：

**1. 数据目录探索**：
```
!ls data_scrna
```

**2. scVI聚类请求**：
```
could you cluster this data in data_scrna using scVI latent space?
```

**3. 数据加载**：
```
Load file as AnnData into variable adata
```

**4. 特征确认**：
```
X_scVI seems in the data already
```

**5. 专家知识请求**：
```
This is human lung scRNA-seq data, please list 20 potential cell types and list their top 5 marker based on your knowledge.
```

**6. 基于嵌入聚类**：
```
Could you cluster this data base X_scVI embedding?
```

**7. 标记基因计算**：
```
could you calculate these celltype's marker expression in each cluster?
```

**8. 差异基因分析**：
```
Find markers per cluster (rank_genes_groups) and return top markers.
```

**9. 综合注释**：
```
Could you combined the clusters's marker and cell type's marker to annotate each cluster.
```

**10. 可视化验证**：
```
visualize the cell_type and predicted_celltype in umap using omicverse.
```

**11. 注释校正请求**：
```
please check each cluster's annotation and correct the wrong annotation
```

**12. 深度验证指导**：
```
you need to check based the celltype's marker first, calculate the mean expression in each cluster. And then you can infer the celltype based on the cluster's special marker with your knowledge.
```

**13. 最终可视化**：
```
visualize all result and legend should on data.
```

这个丰富的用户输入序列展现了Pantheon CLI支持**AI增强的细胞类型注释**的强大能力：结合深度学习嵌入、专家知识、标记基因分析和交互式校正的智能化单细胞分析流程。

