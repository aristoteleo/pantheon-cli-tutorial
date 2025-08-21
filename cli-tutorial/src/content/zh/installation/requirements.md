# 系统要求

在安装Pantheon-CLI之前，请确保你的系统满足以下要求。

## 最低系统要求

### 硬件要求
- **处理器**：64位处理器，建议Intel i5或AMD Ryzen 5以上
- **内存**：最少8GB RAM，建议16GB以上
- **存储**：至少10GB可用空间
- **网络**：安装时需要互联网连接

### 操作系统
- **Windows**：Windows 10 (1903+) 或 Windows 11
- **macOS**：macOS 10.15 (Catalina) 或更高版本
- **Linux**：Ubuntu 20.04+, CentOS 8+, Debian 10+

## 软件依赖

### 必需依赖
1. **Python 3.8+**
   ```bash
   python --version  # 检查Python版本
   ```

2. **pip 20.0+**
   ```bash
   pip --version  # 检查pip版本
   ```

3. **Git 2.0+**（用于版本控制）
   ```bash
   git --version  # 检查Git版本
   ```

### 可选依赖

#### 数据库支持
- PostgreSQL 12+ （用于大规模数据处理）
- MySQL 8.0+ （可选数据存储）
- SQLite 3.30+ （默认内置）

#### 可视化增强
- Node.js 14+ （交互式图表）
- Chrome/Firefox （Web界面）

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