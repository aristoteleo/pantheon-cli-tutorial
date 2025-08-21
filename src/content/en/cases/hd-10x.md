# 10x Genomics HD Visium Cell Segmentation: Spatial Transcriptomics Analysis

## Case Overview

This is a case based on **real Pantheon CLI session recordings**, demonstrating the analysis workflow for 10x Genomics HD Visium spatial transcriptomics data. Through natural language instructions, the complete analysis from data loading, spatial visualization to cell segmentation is accomplished, showcasing Pantheon CLI's powerful capabilities in handling high-resolution spatial data.

## Real Analysis Workflow

### Core User Inputs
Based on real session recordings, users employed the following key instruction sequence:

**1. Data Path Specification**:
```
data: data_HD_sp/binned_outputs/square_002um, image: Visium_HD_Human_Colon_Cancer_tissue_image.btf
```

**2. Technical Specification Description**:
```
for omicverse's read visium, you need to set `btf` as image path.
```

**3. Analysis Pipeline Initiation**:
```
star the full pipeline.
start the full pipeline.
```

**4. Code Template Request**:
```
how do you read the visium, could show me the code and template?
```

**5. Specific Function Call Confirmation**:
```
do you run ov.space.read_visium_10x(data_path, image_path=btf_image)?
```

**6. Tool Library Constraints**:
```
forbid use any scanpy's function, only need to use read_visium_10x in omicverse.
```

**7. Documentation Reference and Help**:
```
all function about omicverse should run help(ov.funcation) before you run. And let's continue the HE cellpose.
```

**8. Tutorial Following**:
```
follow the tutorial to get the cdata: https://omicverse.readthedocs.io/en/latest/Tutorials-space/t_cellpose/
```

**9. Step-by-Step Execution Request**:
```
Re-run the visium_10x_hd_cellpose_he and add to-do step by step
```

**10. Performance Optimization**:
```
speed with GPU
```

**11. Code Block Execution**:
```
too long, You can separate the code into blocks of no more than 10 lines each and run them one by one.
```

**12. Visualization Request**:
```
could you visualize the COL1A1 expression in cdata using omicverse?
```

**13. Figure Saving Reminder**:
```
you need to save figure before you close
```

This rich user input sequence demonstrates Pantheon CLI's capability for **highly interactive and technically precise** analytical conversations: the complete technical implementation process from data loading, tool selection, tutorial following, performance optimization to results visualization.