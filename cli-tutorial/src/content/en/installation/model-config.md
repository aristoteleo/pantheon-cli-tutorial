# Model Configuration

Pantheon-CLI requires API key configuration to access large language models. This section will guide you through model configuration.

## Supported Models

Pantheon-CLI supports various large language models:

### OpenAI Series
- **GPT-5** - Best performance, suitable for complex analysis
- **GPT-5-mini** - Cost-effective, suitable for daily use

### Other Models
- **Claude-4** - Anthropic's latest model
- **Gemini Pro** - Google's multimodal model
- **Local Models** - Supports local deployment like Ollama

## Getting API Keys

### OpenAI API Key

1. Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Log in to your OpenAI account
3. Click "Create new secret key"
4. Copy the generated API key (starts with `sk-`)

### Claude API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Log in and create a new API key
3. Copy the generated key

## Configuration Methods

### Method 1: Environment Variable Configuration

Add to your shell configuration file:

```bash
# ~/.bashrc or ~/.zshrc
export OPENAI_API_KEY="your_openai_api_key_here"
export CLAUDE_API_KEY="your_claude_api_key_here"
export PANTHEON_DEFAULT_MODEL="gpt-4"
```

### Method 2: CLI Configuration

First, run `Pantheon-CLI`, then type `/api-key` in the terminal to configure an API key for any model:
```shell
/api-key openai sk-... - Set OpenAI key
/api-key anthropic sk-... - Set Anthropic key
/api-key google ai... - Set Google key
/api-key deepseek sk-... - Set DeepSeek key
/api-key qwen sk-... - Set Qwen key
/api-key kimi sk-... - Set Kimi key
/api-key grok sk-... - Set Grok key
```

Then type `/model` in the terminal to select the model you want to use:
```shell
/model gpt-5
/model gpt-5-mini
/model anthropic/claude-opus-4-1-20250805
/model anthropic/claude-opus-4-20250514
/model deepseek/deepseek-chat
/model moonshot/kimi-k2-0711-preview
```

## Verify Configuration

## Troubleshooting

### Common Errors

**Invalid API Key**
```bash
Error: Invalid API key provided
```
Solution: Check if the API key is correctly copied, ensure no extra spaces

**Quota Exceeded**
```bash
Error: Rate limit exceeded
```
Solution: Wait for quota reset or upgrade API plan

**Network Connection Issues**
```bash
Error: Connection timeout
```
Solution: Check network connection, confirm proxy settings

### Reset Configuration

Configuration files are stored in `.pantheon_config.json` in the current working directory. All API keys are encrypted locally and not stored in plain text.

After configuration is complete, go to [Verify Installation](/installation/verify) to confirm everything is working properly!