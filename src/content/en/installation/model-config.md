# Model Configuration

Pantheon-CLI requires API key configuration to access large language models. This section will guide you through model configuration and custom API endpoint setup.

## 🤖 Supported Models

Pantheon-CLI supports a rich ecosystem of large language models:

### OpenAI Series
**GPT-5 Series (Latest)**
- `gpt-5` - OpenAI GPT-5 (Latest) - Best performance for complex analysis
- `gpt-5-mini` - OpenAI GPT-5 Mini - Lightweight version with fast response
- `gpt-5-nano` - OpenAI GPT-5 Nano - Ultra-lightweight version
- `gpt-5-chat-latest` - OpenAI GPT-5 Chat Latest - Conversation-optimized version

**GPT-4 Series**
- `gpt-4.1` - OpenAI GPT-4.1 - Enhanced GPT-4
- `gpt-4o` - OpenAI GPT-4o - Multimodal version
- `gpt-4o-mini` - OpenAI GPT-4o Mini - Economical multimodal
- `gpt-4o-audio-preview` - Audio processing preview
- `gpt-4o-realtime-preview` - Real-time conversation preview

**Reasoning Series (o-Series)**
- `o1` - OpenAI o1 (Reasoning) - Professional reasoning model
- `o1-pro` - OpenAI o1 Pro (Reasoning) - Advanced reasoning
- `o3` - OpenAI o3 (Reasoning) - Next-generation reasoning
- `o3-pro` - OpenAI o3 Pro (Reasoning) - Flagship reasoning
- `o3-deep-research` - Deep research specialized
- `o1-mini` - OpenAI o1 Mini (Reasoning) - Lightweight reasoning

### Anthropic Claude Series
**Claude 4 Series (Latest)**
- `anthropic/claude-opus-4-1-20250805` - Claude Opus 4.1 (Latest) - Latest flagship
- `anthropic/claude-opus-4-20250514` - Claude Opus 4 - High-performance version
- `anthropic/claude-sonnet-4-20250514` - Claude Sonnet 4 - Balanced version
- `anthropic/claude-3-7-sonnet-20250219` - Claude Sonnet 3.7 - Enhanced version
- `anthropic/claude-3-5-haiku-20241022` - Claude Haiku 3.5 - Fast version

**Claude 3 Series (Classic)**
- `anthropic/claude-3-opus-20240229` - Claude 3 Opus (Legacy)
- `anthropic/claude-3-sonnet-20240229` - Claude 3 Sonnet (Legacy)
- `anthropic/claude-3-haiku-20240307` - Claude 3 Haiku (Legacy)

### Google Gemini Series
- `gemini/gemini-2.5-pro` - Gemini 2.5 Pro - Latest multimodal
- `gemini/gemini-2.5-flash` - Gemini 2.5 Flash - Fast version
- `gemini/gemini-2.0-pro` - Gemini 2.0 Pro - Stable version
- `gemini/gemini-2.0-flash` - Gemini 2.0 Flash - Economical version
- `gemini/gemini-pro` - Gemini Pro - Basic version

### DeepSeek Series
- `deepseek/deepseek-chat` - DeepSeek Chat - Conversation model
- `deepseek/deepseek-reasoner` - DeepSeek Reasoner - Reasoning specialized

### Qwen/Alibaba Series
**2025 Latest Series**
- `qwq-plus` - QwQ Plus (Reasoning) - Enhanced reasoning
- `qwen-max` - Qwen Max (Latest) - Latest flagship
- `qwen-max-latest` - Qwen Max Latest - Dynamic latest
- `qwen-plus` - Qwen Plus (Latest) - Balanced version
- `qwen-turbo` - Qwen Turbo (Latest) - Fast version
- `qvq-max` - QVQ Max (Visual Reasoning) - Visual reasoning

### Kimi/Moonshot Series
**K2 Latest Series**
- `moonshot/kimi-k2-0711-preview` - Kimi K2 (Preview) - Latest preview
- `moonshot/kimi-k2-turbo-preview` - Kimi K2 Turbo (Preview) - Fast preview

**Kimi Latest Series**
- `moonshot/kimi-latest` - Kimi Latest (Auto Context) - Smart context
- `moonshot/kimi-latest-8k` - Kimi Latest 8K - 8K context
- `moonshot/kimi-latest-32k` - Kimi Latest 32K - 32K context
- `moonshot/kimi-latest-128k` - Kimi Latest 128K - 128K context

**Vision Series**
- `moonshot/moonshot-v1-8k-vision-preview` - 8K vision model
- `moonshot/moonshot-v1-32k-vision-preview` - 32K vision model
- `moonshot/moonshot-v1-128k-vision-preview` - 128K vision model

### Zhipu AI GLM Series ✨
**GLM-4.5 Series (Latest)**
- `zhipu/glm-4.5` - GLM-4.5 (Zhipu AI - Latest) - Latest flagship
- `zhipu/glm-4.5-air` - GLM-4.5 Air (Zhipu AI - Latest) - Lightweight version
- `zhipu/glm-4.5-flash` - GLM-4.5 Flash (Zhipu AI - Latest) - Fast version

**GLM-4 Series**
- `zhipu/glm-4` - GLM-4 (Zhipu AI) - Basic version
- `zhipu/glm-4-plus` - GLM-4 Plus (Zhipu AI) - Enhanced version
- `zhipu/glm-4-air` - GLM-4 Air (Zhipu AI) - Lightweight version
- `zhipu/glm-4-flash` - GLM-4 Flash (Zhipu AI - Free) - Free version
- `zhipu/glm-4-long` - GLM-4 Long (Zhipu AI) - Long context version

### Grok/xAI Series
- `grok/grok-beta` - Grok Beta - Beta version
- `grok/grok-2` - Grok 2 - Stable version

### Local Models
- `ollama/llama3.2` - Llama 3.2 (Local) - Local deployment version

## 🔑 Getting API Keys

### OpenAI API Key
1. Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Log in to your OpenAI account
3. Click "Create new secret key"
4. Copy the generated API key (starts with `sk-`)

### Anthropic Claude API Key
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Log in and create a new API key
3. Copy the generated key (starts with `sk-ant-`)

### Google Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy the generated key

### DeepSeek API Key
1. Visit [DeepSeek Platform](https://platform.deepseek.com/)
2. Register and get API key
3. Copy the generated key

### Alibaba Qwen API Key
1. Visit [Alibaba Cloud Bailian Platform](https://bailian.console.aliyun.com/)
2. Activate service and create API key
3. Copy the generated key

### Moonshot Kimi API Key
1. Visit [Moonshot Open Platform](https://platform.moonshot.cn/)
2. Register and get API key
3. Copy the generated key

### Zhipu AI GLM API Key ✨
1. Visit [Zhipu AI Open Platform](https://open.bigmodel.cn/)
2. Register and complete real-name verification
3. Create API key
4. Copy the generated key

### xAI Grok API Key
1. Visit [xAI Console](https://console.x.ai/)
2. Get API access permission
3. Create and copy API key

## ⚙️ Configuration Methods

### Method 1: Environment Variable Configuration

Add to your shell configuration file:

```bash
# ~/.bashrc or ~/.zshrc

# OpenAI series models
export OPENAI_API_KEY="sk-your-openai-key-here"

# Anthropic Claude series models
export ANTHROPIC_API_KEY="sk-ant-your-anthropic-key-here"

# Google Gemini series models
export GOOGLE_API_KEY="your-google-api-key-here"

# DeepSeek series models
export DEEPSEEK_API_KEY="your-deepseek-key-here"

# Alibaba Qwen series
export QWEN_API_KEY="your-qwen-key-here"

# Moonshot Kimi series
export MOONSHOT_API_KEY="your-moonshot-key-here"

# Zhipu AI GLM series ✨
export ZAI_API_KEY="your-zhipu-key-here"

# xAI Grok series
export GROK_API_KEY="your-grok-key-here"

# Default model configuration
export PANTHEON_DEFAULT_MODEL="gpt-5"
```

### Method 2: CLI Configuration (Recommended)

After starting `pantheon-cli`, use the `/api-key` command to configure API keys for various providers:

```shell
# OpenAI series
/api-key openai sk-your-openai-key-here

# Anthropic Claude series
/api-key anthropic sk-ant-your-anthropic-key-here

# Google Gemini series
/api-key google your-google-api-key-here

# DeepSeek series
/api-key deepseek your-deepseek-key-here

# Alibaba Qwen series (supports multiple aliases)
/api-key qwen your-qwen-key-here
/api-key alibaba your-qwen-key-here

# Moonshot Kimi series (supports multiple aliases)
/api-key kimi your-moonshot-key-here
/api-key moonshot your-moonshot-key-here

# Zhipu AI GLM series ✨ (supports multiple aliases)
/api-key zai your-zhipu-key-here
/api-key zhipuai your-zhipu-key-here
/api-key glm your-zhipu-key-here

# xAI Grok series
/api-key grok your-grok-key-here
```

Use the `/model` command to select and switch models:

```shell
# View all available models
/model list

# View current model status
/model current

# OpenAI series
/model gpt-5                    # Latest GPT-5
/model gpt-5-mini               # GPT-5 Mini
/model o3                       # Reasoning model
/model gpt-4o                   # Multimodal model

# Claude series
/model anthropic/claude-opus-4-1-20250805    # Latest Claude
/model anthropic/claude-sonnet-4-20250514    # Claude Sonnet 4
/model anthropic/claude-3-5-haiku-20241022   # Claude Haiku 3.5

# Zhipu AI GLM series ✨
/model zhipu/glm-4.5            # Latest GLM-4.5
/model zhipu/glm-4.5-air        # GLM-4.5 lightweight
/model zhipu/glm-4-flash        # GLM-4 Flash (free)

# Other models
/model deepseek/deepseek-chat   # DeepSeek conversation
/model qwen-max                 # Qwen Max
/model moonshot/kimi-k2-0711-preview  # Kimi K2
/model gemini/gemini-2.5-pro    # Gemini 2.5 Pro
```

## 🌐 Custom API Endpoints

Pantheon-CLI supports custom API endpoints, convenient for using proxy services or private deployments:

### Configure Custom Endpoints

```shell
# Configure OpenAI endpoint (supports third-party proxies)
/endpoint openai https://api.your-proxy.com/v1

# Configure Anthropic endpoint
/endpoint anthropic https://api.your-anthropic-proxy.com/

# Configure Zhipu AI endpoint (usually use default)
/endpoint zhipu https://open.bigmodel.cn/api/paas/v4/

# Configure Qwen endpoint
/endpoint qwen https://dashscope.aliyuncs.com/api/v1/

# Configure Moonshot endpoint
/endpoint moonshot https://api.moonshot.cn/v1/
```

### View Current Endpoint Configuration

```shell
# View all endpoint configurations
/endpoint list

# View specific provider endpoint
/endpoint openai
```

### Reset to Default Endpoints

```shell
# Reset OpenAI endpoint to default
/endpoint openai reset

# Reset all endpoints to default
/endpoint reset-all
```

## ✅ Verify Configuration

After configuration is complete, you can verify through the following methods:

```shell
# Check API key status
/api-key list

# Check current model status
/model current

# Send test message
Hello! Please introduce yourself.
```

## 🛠️ Troubleshooting

### Common Errors and Solutions

**Invalid API Key**
```
Error: Invalid API key provided
```
**Solutions:**
- Check if the API key is correctly copied, ensure no extra spaces
- Confirm the key format is correct (e.g., OpenAI starts with `sk-`)
- Verify the account has sufficient balance

**Quota Exceeded**
```
Error: Rate limit exceeded
```
**Solutions:**
- Wait for quota reset (usually resets per minute or hour)
- Upgrade API plan for higher quota
- Switch to other models to reduce call frequency

**Network Connection Issues**
```
Error: Connection timeout
```
**Solutions:**
- Check network connection status
- Configure HTTP/HTTPS proxy (if needed)
- Try custom API endpoints
- Check firewall settings

**Model Not Supported**
```
Error: Model not supported
```
**Solutions:**
- Use `/model list` to view supported models
- Check if model ID spelling is correct
- Confirm the API key's service provider supports the model

**Zhipu AI GLM Model Issues ✨**
```
Error: ZAI_API_KEY not set
```
**Solutions:**
- Use `/api-key zai` command to set Zhipu AI key
- Ensure the key is from Zhipu AI Open Platform
- Check if account has completed real-name verification

### Configuration File Management

**Configuration File Location:**
- Configuration file: `~/.pantheon/config.json`
- All API keys are encrypted for security

**Reset Configuration:**
```shell
# Delete configuration file to start over
rm ~/.pantheon/config.json

# Or use CLI commands to reset specific configurations
/api-key reset openai
/endpoint reset openai
```

**Backup Configuration:**
```shell
# Backup configuration file
cp ~/.pantheon/config.json ~/.pantheon/config.json.backup

# Restore configuration file
cp ~/.pantheon/config.json.backup ~/.pantheon/config.json
```

## 💡 Best Practices

1. **Security:**
   - Don't hardcode API keys in code
   - Regularly rotate API keys
   - Use environment variables or CLI configuration

2. **Cost Optimization:**
   - Choose appropriate models based on task requirements
   - Use free models (like GLM-4-Flash) for testing first
   - Monitor API usage and costs

3. **Performance Optimization:**
   - Use flagship models (GPT-5, Claude Opus 4.1) for complex tasks
   - Use lightweight models (GPT-5-Mini, GLM-4.5-Air) for simple tasks
   - Use specialized reasoning models (o3, QwQ Plus) for reasoning tasks

4. **Multi-Model Strategy:**
   - Configure API keys for multiple providers
   - Choose the most suitable model based on task type
   - Prepare backup models to prevent service interruptions

After configuration is complete, go to [Verify Installation](/installation/verify) to confirm everything is working properly!