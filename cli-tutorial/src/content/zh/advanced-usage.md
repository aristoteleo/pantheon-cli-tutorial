# 高级用法

## 配置文件

创建 `.cli-config.json` 文件：

```json
{
  "defaultProject": "my-project",
  "autoSave": true,
  "theme": "dark"
}
```

## 管道和重定向

```bash
# 管道
my-cli list | grep "project"

# 重定向输出
my-cli status > output.txt
```

## 脚本编写

```bash
#!/bin/bash
my-cli init my-project
my-cli config --set autoSave=true
my-cli run my-project
```