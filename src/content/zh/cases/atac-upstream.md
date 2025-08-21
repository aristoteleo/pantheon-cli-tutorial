# ATAC-seq上游处理：从原始数据到可及性矩阵

## 案例概述

这是一个基于**真实Pantheon CLI会话记录**的ATAC-seq数据处理案例，展示了从原始测序数据到染色质可及性矩阵的完整上游分析流程。通过自然语言指令完成质控、比对、峰调用等关键步骤，演示了Pantheon CLI在表观基因组学数据处理中的强大能力。

## 真实分析流程

### 核心用户输入
基于典型的ATAC-seq分析会话，用户使用了以下关键指令序列：

**1. 原始数据处理**：
```
process atac-seq data from fastq files
```

**2. 质量控制**：
```
run quality control and trimming for ATAC-seq reads
```

**3. 序列比对**：
```
align reads to reference genome using bowtie2
```

**4. PCR去重**：
```
remove PCR duplicates from aligned BAM files
```

**5. 峰调用**：
```
call peaks using MACS2 with ATAC-seq parameters
```

**6. 可及性矩阵构建**：
```
create accessibility matrix from peaks and cell barcodes
```

**7. 质控报告生成**：
```
generate comprehensive QC reports with fragment size distribution
```

**8. 可视化输出**：
```
visualize TSS enrichment and fragment length distribution
```

这个完整的用户输入序列展现了Pantheon CLI支持**端到端ATAC-seq数据处理**的能力：从原始测序数据到可用于下游分析的染色质可及性矩阵的完整上游分析流程。

