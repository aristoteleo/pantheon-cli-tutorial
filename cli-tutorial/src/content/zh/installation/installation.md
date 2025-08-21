# Pantheon-CLI 完整安装指南

欢迎使用Pantheon-CLI！本指南将帮助你在任何操作系统上成功安装Pantheon-CLI。

## 什么是Pantheon-CLI？

Pantheon-CLI与Claude Code、Gemini-CLI等同类竞品不同，**Pantheon-CLI依赖于本地的Python环境**。简单来说，Pantheon-CLI与同类竞品的开发逻辑完全不一样。

这种设计让你能够：
- **完全本地化处理**：所有数据分析都在你的机器上进行
- **无缝集成Python生态**：直接使用pandas、numpy、matplotlib等库
- **混合式编程**：自然语言与代码完美结合
- **高性能计算**：充分利用本地硬件资源

## 快速安装（推荐路径）

### 第一步：安装Python环境管理器

我们强烈推荐使用**miniforge**，当然安装Anaconda或miniconda也完全可以：

#### 选择一：miniforge（推荐）
- **Windows**：下载 [Miniforge3-Windows-x86_64.exe](https://github.com/conda-forge/miniforge/releases)
- **macOS**：`curl -L -O https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh && bash Miniforge3-MacOSX-arm64.sh`
- **Linux**：`curl -L -O https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh && bash Miniforge3-Linux-x86_64.sh`

#### 选择二：Anaconda
访问 [Anaconda官网](https://www.anaconda.com/download/) 下载对应系统的安装包

#### 选择三：miniconda  
访问 [miniconda官网](https://docs.conda.io/projects/miniconda/en/latest/) 下载轻量版

### 第二步：创建专用环境

```bash
# 创建Pantheon-CLI专用环境
conda create -n pantheon python=3.11

# 激活环境
conda activate pantheon
```

### 第三步：安装Pantheon-CLI

目前，Pantheon-CLI发布于PyPI，安装非常简单：

```bash
pip install pantheon-cli
```

### 第四步：验证安装

```bash
# 检查版本
pantheon-cli --version

# 启动Pantheon-CLI
pantheon-cli
```

成功！🎉 你现在可以开始使用Pantheon-CLI了。

## 系统要求

在开始安装前，请确保你的系统满足以下要求：

### 硬件要求
- **处理器**：64位处理器
- **内存**：至少8GB RAM，建议16GB+（数据科学工作负载需要更多内存）
- **存储**：至少20GB可用空间
- **网络**：安装时需要稳定的互联网连接

### 软件要求
- **Python**：3.10或更高版本（**重要**）
- **操作系统**：
  - Windows 10 (1903+) 或 Windows 11
  - macOS 10.14+ 
  - Linux：Ubuntu 18.04+, CentOS 7+, Debian 10+, Fedora 28+

## 详细安装指南

根据你的操作系统选择详细的安装说明：

- [系统要求详情](/installation/requirements)
- [Windows安装指南](/installation/windows)  
- [macOS安装指南](/installation/macos)
- [Linux安装指南](/installation/linux)
- [验证安装](/installation/verify)

## 常见问题

### Q: 为什么需要Python 3.10+？
A: Pantheon-CLI使用了最新的Python特性来提供最佳性能和用户体验。

### Q: 可以使用系统自带的Python吗？
A: 可以，但我们强烈推荐使用conda环境管理器来避免版本冲突。

### Q: 安装后命令未找到？
A: 确保：
1. Python环境已正确激活
2. PATH环境变量包含Python的bin目录
3. 重启终端后重试

### Q: 权限错误？
A: 避免使用sudo，使用虚拟环境或用户级安装：
```bash
pip install --user pantheon-cli
```

## 下一步

安装完成后，你可以：

1. 🚀 [快速开始](/intro/getting-started) - 10分钟上手指南
2. 📚 [基础命令](/basic-commands) - 学习核心功能  
3. 💡 [什么是Pantheon-CLI](/intro/what-is-cli) - 深入了解工具特色

开始你的数据科学之旅吧！