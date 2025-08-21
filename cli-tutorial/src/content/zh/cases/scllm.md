# 从在线教程自动学习与调用单细胞LLM

## 案例概述

这是一个基于**真实Pantheon CLI会话记录**的案例，展示了从在线教程自动学习并调用单细胞大语言模型的完整流程。通过自然语言指令完成从教程读取、代码执行到结果存储的全过程，演示了Pantheon CLI的自主学习和执行能力。

## 真实分析流程

### 核心用户输入
基于真实会话记录，用户使用了以下关键指令序列：

**1. 在线教程读取**：
```
Please read the tutorial: https://omicverse.readthedocs.io/en/latest/Tutorials-llm/t_uce/
```

**2. 全流程执行**：
```
Please run all the steps and stored the result in data_llm
```

**3. 数据对象检查**：
```
%adata
```

**4. 结果读取**：
```
read the result using python
```

**5. 数据验证**：
```
%adata
```

**6. UMAP可视化**：
```
calculate the umap based on X_uce, and visualize it using omicverse
```

**7. 图形确认**：
```
where is your figure?
```

这个完整的用户输入序列展现了Pantheon CLI支持**自主学习和执行**的强大能力：从在线教程解析、自动化执行、结果验证到可视化输出的完整自动化学习流程。

