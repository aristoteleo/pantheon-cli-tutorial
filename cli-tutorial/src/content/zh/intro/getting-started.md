# 快速开始

让我们在5分钟内开始使用Pantheon-CLI！

## 第一步：验证安装

打开终端，输入以下命令验证安装：

```bash
pantheon --version
```

你应该看到版本信息，例如：`Pantheon-CLI v1.0.0`

## 第二步：初始化项目

创建一个新的数据分析项目：

```bash
pantheon init my-first-project
cd my-first-project
```

## 第三步：你的第一个分析

### 使用自然语言
```bash
pantheon analyze "读取data.csv文件并显示前5行"
```

### 混合编程模式
```bash
pantheon
> 加载销售数据
> df.head()  # 直接使用Python代码
> 计算每月销售总额并可视化
```

## 基础命令速览

| 命令 | 说明 | 示例 |
|------|------|------|
| `pantheon init` | 初始化项目 | `pantheon init project-name` |
| `pantheon analyze` | 执行分析 | `pantheon analyze "分析描述"` |
| `pantheon data` | 数据管理 | `pantheon data load file.csv` |
| `pantheon viz` | 可视化 | `pantheon viz "创建柱状图"` |
| `pantheon help` | 获取帮助 | `pantheon help analyze` |

## 交互模式

启动交互式会话：
```bash
pantheon interactive
```

在交互模式中，你可以：
- 连续执行多个分析
- 保持数据在内存中
- 实时查看结果

## 下一步

恭喜！你已经完成了Pantheon-CLI的快速入门。接下来你可以：
1. 探索更多[基础命令](/basic-commands)
2. 学习[高级用法](/advanced-usage)
3. 查看[实际案例](https://github.com/pantheon-cli/examples)