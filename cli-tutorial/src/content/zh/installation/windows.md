# Windows安装指南

在Windows系统上安装Pantheon-CLI的详细步骤。

## 方法一：使用安装程序（推荐）

### 1. 下载安装程序
访问 [Pantheon-CLI官网](https://pantheon-cli.io/download) 下载Windows安装程序。

### 2. 运行安装程序
1. 双击下载的 `pantheon-cli-setup.exe`
2. 如果出现安全警告，点击"更多信息"→"仍要运行"
3. 按照安装向导完成安装

### 3. 配置环境变量
安装程序会自动配置，但如需手动配置：
1. 右键"此电脑"→"属性"→"高级系统设置"
2. 点击"环境变量"
3. 在"系统变量"中找到Path，添加：
   ```
   C:\Program Files\Pantheon-CLI\bin
   ```

## 方法二：使用pip安装

### 1. 打开PowerShell（管理员）
按 `Win + X`，选择"Windows PowerShell（管理员）"

### 2. 安装Pantheon-CLI
```powershell
pip install pantheon-cli
```

### 3. 验证安装
```powershell
pantheon --version
```

## 方法三：使用Chocolatey

如果你已安装Chocolatey包管理器：

```powershell
choco install pantheon-cli
```

## Windows Terminal配置（可选）

为了更好的体验，建议使用Windows Terminal：

### 1. 安装Windows Terminal
从Microsoft Store安装Windows Terminal

### 2. 配置Pantheon-CLI快捷方式
在Windows Terminal设置中添加新配置文件：
```json
{
  "name": "Pantheon CLI",
  "commandline": "pantheon interactive",
  "icon": "C:\\Program Files\\Pantheon-CLI\\icon.ico",
  "startingDirectory": "%USERPROFILE%\\Documents\\pantheon-projects"
}
```

## WSL2安装（Linux子系统）

如果你使用WSL2：

### 1. 进入WSL2环境
```powershell
wsl
```

### 2. 按Linux方式安装
```bash
curl -sSL https://pantheon-cli.io/install.sh | bash
```

## 配置文件位置

Windows上的配置文件位置：
- 全局配置：`%PROGRAMDATA%\Pantheon-CLI\config.yaml`
- 用户配置：`%USERPROFILE%\.pantheon\config.yaml`
- 项目配置：`项目目录\.pantheon\config.yaml`

## 常见问题解决

### 问题1：'pantheon'不是内部或外部命令
**解决方案**：
1. 确认安装路径
2. 手动添加到PATH环境变量
3. 重启PowerShell

### 问题2：权限错误
**解决方案**：
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 问题3：pip安装失败
**解决方案**：
```powershell
# 升级pip
python -m pip install --upgrade pip

# 使用国内镜像
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pantheon-cli
```

### 问题4：防火墙阻止
**解决方案**：
在Windows Defender防火墙中添加例外：
1. 控制面板→系统和安全→Windows Defender防火墙
2. 允许应用→添加Pantheon-CLI

## 升级Pantheon-CLI

### 使用pip升级
```powershell
pip install --upgrade pantheon-cli
```

### 使用安装程序升级
下载最新版本的安装程序，覆盖安装即可。

## 卸载Pantheon-CLI

### 通过控制面板
控制面板→程序→卸载程序→找到Pantheon-CLI

### 通过pip
```powershell
pip uninstall pantheon-cli
```

安装完成后，前往[验证安装](/installation/verify)确认一切正常！