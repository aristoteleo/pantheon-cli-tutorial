# 模型配置

Pantheon-CLI需要配置API密钥来访问大语言模型。本节将指导你完成模型配置。

## 支持的模型

Pantheon-CLI支持多种大语言模型：

### OpenAI系列
- **GPT-5** - 最强性能，适合复杂分析
- **GPT-5-mini** - 性价比高，适合日常使用

### 其他模型
- **Claude-4** - Anthropic的最新模型
- **Gemini Pro** - Google的多模态模型
- **本地模型** - 支持Ollama等本地部署

## 获取API密钥

### OpenAI API密钥

1. 访问 [OpenAI API Keys](https://platform.openai.com/api-keys)
2. 登录你的OpenAI账户
3. 点击"Create new secret key"
4. 复制生成的API密钥（以`sk-`开头）

### Claude API密钥

1. 访问 [Anthropic Console](https://console.anthropic.com/)
2. 登录并创建新的API密钥
3. 复制生成的密钥

## 配置方法


### 方法一：环境变量配置

在你的shell配置文件中添加：

```bash
# ~/.bashrc 或 ~/.zshrc
export OPENAI_API_KEY="your_openai_api_key_here"
export CLAUDE_API_KEY="your_claude_api_key_here"
export PANTHEON_DEFAULT_MODEL="gpt-4"
```

### 方法二：CLI内配置

我们先运行`Pantheon-CLI`，然后在终端里输入`/api-key`，任意配置一个模型的api-key
```shell
/api-key openai sk-... - Set OpenAI key
/api-key anthropic sk-... - Set Anthropic key
/api-key google ai... - Set Google key
/api-key deepseek sk-... - Set DeepSeek key
/api-key qwen sk-... - Set Qwen key
/api-key kimi sk-... - Set Kimi key
/api-key grok sk-... - Set Grok key
```

然后我们再在终端里输入`/model`，选择你想使用的模型
```shell
/model gpt-5
/model gpt-5-mini
/model anthropic/claude-opus-4-1-20250805
/model anthropic/claude-opus-4-20250514
/model deepseek/deepseek-chat
/model moonshot/kimi-k2-0711-preview
```

## 验证配置


## 故障排除

### 常见错误

**API密钥无效**
```bash
Error: Invalid API key provided
```
解决：检查API密钥是否正确复制，确保没有多余空格

**配额超限**
```bash
Error: Rate limit exceeded
```
解决：等待配额重置或升级API计划

**网络连接问题**
```bash
Error: Connection timeout
```
解决：检查网络连接，确认代理设置

### 重置配置

配置文件存放在当前运行目录下的`.pantheon_config.json`,所有的api-key均加密在本地，非明文保存。


配置完成后，前往[验证安装](/installation/verify)确认一切正常！