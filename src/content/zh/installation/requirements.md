# 系统要求

在安装Pantheon-CLI之前，请确保你的系统满足以下要求。

## 最低系统要求

### 硬件要求
- **处理器**：64位处理器，建议Intel i5或AMD Ryzen 5以上
- **内存**：最少8GB RAM，建议16GB以上（数据科学工作负载需要更多内存）
- **存储**：至少20GB可用空间（包含Python环境和数据存储）
- **网络**：安装时需要稳定的互联网连接

### 操作系统
- **Windows**：Windows 10 (1903+) 或 Windows 11
- **macOS**：macOS 10.14 或更高版本
- **Linux**：Ubuntu 18.04+, CentOS 7+, Debian 10+, Fedora 28+

## 软件依赖

### 核心依赖
1. **Python 3.10+**（重要：必须是Python 3.10或更高版本）
   ```bash
   python --version  # 检查Python版本
   python3 --version # 在某些系统上使用python3
   ```

2. **包管理器**
   - **conda**（推荐）：miniforge, Anaconda, 或 miniconda
   - **pip**：如果不使用conda环境

### 推荐的Python环境管理
Pantheon-CLI依赖本地Python环境，推荐使用以下任一环境管理工具：

#### miniforge（推荐）
```bash
# 下载并安装miniforge
# https://github.com/conda-forge/miniforge
```

#### Anaconda
```bash
# 下载并安装Anaconda
# https://www.anaconda.com/
```

#### miniconda
```bash
# 下载并安装miniconda  
# https://docs.conda.io/en/latest/miniconda.html
```


## 环境准备

### 1. 更新系统包管理器

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt upgrade
```

**CentOS/RHEL:**
```bash
sudo yum update
```

**macOS:**
```bash
brew update && brew upgrade
```

### 2. 安装Python（如未安装）

**Ubuntu/Debian:**
```bash
sudo apt install python3 python3-pip
```

**macOS:**
```bash
brew install python@3.11
```

**Windows:**
从 [python.org](https://www.python.org/downloads/) 下载安装程序

### 3. 创建虚拟环境（推荐）

```bash
# 创建虚拟环境
python -m venv pantheon-env

# 激活虚拟环境
# Linux/macOS:
source pantheon-env/bin/activate
# Windows:
pantheon-env\Scripts\activate
```

## 权限设置

确保你有以下权限：
- 用户主目录的读写权限
- 临时目录的访问权限
- 网络访问权限（用于下载依赖）

## 常见问题

### Python版本过低？
使用pyenv管理多个Python版本：
```bash
curl https://pyenv.run | bash
pyenv install 3.11.0
pyenv global 3.11.0
```

### 权限不足？
在Linux/macOS上，避免使用sudo安装，使用虚拟环境代替。

准备就绪后，继续[安装流程](/installation)！