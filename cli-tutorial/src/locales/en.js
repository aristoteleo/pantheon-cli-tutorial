export default {
  nav: {
    introduction: 'Introduction',
    introOverview: 'Overview',
    introWhatIs: 'What is CLI',
    introWhy: 'Why Use CLI',
    introGettingStarted: 'Getting Started',
    installation: 'Installation',
    installOverview: 'Installation Overview',
    installRequirements: 'System Requirements',
    installWindows: 'Windows Installation',
    installMacos: 'macOS Installation',
    installLinux: 'Linux Installation',
    installVerify: 'Verify Installation',
    basicCommands: 'Basic Commands',
    basicOverview: 'Commands Overview',
    basicNavigation: 'Directory Navigation',
    basicFileOps: 'File Operations',
    basicTextEdit: 'Text Editing',
    basicPermissions: 'Permissions Management',
    advancedUsage: 'Advanced Usage',
    advancedOverview: 'Advanced Features Overview',
    advancedScripting: 'Script Writing',
    advancedPipes: 'Pipes and Redirection',
    advancedRegex: 'Regular Expressions',
    advancedAutomation: 'Task Automation',
    troubleshooting: 'Troubleshooting',
    troubleOverview: 'Common Issues Overview',
    troubleCommonErrors: 'Common Errors',
    troubleDebugging: 'Debugging Tips',
    troubleFaq: 'FAQ'
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