# Getting Started

Experience the Mixed programming magic of Pantheon-CLI in just 5 minutes!

## Installation Preparation

### Simple Installation
```bash
pip install pantheon-cli
```

### Verify Installation
```bash
pantheon-cli --version
```

You should see version information, such as: `Pantheon-CLI version 1.0.0`

## First Launch

### Start Pantheon-CLI
```bash
pantheon-cli
```

The system will prompt you to configure an API key or select a local model. For quick experience, you can configure an OpenAI or Anthropic API key.

## Experience Mixed Programming

### Perfect Integration of Natural Language and Python
```bash
# After startup, you can directly describe your needs in natural language
> Generate 10 random numbers and calculate their mean and standard deviation

# The system will automatically generate and execute Python code
# You can also write Python directly
> import numpy as np
> data = np.random.randn(1000)
> Now visualize this data

# You can even use R language in combination
> Use R language to perform a normality test on this data
```

### Single-Cell Data Analysis Example
```bash
> Load single-cell RNA-seq data, the file is data.h5ad

# System automatically uses scanpy to load data
> Perform basic quality control, filter low-quality cells and genes

> Now use Seurat for cell clustering analysis

# Seamlessly switch to R language environment for Seurat analysis
```

## Core Feature Experience

### Intelligent Agent Assistant
Pantheon-CLI has a built-in PhD-level scientific analysis agent:
- **Understands scientific context**: Knows what type of analysis you're doing
- **Recommends best methods**: Automatically selects appropriate algorithms and parameters  
- **Explains analysis results**: Provides professional biological interpretations

### Tool Ecosystem Integration
- **Python ecosystem**: Scanpy, Pandas, Matplotlib, Scikit-learn, etc.
- **R language support**: Seurat, DESeq2, Monocle, etc.
- **Julia integration**: High-performance numerical computing
- **Bioinformatics tools**: STAR, kallisto, Cell Ranger, etc.

### Data Privacy Protection
- **Local execution**: All computation performed on your machine
- **Local model support**: Can be used completely offline
- **Zero data uploads**: Research data never leaves your control

## Command Reference

### Basic Launch Options
```bash
# Standard launch
pantheon-cli

# Specify model
pantheon-cli --model gpt-4

# Disable RAG knowledge base
pantheon-cli --disable_rag

# Specify working directory
pantheon-cli --workspace /path/to/project
```

### Commands Within CLI
```bash
# Configure API key
/api-key openai sk-your-key-here

# Set model
/model gpt-4

# View help
/help
```

## Real Application Scenarios

### Biomedical Research
```bash
> I have a 10x single-cell dataset and want to analyze T cell differentiation trajectories

> Load spatial transcriptomics data and identify gene expression patterns in tissue structures

> Integrate multi-omics data to find disease-related biomarkers
```

### Data Science Analysis
```bash
> Perform time series analysis and forecasting on this sales data

> Build a machine learning model to predict customer churn

> Use deep learning to analyze these medical images
```

### Teaching and Learning
```bash
> Explain the principles of principal component analysis and demonstrate with code

> Compare the performance of different clustering algorithms on this dataset

> Show how to perform statistical analysis for A/B testing
```

## Advanced Feature Preview

### RAG Knowledge Base
- Built-in professional knowledge in single-cell genomics
- Automatic access to the latest methods and best practices
- Support for custom domain knowledge bases

### Extensible Architecture
- Add new functionality through the toolsets system
- Community-contributed analysis modules
- Support for external tool integration

### Multilingual Environment
- Chinese and English interface support
- Multilingual scientific terminology understanding
- Localized analysis recommendations

## Next Learning Path

After completing the quick start, we recommend learning in the following order:

1. **[Installation Configuration](/installation)** - Detailed installation and environment configuration
2. **[Model Configuration](/installation/model-config)** - API keys and model selection
3. **[Knowledge Base Configuration](/installation/knowledge-base)** - Optional RAG functionality setup
4. **[Basic Commands](/basic-commands)** - Master core functionality
5. **[Advanced Usage](/advanced-usage)** - Explore more possibilities

Begin your AI-driven scientific analysis journey!