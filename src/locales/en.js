export default {
  nav: {
    introduction: '1. Introduction',
    introOverview: '1.1. Overview',
    introWhatIs: '1.2. What is CLI',
    introWhy: '1.3. Why Use CLI',
    introGettingStarted: '1.4. Getting Started',
    installation: '2. Installation',
    installOverview: '2.1. Installation Overview',
    installRequirements: '2.2. System Requirements',
    installDetail: '2.3. Detailed Installation Guide',
    installWindows: '2.3.1. Windows Installation',
    installMacos: '2.3.2. macOS Installation',
    installLinux: '2.3.3. Linux Installation',
    installModelConfig: '2.4. Model Configuration',
    installKnowledgeBase: '2.5. Knowledge Base Setup (Optional)',
    installPantheonNotebook: '2.6. Pantheon-Notebook',
    installVerify: '2.7. Verify Installation',
    basicCommands: '3. Basic Commands',
    basicOverview: '3.1. Commands Overview',
    basicSystemCommands: '3.2. System Commands',
    basicDialogCommands: '3.3. Dialog Commands',
    basicProgramCommands: '3.4. Program Commands',
    advancedUsage: '4. Advanced Usage',
    advancedOverview: '4.1. Advanced Features Overview',
    advancedGeneralTools: '4.2. General Tool Invocation',
    advancedDomainTools: '4.3. Domain-Specific Tool Invocation',
    advancedToolDetails: '4.4. Tool Details',
    realCases: '5. Real Cases',
    caseSeuratLlmAnnotation: '5.1. Biology: Seurat & Natural Language Mixed Annotation',
    caseSocialBehavior: '5.2. Sociology: Survey Analysis',
    caseCustomsFinance: '5.3. Finance: Target Customer Analysis',
    caseScRnaComplex: '5.4. Biology: Complex Single-cell RNA-seq Annotation',
    caseScLlm: '5.5. Biology: Auto-learning Single-cell LLM from Online Tutorials',
    caseHd10x: '5.6. Biology: 10x Genomics HD Visium Cell Segmentation',
    caseAtacUpstream: '5.7. Biology: ATAC-seq Upstream Processing',
    caseRnaUpstream: '5.8. Biology: RNA-seq Upstream Processing',
    caseMolecularDocking: '5.9. Biology: Molecular Docking & Structure Analysis',
    caseMixedPythonR: '5.10. Python & R Mixed Programming',
    troubleshooting: '6. Troubleshooting',
    troubleOverview: '6.1. Common Issues Overview',
    troubleCommonErrors: '6.2. Common Errors',
    troubleDebugging: '6.3. Debugging Tips',
    troubleFaq: '6.4. FAQ',
    releaseNotes: 'Release Notes',
    github: 'GitHub',
    joinUs: 'Join Us'
  },
  theme: {
    toggle: 'Toggle Theme',
    dark: 'Dark Mode',
    light: 'Light Mode'
  },
  terminal: {
    input: 'Input Command',
    output: 'Output Result',
    placeholder: 'Enter command here...',
    clear: 'Clear'
  },
  video: {
    demo: 'True Case Demo',
    realCase: 'Based on real CLI conversation',
    comingSoon: 'Video Coming Soon',
    description: 'Watch how Pantheon-CLI handles real-world scientific analysis',
    realAnalysis: 'Real data analysis',
    naturalLanguage: 'Natural language interaction',
    stepByStep: 'Step-by-step demonstration'
  },
  content: {
    introduction: {
      title: 'CLI Tool Introduction',
      content: `# CLI Tool Introduction

Welcome to the CLI Command Line Tool Tutorial!

## What is CLI?

CLI (Command Line Interface) is a way to interact with computer programs through text commands.

## Why use CLI?

- **High efficiency**: Quick task execution
- **Automation**: Can write scripts for batch processing
- **Low resource usage**: Lighter than GUI

## Start Learning

Let's start with basic commands!`
    },
    installation: {
      title: 'Installation Guide',
      content: `# Installation Guide

## System Requirements

- Operating System: Windows 10+, macOS 10.14+, Linux
- Node.js 14.0+

## Installation Steps

### 1. Install Node.js

\`\`\`bash
# Check if installed
node --version
\`\`\`

### 2. Install CLI Tool

\`\`\`bash
npm install -g my-cli-tool
\`\`\`

### 3. Verify Installation

\`\`\`bash
my-cli --version
\`\`\``
    },
    basicCommands: {
      title: 'Basic Commands',
      content: `# Basic Commands

## Common Commands List

### help - View Help

\`\`\`bash
my-cli help
\`\`\`

### init - Initialize Project

\`\`\`bash
my-cli init <project-name>
\`\`\`

### list - List All Projects

\`\`\`bash
my-cli list
\`\`\`

### run - Run Project

\`\`\`bash
my-cli run <project-name>
\`\`\``
    },
    advancedUsage: {
      title: 'Advanced Usage',
      content: `# Advanced Usage

## Configuration File

Create \`.cli-config.json\` file:

\`\`\`json
{
  "defaultProject": "my-project",
  "autoSave": true,
  "theme": "dark"
}
\`\`\`

## Pipes and Redirection

\`\`\`bash
# Pipe
my-cli list | grep "project"

# Redirect output
my-cli status > output.txt
\`\`\`

## Script Writing

\`\`\`bash
#!/bin/bash
my-cli init my-project
my-cli config --set autoSave=true
my-cli run my-project
\`\`\``
    },
    troubleshooting: {
      title: 'Troubleshooting',
      content: `# Troubleshooting

## Common Issues

### Command Not Found

\`\`\`bash
# Check PATH environment variable
echo $PATH

# Reinstall
npm uninstall -g my-cli-tool
npm install -g my-cli-tool
\`\`\`

### Permission Issues

\`\`\`bash
# macOS/Linux
sudo npm install -g my-cli-tool

# Windows (Run as Administrator)
npm install -g my-cli-tool
\`\`\`

### Debug Mode

\`\`\`bash
# Enable verbose logging
my-cli --verbose <command>

# View debug information
DEBUG=* my-cli <command>
\`\`\``
    }
  }
}