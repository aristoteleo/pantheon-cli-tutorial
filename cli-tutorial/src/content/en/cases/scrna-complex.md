# Complex Single-Cell RNA-seq Annotation: scVI Deep Learning Analysis

## Case Overview

This is a case based on **real Pantheon CLI session recordings**, demonstrating advanced analysis workflows for complex single-cell RNA-seq data. Through natural language instructions, the entire process from data loading to scVI latent space clustering is accomplished, showcasing Pantheon CLI's powerful capabilities in handling complex bioinformatics analyses.

## Real Analysis Workflow

### Core User Inputs
Based on real session recordings, users employed the following key instruction sequence:

**1. Data Directory Exploration**:
```
!ls data_scrna
```

**2. scVI Clustering Request**:
```
could you cluster this data in data_scrna using scVI latent space?
```

**3. Data Loading**:
```
Load file as AnnData into variable adata
```

**4. Feature Confirmation**:
```
X_scVI seems in the data already
```

**5. Expert Knowledge Request**:
```
This is human lung scRNA-seq data, please list 20 potential cell types and list their top 5 marker based on your knowledge.
```

**6. Embedding-Based Clustering**:
```
Could you cluster this data base X_scVI embedding?
```

**7. Marker Gene Calculation**:
```
could you calculate these celltype's marker expression in each cluster?
```

**8. Differential Gene Analysis**:
```
Find markers per cluster (rank_genes_groups) and return top markers.
```

**9. Comprehensive Annotation**:
```
Could you combined the clusters's marker and cell type's marker to annotate each cluster.
```

**10. Visualization Validation**:
```
visualize the cell_type and predicted_celltype in umap using omicverse.
```

**11. Annotation Correction Request**:
```
please check each cluster's annotation and correct the wrong annotation
```

**12. Deep Validation Guidance**:
```
you need to check based the celltype's marker first, calculate the mean expression in each cluster. And then you can infer the celltype based on the cluster's special marker with your knowledge.
```

**13. Final Visualization**:
```
visualize all result and legend should on data.
```

This rich user input sequence demonstrates Pantheon CLI's powerful capability for **AI-enhanced cell type annotation**: an intelligent single-cell analysis workflow combining deep learning embeddings, expert knowledge, marker gene analysis, and interactive correction.