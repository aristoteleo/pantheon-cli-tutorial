# Knowledge Base Configuration (Optional)

Pantheon-CLI supports configuring RAG (Retrieval Augmented Generation) knowledge bases to enhance analysis capabilities, especially providing professional knowledge support for bioinformatics analysis such as single-cell/spatial genomics.

## What is RAG Knowledge Base

RAG knowledge base is a knowledge retrieval system based on vector databases that can help Pantheon-CLI:

### Main Functions
- **Tool documentation retrieval** - Quickly find documentation for tools like kallisto-bustools, STAR, Cell Ranger
- **Best practice guidance** - Provide analysis workflow recommendations for single-cell RNA-seq, ATAC-seq, etc.
- **Parameter optimization suggestions** - Recommend suitable analysis parameters based on data type
- **Error diagnosis** - Help diagnose common bioinformatics analysis problems

### Supported Data Source Types
- **Online package documentation** - Official documentation websites (like Seurat, Scanpy)
- **PDF documents** - Technical manuals and papers
- **Tutorials and guides** - Training materials from Galaxy project, etc.
- **Tool instructions** - Command-line tool usage guides

## Configuration Methods

### Method 1: Build Default RAG Database (Recommended)

Pantheon-CLI provides a pre-configured RAG system containing major bioinformatics tool documentation:

```bash
# Build default RAG database
python -m pantheon.toolsets.utils.rag build \
    pantheon_cli/cli/rag_system_config.yaml \
    tmp/pantheon_cli_tools_rag
```

This will create a vector database containing documentation for the following tools:

- **kallisto-bustools** - Single-cell RNA-seq preprocessing tool
- **STAR** - RNA-seq alignment tool  
- **Cell Ranger** - 10x Genomics single-cell analysis pipeline
- **Seurat** - R language single-cell genomics analysis toolkit
- **Scanpy** - Python single-cell analysis toolkit
- **Galaxy Bulk RNA-seq** - Bulk RNA-seq analysis tutorial

### Method 2: Custom RAG Configuration

Create a custom `rag_config.yaml` file:

```yaml
custom-knowledge-base:
  description: Custom knowledge base containing domain-specific documents
  type: vector_db
  parameters:
    embedding_model: text-embedding-3-large
    chunk_size: 4000
    chunk_overlap: 200
  items:
    my-protocol:
      type: package documentation
      url: https://my-lab.com/protocols/
      description: "Laboratory standard operating procedures"
    custom-tools:
      type: pdf
      url: https://example.com/manual.pdf
      description: "Custom tool usage manual"
    local-docs:
      type: local_directory
      path: /path/to/local/docs
      description: "Local documentation directory"
```

Then build the custom database:

```bash
python -m pantheon.toolsets.utils.rag build \
    custom_rag_config.yaml \
    tmp/custom_rag_db
```

## Start Pantheon-CLI with RAG Functionality

### Using Default RAG Database

```bash
# Automatically use default RAG database on startup (if exists)
pantheon-cli

# Specify RAG database path
pantheon-cli --rag_db tmp/pantheon_cli_tools_rag/pantheon-cli-tools

# Disable RAG functionality on startup
pantheon-cli --disable_rag
```

**Note**: If the default RAG database path `tmp/pantheon_cli_tools_rag/pantheon-cli-tools` 
does not exist, CLI will automatically disable RAG functionality.

### Using Custom RAG Database

```bash
# Use custom-built RAG database
pantheon-cli --rag_db tmp/custom_rag_db/custom-knowledge-base
```

## RAG System Technical Parameters

### Vectorization Configuration
- **Embedding Model**: `text-embedding-3-large` (OpenAI)
- **Document Chunk Size**: 4000 characters
- **Chunk Overlap**: 200 characters  
- **Vector Dimensions**: 3072 dimensions

### Supported Document Formats
- **package documentation**: Online documentation websites
- **pdf**: PDF files (automatic text extraction)
- **local_directory**: Local documentation directories
- **markdown**: Markdown format documents

## Using RAG Knowledge Base in CLI

After starting Pantheon-CLI, RAG functionality will be automatically integrated into conversations. You can use it like this:

### Natural Language Queries

```bash
# Start CLI
pantheon-cli

# Directly ask tool-related questions in conversation
> How to use kallisto and bustools to process single-cell RNA-seq data?

> What is the main workflow of Cell Ranger?

> What are the differences between Seurat and Scanpy, and what scenarios are they suitable for?

> What are the key parameters for STAR alignment?
```

### Intelligent Suggestions in Analysis Tasks

```bash
# RAG will automatically provide relevant suggestions during analysis
> I have 10x single-cell data and want to do quality control and dimensionality reduction analysis

> How to process ATAC-seq data for peak calling?

> Want to compare gene expression differences between different experimental conditions
```

## Advanced RAG Management

### Build Custom Database

```bash
# Build RAG database from configuration file
python -m pantheon.toolsets.utils.rag build config.yaml ./output_dir

# Specify output directory when building
python -m pantheon.toolsets.utils.rag build \
    my_rag_config.yaml \
    ./my_custom_rag_db
```

### Upload to Hugging Face (Optional)

```bash
# Set Hugging Face token
export HUGGINGFACE_TOKEN=your_hf_token

# Upload built database
python -m pantheon.toolsets.utils.rag upload ./output_dir
```

### Download Pre-built Database

```bash
# Download pre-built database from Hugging Face
python -m pantheon.toolsets.utils.rag download ./local_dir
```

## Best Practices

### RAG Configuration Optimization

1. **Appropriate chunk size**
   - Default 4000 characters suits most documents
   - Technical documentation can be increased to 6000 characters
   - API documentation can be reduced to 2000 characters

2. **Embedding model selection**
   - `text-embedding-3-large`: Best quality, suitable for production
   - `text-embedding-3-small`: Faster speed, suitable for development testing
   - `text-embedding-ada-002`: Lower cost option

3. **Document source organization**
   - Group by tool type (alignment tools, quality control tools, visualization tools)
   - Include official documentation, tutorials, and best practices
   - Regularly update outdated documentation links

### Knowledge Base Maintenance

```yaml
# Recommended RAG configuration structure
bioinformatics-tools:
  description: Comprehensive bioinformatics tools documentation library
  type: vector_db
  parameters:
    embedding_model: text-embedding-3-large
    chunk_size: 4000
    chunk_overlap: 200
  items:
    # Single-cell analysis tools
    single-cell-tools:
      type: package documentation
      url: https://scanpy.readthedocs.io/
      description: "Python single-cell analysis"
    
    # R language tools
    r-genomics:
      type: package documentation  
      url: https://satijalab.org/seurat/
      description: "R language genomics analysis"
      
    # Command-line tools
    alignment-tools:
      type: pdf
      url: https://github.com/alexdobin/STAR/raw/master/doc/STARmanual.pdf
      description: "STAR alignment tool manual"
```

## Troubleshooting

### Common Issues

**RAG database build failed**
```bash
# Check configuration file format
python -c "import yaml; yaml.safe_load(open('config.yaml'))"

# Manually test single URL
curl -I https://your-documentation-url.com

# View detailed build logs
python -m pantheon.toolsets.utils.rag build config.yaml ./output --verbose
```

**RAG functionality not loaded on startup**
```bash
# Check if database path exists
ls -la tmp/pantheon_cli_tools_rag/pantheon-cli-tools

# Manually specify database path for startup
pantheon-cli --rag_db /full/path/to/your/rag/database

# View startup logs
pantheon-cli --verbose
```

**Poor query result quality**
```bash
# Check if embedding model is properly configured
# Ensure OpenAI API key is valid
export OPENAI_API_KEY=your_api_key

# Rebuild database, adjust chunk_size parameter
# Modify in config.yaml:
parameters:
  chunk_size: 6000  # Increase chunk size
  chunk_overlap: 300  # Increase overlap
```

### Network Issue Resolution

```bash
# If building RAG in network-restricted environment
# You can first download documents locally, then use local_directory type

# For example, download Scanpy documentation
wget -r -np -k https://scanpy.readthedocs.io/

# Then use in configuration
local-scanpy:
  type: local_directory
  path: ./scanpy.readthedocs.io
  description: "Local Scanpy documentation"
```

### Performance Optimization

```bash
# For large databases, enable caching
export PANTHEON_CACHE_DIR=/tmp/pantheon_cache

# Adjust query parameters to optimize response speed
# In Python API:
results = await db.query(
    query="your query",
    top_k=3,  # Reduce number of returned results
    source="specific_source"  # Specify specific source
)
```

## Summary

RAG knowledge base provides powerful domain knowledge support for Pantheon-CLI, especially suitable for:

- **Bioinformatics research** - Quickly access tool usage guides and analysis workflows
- **Data science projects** - Automatically obtain best practices and parameter suggestions  
- **Teaching and training** - Provide real-time tool documentation support for learners
- **Team collaboration** - Unified knowledge base ensures consistency in analysis standards

After configuration is complete, you can fully utilize the intelligent retrieval functionality of the RAG knowledge base in daily analysis!

Go to [Verify Installation](/installation/verify) to confirm RAG functionality is working properly.