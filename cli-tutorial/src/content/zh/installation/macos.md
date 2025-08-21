# macOS安装指南

在macOS系统上安装Pantheon-CLI的详细步骤。

## 方法一：使用Homebrew（推荐）

### 1. 安装Homebrew（如未安装）
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. 添加Pantheon-CLI仓库
```bash
brew tap pantheon-cli/tap
```

### 3. 安装Pantheon-CLI
```bash
brew install pantheon-cli
```

### 4. 验证安装
```bash
pantheon --version
```

## 方法二：使用pip安装

### 1. 确保Python已安装
```bash
python3 --version
```

### 2. 安装Pantheon-CLI
```bash
pip3 install pantheon-cli
```

### 3. 添加到PATH（如需要）
将以下内容添加到 `~/.zshrc` 或 `~/.bash_profile`：
```bash
export PATH="$HOME/.local/bin:$PATH"
```

### 4. 重新加载配置
```bash
source ~/.zshrc  # 或 source ~/.bash_profile
```

## 方法三：从源码安装

### 1. 克隆仓库
```bash
git clone https://github.com/pantheon-cli/pantheon-cli.git
cd pantheon-cli
```

### 2. 创建虚拟环境
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. 安装依赖
```bash
pip install -r requirements.txt
pip install -e .
```

## Apple Silicon (M1/M2/M3) 特别说明

### 兼容性设置
对于Apple Silicon芯片，某些依赖可能需要Rosetta 2：

```bash
# 安装Rosetta 2（如未安装）
softwareupdate --install-rosetta

# 使用x86_64架构安装（如遇到兼容性问题）
arch -x86_64 pip3 install pantheon-cli
```

### 原生ARM64版本
推荐使用原生ARM64版本以获得最佳性能：
```bash
pip3 install --no-binary :all: pantheon-cli
```

## 配置Shell集成

### Oh My Zsh用户
```bash
# 安装Pantheon-CLI插件
git clone https://github.com/pantheon-cli/oh-my-zsh-plugin.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/pantheon

# 编辑 ~/.zshrc，添加插件
plugins=(... pantheon)
```

### 自动补全设置
```bash
# Bash
echo 'eval "$(pantheon completion bash)"' >> ~/.bash_profile

# Zsh
echo 'eval "$(pantheon completion zsh)"' >> ~/.zshrc

# Fish
pantheon completion fish > ~/.config/fish/completions/pantheon.fish
```

## 配置文件位置

macOS上的配置文件位置：
- 全局配置：`/etc/pantheon/config.yaml`
- 用户配置：`~/.config/pantheon/config.yaml`
- 项目配置：`./pantheon/config.yaml`

## 常见问题解决

### 问题1：命令未找到
**解决方案**：
```bash
# 检查安装位置
which pantheon

# 手动添加到PATH
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### 问题2：权限被拒绝
**解决方案**：
```bash
# 修复权限
sudo chown -R $(whoami) /usr/local/bin
sudo chmod u+w /usr/local/bin
```

### 问题3：SSL证书错误
**解决方案**：
```bash
# 安装证书
pip3 install --upgrade certifi
```

### 问题4：依赖冲突
**解决方案**：
```bash
# 使用虚拟环境隔离
python3 -m venv pantheon-env
source pantheon-env/bin/activate
pip3 install pantheon-cli
```

## 升级Pantheon-CLI

### 使用Homebrew
```bash
brew upgrade pantheon-cli
```

### 使用pip
```bash
pip3 install --upgrade pantheon-cli
```

## 卸载Pantheon-CLI

### 通过Homebrew
```bash
brew uninstall pantheon-cli
```

### 通过pip
```bash
pip3 uninstall pantheon-cli
```

### 清理配置文件
```bash
rm -rf ~/.config/pantheon
rm -rf ~/.cache/pantheon
```

## 开发者工具集成

### VS Code
安装Pantheon-CLI扩展：
```bash
code --install-extension pantheon-cli.vscode-pantheon
```

### JetBrains IDEs
在插件市场搜索"Pantheon CLI Support"

安装完成后，前往[验证安装](/installation/verify)确认一切正常！