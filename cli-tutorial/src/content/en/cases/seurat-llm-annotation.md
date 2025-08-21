# Seurat and Natural Language Mixed Annotation: PBMC3k Single-Cell Analysis

## Case Overview

This is a case based on **real Pantheon CLI session recordings**, demonstrating a complete Seurat single-cell RNA sequencing analysis workflow. Through natural language instructions, the entire process from data loading to cell type annotation is accomplished, showcasing Pantheon CLI's powerful capabilities in bioinformatics analysis.

## Real Analysis Workflow

### Core User Inputs
Based on real session recordings, users employed the following key instruction sequence:

**1. Environment Initialization**:
```
run r :library(dplyr) library(Seurat) library(patchwork)
```

**2. Data Loading Adjustment**:
```
could you use /Users/fernandozeng/Downloads/pbmc3k_filtered_gene_bc_matrices.tar.gz instead?
```

**3. Quality Control Metrics Calculation**:
```
pbmc[["percent.mt"]] <- PercentageFeatureSet(pbmc, pattern = "^MT-")
```

**4. Quality Control Visualization**:
```
VlnPlot(pbmc, features = c("nFeature_RNA", "nCount_RNA", "percent.mt"), ncol = 3)
```

**5. Image Saving Request**:
```
could you visualize with png?
```

**6. Standard Pipeline Execution**:
```
run standard pipeline step by step
```

**7. Marker Gene Visualization**:
```
VlnPlot(pbmc, features = c("MS4A1", "CD79A"))
```

**8. Cell Type Annotation**:
```
Assigning cell type identity to clusters
```

This complete user input sequence demonstrates Pantheon CLI's powerful capability to **transform complex single-cell analysis into progressive natural language conversations**: a complete Seurat analysis workflow from environment configuration, data processing, quality control to cell type annotation.