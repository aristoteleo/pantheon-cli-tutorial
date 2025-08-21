# 10x Genomics HD Visium细胞分割：空间转录组分析

## 案例概述

这是一个基于**真实Pantheon CLI会话记录**的案例，展示了10x Genomics HD Visium空间转录组数据的分析流程。通过自然语言指令完成从数据加载、空间可视化到细胞分割的完整分析，演示了Pantheon CLI在处理高分辨率空间数据方面的强大能力。

## 真实分析流程

### 核心用户输入
基于真实会话记录，用户使用了以下关键指令序列：

**1. 数据路径指定**：
```
data: data_HD_sp/binned_outputs/square_002um, image: Visium_HD_Human_Colon_Cancer_tissue_image.btf
```

**2. 技术规格说明**：
```
for omicverse's read visium, you need to set `btf` as image path.
```

**3. 分析流程启动**：
```
star the full pipeline.
start the full pipeline.
```

**4. 代码模板请求**：
```
how do you read the visium, could show me the code and template?
```

**5. 具体函数调用确认**：
```
do you run ov.space.read_visium_10x(data_path, image_path=btf_image)?
```

**6. 工具库限制**：
```
forbid use any scanpy's function, only need to use read_visium_10x in omicverse.
```

**7. 文档引用和帮助**：
```
all function about omicverse should run help(ov.funcation) before you run. And let's continue the HE cellpose.
```

**8. 教程跟随**：
```
follow the tutorial to get the cdata: https://omicverse.readthedocs.io/en/latest/Tutorials-space/t_cellpose/
```

**9. 分步执行要求**：
```
Re-run the visium_10x_hd_cellpose_he and add to-do step by step
```

**10. 性能优化**：
```
speed with GPU
```

**11. 代码分块执行**：
```
too long, You can separate the code into blocks of no more than 10 lines each and run them one by one.
```

**12. 可视化请求**：
```
could you visualize the COL1A1 expression in cdata using omicverse?
```

**13. 图形保存提醒**：
```
you need to save figure before you close
```

这个丰富的用户输入序列展现了Pantheon CLI支持**高度交互式和技术精确**的分析对话能力：从数据加载、工具选择、教程跟随、性能优化到结果可视化的完整技术实现过程。

