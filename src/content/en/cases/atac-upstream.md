# ATAC-seq Upstream Processing: From Raw Data to Accessibility Matrix

## Case Overview

This is an ATAC-seq data processing case based on **real Pantheon CLI session recordings**, demonstrating the complete upstream analysis workflow from raw sequencing data to chromatin accessibility matrix. Through natural language instructions, key steps including quality control, alignment, and peak calling are completed, showcasing the powerful capabilities of Pantheon CLI in epigenomic data processing.

## Real Analysis Workflow

### Core User Inputs
Based on a typical ATAC-seq analysis session, users employed the following key instruction sequence:

**1. Raw Data Processing**:
```
process atac-seq data from fastq files
```

**2. Quality Control**:
```
run quality control and trimming for ATAC-seq reads
```

**3. Sequence Alignment**:
```
align reads to reference genome using bowtie2
```

**4. PCR Duplicate Removal**:
```
remove PCR duplicates from aligned BAM files
```

**5. Peak Calling**:
```
call peaks using MACS2 with ATAC-seq parameters
```

**6. Accessibility Matrix Construction**:
```
create accessibility matrix from peaks and cell barcodes
```

**7. Quality Control Report Generation**:
```
generate comprehensive QC reports with fragment size distribution
```

**8. Visualization Output**:
```
visualize TSS enrichment and fragment length distribution
```

This complete user input sequence demonstrates Pantheon CLI's capability for **end-to-end ATAC-seq data processing**: the complete upstream analysis workflow from raw sequencing data to chromatin accessibility matrices ready for downstream analysis.
