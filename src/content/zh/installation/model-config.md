# 模型配置

Pantheon-CLI需要配置API密钥来访问大语言模型。本节将指导你完成模型配置和自定义API端点设置。

## 🤖 支持的模型

Pantheon-CLI支持丰富的大语言模型生态系统：

### OpenAI 系列
**GPT-5 系列（最新）**
- `gpt-5` - OpenAI GPT-5 (Latest) - 最强性能，适合复杂分析
- `gpt-5-mini` - OpenAI GPT-5 Mini - 轻量版本，快速响应
- `gpt-5-nano` - OpenAI GPT-5 Nano - 超轻量版本
- `gpt-5-chat-latest` - OpenAI GPT-5 Chat Latest - 对话优化版本

**GPT-4 系列**
- `gpt-4.1` - OpenAI GPT-4.1 - 增强版GPT-4
- `gpt-4o` - OpenAI GPT-4o - 多模态版本
- `gpt-4o-mini` - OpenAI GPT-4o Mini - 经济版多模态
- `gpt-4o-audio-preview` - 音频处理预览版
- `gpt-4o-realtime-preview` - 实时对话预览版

**推理系列（o-Series）**
- `o1` - OpenAI o1 (Reasoning) - 专业推理模型
- `o1-pro` - OpenAI o1 Pro (Reasoning) - 高级推理
- `o3` - OpenAI o3 (Reasoning) - 新一代推理
- `o3-pro` - OpenAI o3 Pro (Reasoning) - 旗舰推理
- `o3-deep-research` - 深度研究专用
- `o1-mini` - OpenAI o1 Mini (Reasoning) - 轻量推理

### Anthropic Claude 系列
**Claude 4 系列（最新）**
- `anthropic/claude-opus-4-1-20250805` - Claude Opus 4.1 (Latest) - 最新旗舰
- `anthropic/claude-opus-4-20250514` - Claude Opus 4 - 高性能版本
- `anthropic/claude-sonnet-4-20250514` - Claude Sonnet 4 - 平衡版本
- `anthropic/claude-3-7-sonnet-20250219` - Claude Sonnet 3.7 - 增强版
- `anthropic/claude-3-5-haiku-20241022` - Claude Haiku 3.5 - 快速版本

**Claude 3 系列（经典）**
- `anthropic/claude-3-opus-20240229` - Claude 3 Opus (Legacy)
- `anthropic/claude-3-sonnet-20240229` - Claude 3 Sonnet (Legacy)
- `anthropic/claude-3-haiku-20240307` - Claude 3 Haiku (Legacy)

### Google Gemini 系列
- `gemini/gemini-2.5-pro` - Gemini 2.5 Pro - 最新多模态
- `gemini/gemini-2.5-flash` - Gemini 2.5 Flash - 快速版本
- `gemini/gemini-2.0-pro` - Gemini 2.0 Pro - 稳定版本
- `gemini/gemini-2.0-flash` - Gemini 2.0 Flash - 经济版本
- `gemini/gemini-pro` - Gemini Pro - 基础版本

### DeepSeek 系列
- `deepseek/deepseek-chat` - DeepSeek Chat - 对话模型
- `deepseek/deepseek-reasoner` - DeepSeek Reasoner - 推理专用

### Qwen/阿里云 系列
**2025最新系列**
- `qwq-plus` - QwQ Plus (Reasoning) - 推理增强
- `qwen-max` - Qwen Max (Latest) - 最新旗舰
- `qwen-max-latest` - Qwen Max Latest - 动态最新
- `qwen-plus` - Qwen Plus (Latest) - 平衡版本
- `qwen-turbo` - Qwen Turbo (Latest) - 快速版本
- `qvq-max` - QVQ Max (Visual Reasoning) - 视觉推理

### Kimi/月之暗面 系列
**K2最新系列**
- `moonshot/kimi-k2-0711-preview` - Kimi K2 (Preview) - 最新预览
- `moonshot/kimi-k2-turbo-preview` - Kimi K2 Turbo (Preview) - 快速预览

**Kimi Latest 系列**
- `moonshot/kimi-latest` - Kimi Latest (Auto Context) - 智能上下文
- `moonshot/kimi-latest-8k` - Kimi Latest 8K - 8K上下文
- `moonshot/kimi-latest-32k` - Kimi Latest 32K - 32K上下文
- `moonshot/kimi-latest-128k` - Kimi Latest 128K - 128K上下文

**Vision 系列**
- `moonshot/moonshot-v1-8k-vision-preview` - 8K视觉模型
- `moonshot/moonshot-v1-32k-vision-preview` - 32K视觉模型
- `moonshot/moonshot-v1-128k-vision-preview` - 128K视觉模型

### 智谱AI GLM 系列 ✨
**GLM-4.5 系列（最新）**
- `zhipu/glm-4.5` - GLM-4.5 (Zhipu AI - Latest) - 最新旗舰
- `zhipu/glm-4.5-air` - GLM-4.5 Air (Zhipu AI - Latest) - 轻量版
- `zhipu/glm-4.5-flash` - GLM-4.5 Flash (Zhipu AI - Latest) - 快速版

**GLM-4 系列**
- `zhipu/glm-4` - GLM-4 (Zhipu AI) - 基础版本
- `zhipu/glm-4-plus` - GLM-4 Plus (Zhipu AI) - 增强版本
- `zhipu/glm-4-air` - GLM-4 Air (Zhipu AI) - 轻量版本
- `zhipu/glm-4-flash` - GLM-4 Flash (Zhipu AI - Free) - 免费版本
- `zhipu/glm-4-long` - GLM-4 Long (Zhipu AI) - 长文本版本

### Grok/xAI 系列
- `grok/grok-beta` - Grok Beta - 测试版本
- `grok/grok-2` - Grok 2 - 稳定版本

### 本地模型
- `ollama/llama3.2` - Llama 3.2 (Local) - 本地部署版本

## 🔑 获取API密钥

### OpenAI API密钥
1. 访问 [OpenAI API Keys](https://platform.openai.com/api-keys)
2. 登录你的OpenAI账户
3. 点击"Create new secret key"
4. 复制生成的API密钥（以`sk-`开头）

### Anthropic Claude API密钥
1. 访问 [Anthropic Console](https://console.anthropic.com/)
2. 登录并创建新的API密钥
3. 复制生成的密钥（以`sk-ant-`开头）

### Google Gemini API密钥
1. 访问 [Google AI Studio](https://aistudio.google.com/app/apikey)
2. 创建新的API密钥
3. 复制生成的密钥

### DeepSeek API密钥
1. 访问 [DeepSeek Platform](https://platform.deepseek.com/)
2. 注册并获取API密钥
3. 复制生成的密钥

### 阿里云通义千问API密钥
1. 访问 [阿里云百炼平台](https://bailian.console.aliyun.com/)
2. 开通服务并创建API密钥
3. 复制生成的密钥

### 月之暗面Kimi API密钥
1. 访问 [月之暗面开放平台](https://platform.moonshot.cn/)
2. 注册并获取API密钥
3. 复制生成的密钥

### 智谱AI GLM API密钥 ✨
1. 访问 [智谱AI开放平台](https://open.bigmodel.cn/)
2. 注册并实名认证
3. 创建API密钥
4. 复制生成的密钥

### xAI Grok API密钥
1. 访问 [xAI Console](https://console.x.ai/)
2. 获取API访问权限
3. 创建并复制API密钥

## ⚙️ 配置方法

### 方法一：环境变量配置

在你的shell配置文件中添加：

```bash
# ~/.bashrc 或 ~/.zshrc

# OpenAI 系列模型
export OPENAI_API_KEY="sk-your-openai-key-here"

# Anthropic Claude 系列模型
export ANTHROPIC_API_KEY="sk-ant-your-anthropic-key-here"

# Google Gemini 系列模型
export GOOGLE_API_KEY="your-google-api-key-here"

# DeepSeek 系列模型
export DEEPSEEK_API_KEY="your-deepseek-key-here"

# 阿里云通义千问系列
export QWEN_API_KEY="your-qwen-key-here"

# 月之暗面Kimi系列
export MOONSHOT_API_KEY="your-moonshot-key-here"

# 智谱AI GLM系列 ✨
export ZAI_API_KEY="your-zhipu-key-here"

# xAI Grok系列
export GROK_API_KEY="your-grok-key-here"

# 默认模型配置
export PANTHEON_DEFAULT_MODEL="gpt-5"
```

### 方法二：CLI内配置（推荐）

启动`pantheon-cli`后，使用`/api-key`命令配置各提供商的API密钥：

```shell
# OpenAI系列
/api-key openai sk-your-openai-key-here

# Anthropic Claude系列
/api-key anthropic sk-ant-your-anthropic-key-here

# Google Gemini系列
/api-key google your-google-api-key-here

# DeepSeek系列
/api-key deepseek your-deepseek-key-here

# 阿里云通义千问系列（支持多个别名）
/api-key qwen your-qwen-key-here
/api-key alibaba your-qwen-key-here

# 月之暗面Kimi系列（支持多个别名）
/api-key kimi your-moonshot-key-here
/api-key moonshot your-moonshot-key-here

# 智谱AI GLM系列 ✨（支持多个别名）
/api-key zai your-zhipu-key-here
/api-key zhipuai your-zhipu-key-here
/api-key glm your-zhipu-key-here

# xAI Grok系列
/api-key grok your-grok-key-here
```

使用`/model`命令选择和切换模型：

```shell
# 查看所有可用模型
/model list

# 查看当前模型状态
/model current

# OpenAI系列
/model gpt-5                    # 最新GPT-5
/model gpt-5-mini               # GPT-5 Mini
/model o3                       # 推理模型
/model gpt-4o                   # 多模态模型

# Claude系列
/model anthropic/claude-opus-4-1-20250805    # 最新Claude
/model anthropic/claude-sonnet-4-20250514    # Claude Sonnet 4
/model anthropic/claude-3-5-haiku-20241022   # Claude Haiku 3.5

# 智谱AI GLM系列 ✨
/model zhipu/glm-4.5            # 最新GLM-4.5
/model zhipu/glm-4.5-air        # GLM-4.5 轻量版
/model zhipu/glm-4-flash        # GLM-4 Flash（免费）

# 其他模型
/model deepseek/deepseek-chat   # DeepSeek对话
/model qwen-max                 # 通义千问Max
/model moonshot/kimi-k2-0711-preview  # Kimi K2
/model gemini/gemini-2.5-pro    # Gemini 2.5 Pro
```

## 🌐 自定义API端点

Pantheon-CLI支持自定义API端点，方便使用代理服务或私有部署：

### 配置自定义端点

```shell
# 配置OpenAI端点（支持第三方代理）
/endpoint openai https://api.your-proxy.com/v1

# 配置Anthropic端点
/endpoint anthropic https://api.your-anthropic-proxy.com/

# 配置智谱AI端点（通常使用默认）
/endpoint zhipu https://open.bigmodel.cn/api/paas/v4/

# 配置通义千问端点
/endpoint qwen https://dashscope.aliyuncs.com/api/v1/

# 配置月之暗面端点
/endpoint moonshot https://api.moonshot.cn/v1/
```

### 查看当前端点配置

```shell
# 查看所有端点配置
/endpoint list

# 查看特定提供商端点
/endpoint openai
```

### 重置为默认端点

```shell
# 重置OpenAI端点为默认
/endpoint openai reset

# 重置所有端点为默认
/endpoint reset-all
```

## ✅ 验证配置

配置完成后，可以通过以下方式验证：

```shell
# 检查API密钥状态
/api-key list

# 检查当前模型状态
/model current

# 发送测试消息
你好！请介绍一下自己。
```

## 🛠️ 故障排除

### 常见错误及解决方案

**API密钥无效**
```
Error: Invalid API key provided
```
**解决方案：**
- 检查API密钥是否正确复制，确保没有多余空格
- 确认密钥格式正确（如OpenAI以`sk-`开头）
- 验证账户是否有足够余额

**配额超限**
```
Error: Rate limit exceeded
```
**解决方案：**
- 等待配额重置（通常按分钟或小时重置）
- 升级API计划获得更高配额
- 切换到其他模型减少调用频率

**网络连接问题**
```
Error: Connection timeout
```
**解决方案：**
- 检查网络连接状态
- 配置HTTP/HTTPS代理（如需要）
- 尝试自定义API端点
- 检查防火墙设置

**模型不支持**
```
Error: Model not supported
```
**解决方案：**
- 使用`/model list`查看支持的模型
- 检查模型ID拼写是否正确
- 确认API密钥对应的服务商支持该模型

**智谱AI GLM模型问题 ✨**
```
Error: ZAI_API_KEY not set
```
**解决方案：**
- 使用`/api-key zai`命令设置智谱AI密钥
- 确保密钥来源于智谱AI开放平台
- 检查账户是否通过实名认证

### 配置文件管理

**配置文件位置：**
- 配置文件：`~/.pantheon/config.json`
- 所有API密钥均经过加密存储，确保安全

**重置配置：**
```shell
# 删除配置文件重新开始
rm ~/.pantheon/config.json

# 或者使用CLI命令重置特定配置
/api-key reset openai
/endpoint reset openai
```

**备份配置：**
```shell
# 备份配置文件
cp ~/.pantheon/config.json ~/.pantheon/config.json.backup

# 恢复配置文件
cp ~/.pantheon/config.json.backup ~/.pantheon/config.json
```

## 💡 最佳实践

1. **安全性**：
   - 不要在代码中硬编码API密钥
   - 定期轮换API密钥
   - 使用环境变量或CLI配置

2. **成本优化**：
   - 根据任务需求选择合适的模型
   - 优先使用免费模型（如GLM-4-Flash）进行测试
   - 监控API使用量和成本

3. **性能优化**：
   - 复杂任务使用旗舰模型（GPT-5、Claude Opus 4.1）
   - 简单任务使用轻量模型（GPT-5-Mini、GLM-4.5-Air）
   - 推理任务使用专门的推理模型（o3、QwQ Plus）

4. **多模型策略**：
   - 配置多个提供商的API密钥
   - 根据任务类型选择最适合的模型
   - 准备备用模型防止服务中断

配置完成后，前往[验证安装](/installation/verify)确认一切正常！