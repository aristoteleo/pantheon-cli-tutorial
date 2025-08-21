# 故障排除

## 常见问题

### 命令未找到

```bash
# 检查 PATH 环境变量
echo $PATH

# 重新安装
npm uninstall -g my-cli-tool
npm install -g my-cli-tool
```

### 权限问题

```bash
# macOS/Linux
sudo npm install -g my-cli-tool

# Windows (以管理员身份运行)
npm install -g my-cli-tool
```

### 调试模式

```bash
# 启用详细日志
my-cli --verbose <command>

# 查看调试信息
DEBUG=* my-cli <command>
```