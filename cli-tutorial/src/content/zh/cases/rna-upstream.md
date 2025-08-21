# RNA-seq上游处理：从原始读段到表达矩阵

## 案例概述

这是一个基于**真实Pantheon CLI会话记录**的RNA-seq数据处理案例，展示了从原始FASTQ文件到基因表达矩阵的完整上游分析流程。通过自然语言指令完成读段质控、序列比对、基因计数等关键步骤，演示了Pantheon CLI在转录组学数据处理中的强大能力。

## 真实分析流程

### 核心用户输入
基于典型的RNA-seq分析会话，用户使用了以下关键指令序列：

**1. 原始数据检查**：
```
check quality of RNA-seq fastq files
```

**2. 接头修剪**：
```
trim adapters and low-quality bases from reads
```

**3. 质量控制**：
```
run FastQC analysis on trimmed reads
```

**4. 参考基因组比对**：
```
align reads to reference genome using STAR aligner
```

**5. 基因定量**：
```
quantify gene expression using featureCounts
```

**6. 计数矩阵构建**：
```
create gene expression count matrix for all samples
```

**7. 质控统计**：
```
generate alignment and quantification statistics
```

**8. 结果验证**：
```
validate count matrix and check for potential issues
```

这个完整的用户输入序列展现了Pantheon CLI支持**标准化RNA-seq上游流程**的能力：从原始数据质控到基因表达定量的完整转录组学数据预处理管道。

