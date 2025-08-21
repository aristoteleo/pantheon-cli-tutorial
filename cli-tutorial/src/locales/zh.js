export default {
  nav: {
    introduction: '1. 介绍',
    introOverview: '1.1. 概述',
    introWhatIs: '1.2. 什么是CLI',
    introWhy: '1.3. 为什么使用CLI',
    introGettingStarted: '1.4. 快速开始',
    installation: '2. 安装',
    installOverview: '2.1. 安装概述',
    installRequirements: '2.2. 系统要求',
    installDetail: '2.3. 详细安装指南',
    installWindows: '2.3.1. Windows安装',
    installMacos: '2.3.2. macOS安装',
    installLinux: '2.3.3. Linux安装',
    installModelConfig: '2.4. 模型配置',
    installKnowledgeBase: '2.5. 知识库配置(可选)',
    installVerify: '2.6. 验证安装',
    basicCommands: '3. 基础命令',
    basicOverview: '3.1. 命令概述',
    basicSystemCommands: '3.2. 系统命令',
    basicDialogCommands: '3.3. 对话命令',
    basicProgramCommands: '3.4. 程序命令',
    advancedUsage: '4. 高级用法',
    advancedOverview: '4.1. 高级功能概述',
    advancedScripting: '4.2. 脚本编写',
    advancedPipes: '4.3. 管道和重定向',
    advancedRegex: '4.4. 正则表达式',
    advancedAutomation: '4.5. 自动化任务',
    troubleshooting: '5. 故障排除',
    troubleOverview: '5.1. 常见问题概述',
    troubleCommonErrors: '常见错误',
    troubleDebugging: '调试技巧',
    troubleFaq: '常见问答'
  },
  theme: {
    toggle: '切换主题',
    dark: '深色模式',
    light: '浅色模式'
  },
  terminal: {
    input: '输入命令',
    output: '输出结果',
    placeholder: '在此输入命令...',
    clear: '清空',
    demo: '命令演示',
    copy: '复制命令',
    reset: '重置',
    welcome: '欢迎使用 Pantheon-CLI 教程终端演示',
    hint: '点击左侧菜单查看对应的命令示例'
  },
  content: {
    introduction: {
      title: 'CLI 工具介绍',
      content: `# CLI 工具介绍

欢迎使用 CLI 命令行工具教程！

## 什么是 CLI？

CLI（Command Line Interface）是一种通过文本命令与计算机程序交互的方式。

## 为什么使用 CLI？

- **效率高**：快速执行任务
- **自动化**：可以编写脚本批量处理
- **资源占用少**：比 GUI 更轻量

## 开始学习

让我们从基础命令开始学习！`
    },
    installation: {
      title: '安装指南',
      content: `# 安装指南

## 系统要求

- 操作系统：Windows 10+, macOS 10.14+, Linux
- Node.js 14.0+

## 安装步骤

### 1. 安装 Node.js

\`\`\`bash
# 检查是否已安装
node --version
\`\`\`

### 2. 安装 CLI 工具

\`\`\`bash
npm install -g my-cli-tool
\`\`\`

### 3. 验证安装

\`\`\`bash
my-cli --version
\`\`\``
    },
    basicCommands: {
      title: '基础命令',
      content: `# 基础命令

## 常用命令列表

### help - 查看帮助

\`\`\`bash
my-cli help
\`\`\`

### init - 初始化项目

\`\`\`bash
my-cli init <project-name>
\`\`\`

### list - 列出所有项目

\`\`\`bash
my-cli list
\`\`\`

### run - 运行项目

\`\`\`bash
my-cli run <project-name>
\`\`\``
    },
    advancedUsage: {
      title: '高级用法',
      content: `# 高级用法

## 配置文件

创建 \`.cli-config.json\` 文件：

\`\`\`json
{
  "defaultProject": "my-project",
  "autoSave": true,
  "theme": "dark"
}
\`\`\`

## 管道和重定向

\`\`\`bash
# 管道
my-cli list | grep "project"

# 重定向输出
my-cli status > output.txt
\`\`\`

## 脚本编写

\`\`\`bash
#!/bin/bash
my-cli init my-project
my-cli config --set autoSave=true
my-cli run my-project
\`\`\``
    },
    troubleshooting: {
      title: '故障排除',
      content: `# 故障排除

## 常见问题

### 命令未找到

\`\`\`bash
# 检查 PATH 环境变量
echo $PATH

# 重新安装
npm uninstall -g my-cli-tool
npm install -g my-cli-tool
\`\`\`

### 权限问题

\`\`\`bash
# macOS/Linux
sudo npm install -g my-cli-tool

# Windows (以管理员身份运行)
npm install -g my-cli-tool
\`\`\`

### 调试模式

\`\`\`bash
# 启用详细日志
my-cli --verbose <command>

# 查看调试信息
DEBUG=* my-cli <command>
\`\`\``
    }
  }
}