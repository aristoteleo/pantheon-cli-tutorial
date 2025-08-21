# Pantheon-CLI Tutorial

An interactive web-based tutorial for learning Pantheon-CLI, the first fully open-source, infinitely extensible scientific "vibe analysis" framework built on Python.

## About This Tutorial

This tutorial provides a comprehensive, hands-on learning experience for Pantheon-CLI through an interactive web interface. Learn how to use this revolutionary AI-powered scientific analysis tool that combines mixed programming capabilities with PhD-level scientific assistance.

## What is Pantheon-CLI?

Pantheon-CLI is a groundbreaking command-line tool that redefines how scientists interact with data in the AI era:

- **Mixed Programming Environment**: Seamlessly combine Python, R, Julia, and natural language in one session
- **AI-Powered Scientific Assistant**: PhD-level intelligent analysis capabilities for complex research tasks
- **Complete Data Privacy**: All computation runs locally with no data upload requirements
- **Open Source & Extensible**: Built on Python with full transparency and unlimited customization

## Tutorial Structure

### 📚 [Introduction](./src/content/en/intro/)
- What is Pantheon-CLI and why it matters
- Core architecture and capabilities
- Getting started guide

### 🔧 [Installation](./src/content/en/installation/)
- System requirements and prerequisites
- Platform-specific installation guides (Windows, macOS, Linux)
- Model configuration and knowledge base setup
- Verification and troubleshooting

### ⚡ [Basic Commands](./src/content/en/basic/)
- System commands and navigation
- Dialog-based interactions
- Program command execution (Python, R, Julia, Shell)

### 🚀 [Advanced Usage](./src/content/en/advanced/)
- General-purpose and domain-specific tools
- Advanced tool configurations and customization
- Performance optimization techniques

### 💼 [Real-World Cases](./src/content/en/cases/)
- Social behavior analysis
- Financial and customs data processing
- Single-cell RNA sequencing analysis
- Molecular docking and computational biology
- Mixed Python/R workflows

### 🔧 [Troubleshooting](./src/content/en/trouble/)
- Common installation and runtime errors
- Debugging techniques and tools
- Frequently asked questions

## Key Features

### Mixed Programming Magic
```bash
# Python code
%import pandas as pd
%data = pd.read_csv('example.csv')

# R code in the same session
>summary(data)
>plot(data$column1, data$column2)

# Julia for high-performance computing
]using Statistics
]mean(data)

# Shell commands
!ls -la
!cat results.txt
```

### AI-Driven Analysis
- Natural language analysis requests
- Automatic method selection and optimization
- Intelligent error diagnosis and fixes
- Context-aware scientific guidance

### Data Privacy First
- Complete offline operation support
- Local large language model execution
- Zero data upload requirements
- Enterprise-grade security compliance

## Getting Started

1. **Installation**
   ```bash
   pip install pantheon-cli
   ```

2. **Verify Installation**
   ```bash
   pantheon-cli --version
   ```

3. **Start Learning**
   - Begin with the [Introduction](./src/content/en/intro/) section
   - Follow the [Installation Guide](./src/content/en/installation/) for detailed setup
   - Practice with [Basic Commands](./src/content/en/basic/)
   - Explore [Advanced Features](./src/content/en/advanced/)
   - Study [Real Cases](./src/content/en/cases/) for practical applications

## Technology Stack

- **Frontend**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS for responsive design
- **Terminal Simulation**: xterm.js for interactive command-line experience
- **Content Management**: Markdown-based documentation with YAML navigation
- **Internationalization**: Support for English and Chinese languages

## Development

### Prerequisites
- Node.js 16+ and npm
- Modern web browser

### Setup
```bash
# Clone and install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure
```
src/
├── components/     # Vue components
├── content/        # Tutorial content (en/zh)
├── terminal/       # Terminal examples (en/zh)
├── config/         # Navigation and configuration
├── stores/         # Pinia state management
└── styles/         # Global styles
```

## Contributing

This tutorial is part of the Pantheon-CLI ecosystem. Contributions are welcome for:
- Content improvements and translations
- Bug fixes and feature enhancements
- New tutorial examples and use cases
- Documentation updates

## Resources

- **Pantheon-CLI GitHub**: [https://github.com/aristoteleo/pantheon-cli](https://github.com/aristoteleo/pantheon-cli)
- **Tutorial Issues**: Report bugs and request features
- **Community**: Join discussions and get support

## License

This tutorial is open source and available under the same license as Pantheon-CLI.

---

**Ready to revolutionize your data analysis workflow? Start with the [Introduction](./src/content/en/intro/) and discover the power of AI-driven scientific computing!**