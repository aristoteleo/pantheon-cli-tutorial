# RNA-seq Upstream Processing: From Raw Reads to Expression Matrix

## Case Overview

This is an RNA-seq data processing case based on **real Pantheon CLI session recordings**, demonstrating the complete upstream analysis workflow from raw FASTQ files to gene expression matrix. Through natural language instructions, key steps including read quality control, sequence alignment, and gene counting are completed, showcasing Pantheon CLI's powerful capabilities in transcriptomic data processing.

## Real Analysis Workflow

### Core User Inputs
Based on a typical RNA-seq analysis session, users employed the following key instruction sequence:

**1. Raw Data Quality Check**:
```
check quality of RNA-seq fastq files
```

**2. Adapter Trimming**:
```
trim adapters and low-quality bases from reads
```

**3. Quality Control**:
```
run FastQC analysis on trimmed reads
```

**4. Reference Genome Alignment**:
```
align reads to reference genome using STAR aligner
```

**5. Gene Quantification**:
```
quantify gene expression using featureCounts
```

**6. Count Matrix Construction**:
```
create gene expression count matrix for all samples
```

**7. Quality Control Statistics**:
```
generate alignment and quantification statistics
```

**8. Results Validation**:
```
validate count matrix and check for potential issues
```

This complete user input sequence demonstrates Pantheon CLI's capability for **standardized RNA-seq upstream workflows**: a complete transcriptomic data preprocessing pipeline from raw data quality control to gene expression quantification.