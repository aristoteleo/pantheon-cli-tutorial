# Linux安装指南

在Linux系统上安装Pantheon-CLI的详细步骤。

## Ubuntu/Debian系统

### 方法一：使用APT包管理器

```bash
# 添加Pantheon-CLI仓库
wget -qO - https://pantheon-cli.io/apt/pubkey.gpg | sudo apt-key add -
echo "deb https://pantheon-cli.io/apt stable main" | sudo tee /etc/apt/sources.list.d/pantheon.list

# 更新包列表
sudo apt update

# 安装Pantheon-CLI
sudo apt install pantheon-cli
```

### 方法二：使用DEB包

```bash
# 下载最新版本
wget https://pantheon-cli.io/releases/latest/pantheon-cli.deb

# 安装
sudo dpkg -i pantheon-cli.deb

# 修复依赖（如需要）
sudo apt-get install -f
```

## CentOS/RHEL/Fedora系统

### 方法一：使用YUM/DNF

```bash
# 添加仓库
sudo tee /etc/yum.repos.d/pantheon.repo << EOF
[pantheon]
name=Pantheon CLI
baseurl=https://pantheon-cli.io/rpm/
enabled=1
gpgcheck=1
gpgkey=https://pantheon-cli.io/rpm/pubkey.gpg
EOF

# 安装（CentOS/RHEL）
sudo yum install pantheon-cli

# 或使用DNF（Fedora）
sudo dnf install pantheon-cli
```

### 方法二：使用RPM包

```bash
# 下载最新版本
wget https://pantheon-cli.io/releases/latest/pantheon-cli.rpm

# 安装
sudo rpm -ivh pantheon-cli.rpm
```

## Arch Linux

### 使用AUR

```bash
# 使用yay
yay -S pantheon-cli

# 或使用paru
paru -S pantheon-cli

# 手动安装
git clone https://aur.archlinux.org/pantheon-cli.git
cd pantheon-cli
makepkg -si
```

## 通用安装方法

### 使用pip

```bash
# 安装pip（如未安装）
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py

# 安装Pantheon-CLI
pip3 install pantheon-cli

# 添加到PATH
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### 使用安装脚本

```bash
# 一键安装脚本
curl -sSL https://pantheon-cli.io/install.sh | bash

# 或使用wget
wget -qO- https://pantheon-cli.io/install.sh | bash
```

### 从源码编译

```bash
# 安装构建依赖
sudo apt-get install build-essential python3-dev  # Ubuntu/Debian
sudo yum groupinstall "Development Tools"         # CentOS/RHEL

# 克隆源码
git clone https://github.com/pantheon-cli/pantheon-cli.git
cd pantheon-cli

# 编译安装
python3 setup.py build
sudo python3 setup.py install
```

## Docker安装

### 使用官方镜像

```bash
# 拉取镜像
docker pull pantheon/cli:latest

# 运行容器
docker run -it --rm \
  -v $(pwd):/workspace \
  -v $HOME/.pantheon:/root/.pantheon \
  pantheon/cli:latest

# 创建别名（可选）
alias pantheon='docker run -it --rm -v $(pwd):/workspace pantheon/cli:latest'
```

### 构建自定义镜像

```dockerfile
# Dockerfile
FROM python:3.11-slim
RUN pip install pantheon-cli
WORKDIR /workspace
ENTRYPOINT ["pantheon"]
```

```bash
# 构建镜像
docker build -t my-pantheon .
```

## 配置系统服务

### 创建systemd服务（可选）

```bash
# 创建服务文件
sudo tee /etc/systemd/system/pantheon-server.service << EOF
[Unit]
Description=Pantheon CLI Server
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=/home/$USER
ExecStart=/usr/local/bin/pantheon server
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

# 启动服务
sudo systemctl enable pantheon-server
sudo systemctl start pantheon-server
```

## 环境变量配置

添加到 `~/.bashrc` 或 `~/.zshrc`：

```bash
# Pantheon CLI环境变量
export PANTHEON_HOME="$HOME/.pantheon"
export PANTHEON_DATA="$HOME/pantheon-data"
export PANTHEON_LOG_LEVEL="INFO"

# 别名设置
alias pan='pantheon'
alias pani='pantheon interactive'
alias pana='pantheon analyze'
```

## 常见问题解决

### 问题1：Python版本过低

```bash
# 安装Python 3.8+
sudo add-apt-repository ppa:deadsnakes/ppa  # Ubuntu
sudo apt update
sudo apt install python3.11 python3.11-venv
```

### 问题2：缺少依赖库

```bash
# Ubuntu/Debian
sudo apt-get install python3-pip python3-dev libssl-dev libffi-dev

# CentOS/RHEL
sudo yum install python3-pip python3-devel openssl-devel
```

### 问题3：权限问题

```bash
# 使用用户安装而非系统安装
pip3 install --user pantheon-cli

# 或使用虚拟环境
python3 -m venv ~/pantheon-env
source ~/pantheon-env/bin/activate
pip install pantheon-cli
```

### 问题4：网络连接问题

```bash
# 使用国内镜像源
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli

# 配置代理
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
```

## 升级和卸载

### 升级

```bash
# 使用包管理器
sudo apt upgrade pantheon-cli      # Ubuntu/Debian
sudo yum update pantheon-cli       # CentOS/RHEL

# 使用pip
pip3 install --upgrade pantheon-cli
```

### 卸载

```bash
# 使用包管理器
sudo apt remove pantheon-cli       # Ubuntu/Debian
sudo yum remove pantheon-cli       # CentOS/RHEL

# 使用pip
pip3 uninstall pantheon-cli

# 清理配置
rm -rf ~/.pantheon
rm -rf ~/.cache/pantheon
```

安装完成后，前往[验证安装](/installation/verify)确认一切正常！