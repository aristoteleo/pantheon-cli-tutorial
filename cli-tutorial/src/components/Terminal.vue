<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <div class="terminal-tabs">
        <div class="terminal-tab active">
          <span class="tab-icon">▶</span>
          <span>{{ t('terminal.demo') }}</span>
        </div>
      </div>
      <div class="terminal-actions">
        <button @click="copyCommands" class="action-btn" :title="t('terminal.copy')">
          <span>📋</span>
        </button>
        <button @click="resetDemo" class="action-btn" :title="t('terminal.reset')">
          <span>🔄</span>
        </button>
      </div>
    </div>
    
    <div class="terminal-body">
      <div class="terminal-content" ref="terminalContent">
        <!-- 渲染解析后的终端内容 -->
        <div v-for="(block, index) in parsedContent" :key="index" class="demo-block">
          <div class="command-line" v-if="block.type === 'command'">
            <span class="prompt">{{ block.prompt }}</span>
            <span class="command-text">{{ block.content }}</span>
          </div>
          
          <div class="output-block" v-if="block.type === 'output'">
            <pre class="output-text" :class="{ 'long-box': isLongBox(block.content) }">{{ truncateIfNeeded(block.content) }}</pre>
            <div v-if="block.content.split('\n').length > 30" class="truncate-hint">
              <span class="hint-text">内容过长已截断显示</span>
            </div>
          </div>
          
          <div class="comment-line" v-if="block.type === 'comment'">
            <span class="comment-text">{{ block.content }}</span>
          </div>
        </div>
        
        <!-- 如果没有内容或加载中 -->
        <div v-if="!parsedContent || parsedContent.length === 0" class="welcome-message">
          <div v-if="loading" class="loading">
            <span>加载中...</span>
          </div>
          <div v-else>
            <pre class="default-content">{{ defaultContent }}</pre>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '../stores/theme'
import { storeToRefs } from 'pinia'

const { t, locale } = useI18n()
const route = useRoute()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const terminalContent = ref(null)
const loading = ref(false)
const rawContent = ref('')
const parsedContent = ref([])

// 默认显示内容
const defaultContent = ref(`$ pantheon-cli
Aristotle © 2025
   ___  ___   _  __________ __________  _  __
  / _ \\/ _ | / |/ /_  __/ // / __/ __ \\/ |/ /
 / ___/ __ |/    / / / / _  / _// /_/ /    / 
/_/  /_/ |_/_/|_/ /_/ /_//_/___/\\____/_/|_/  

We're not just building another CLI tool.
We're redefining how scientists interact with data in the AI era.
Pantheon-CLI is a research project, use with caution.

MODEL
  • gpt-5-mini
HELP
  • /exit    to quit
  • /help    for commands
  • /model   for available models
  • /api-key for API keys     
CONTROL
Use ↑/↓ arrows for command history
Enter your message (press Enter twice to finish)`)

// 导入所有terminal txt文件
const terminalFiles = import.meta.glob('../terminal/**/*.txt', {
  query: '?raw',
  import: 'default'
})

// 路由到文件路径的映射（与TutorialContent.vue保持一致）
const contentMap = {
  '/': 'intro/introduction',
  '/intro/what-is-cli': 'intro/what-is-cli',
  '/intro/why-cli': 'intro/why-cli',
  '/intro/getting-started': 'intro/getting-started',
  
  '/installation': 'installation/installation',
  '/installation/requirements': 'installation/requirements',
  '/installation/detail/windows': 'installation/windows',
  '/installation/detail/macos': 'installation/macos',
  '/installation/detail/linux': 'installation/linux',
  '/installation/model-config': 'installation/model-config',
  '/installation/knowledge-base': 'installation/knowledge-base',
  '/installation/verify': 'installation/verify',
  
  '/basic-commands': 'basic/basic-commands',
  '/basic/system-commands': 'basic/system-commands',
  '/basic/dialog-commands': 'basic/dialog-commands',
  '/basic/program-commands': 'basic/program-commands',
  
  '/advanced-usage': 'advanced/advanced-usage',
  '/advanced/general-tools': 'advanced/general-tools',
  '/advanced/domain-tools': 'advanced/domain-tools',
  '/advanced/tool-details': 'advanced/tool-details',
  
  '/cases/social-behavior': 'cases/social-behavior',
  '/cases/customs-finance': 'cases/customs-finance',
  '/cases/scrna-complex': 'cases/scrna-complex',
  '/cases/scllm': 'cases/scllm',
  '/cases/hd-10x': 'cases/hd-10x',
  '/cases/atac-upstream': 'cases/atac-upstream',
  '/cases/rna-upstream': 'cases/rna-upstream',
  '/cases/mixed-python-r': 'cases/mixed-python-r',
  '/cases/molecular-docking': 'cases/molecular-docking',
  '/cases/seurat-llm-annotation': 'cases/seurat-llm-annotation',
  
  '/troubleshooting': 'trouble/troubleshooting',
  '/trouble/common-errors': 'trouble/common-errors',
  '/trouble/debugging': 'trouble/debugging',
  '/trouble/faq': 'trouble/faq'
}

// 解析txt文件内容
const parseTerminalContent = (content) => {
  if (!content) return []
  
  const blocks = []
  const lines = content.split('\n')
  let i = 0
  
  while (i < lines.length) {
    const line = lines[i].trim()
    
    // 跳过空行
    if (!line) {
      i++
      continue
    }
    
    // 注释行 (## 开头)
    if (line.startsWith('## ')) {
      blocks.push({
        type: 'comment',
        content: line.substring(3)
      })
      i++
    }
    // 命令行 ($ 开头)
    else if (line.startsWith('$ ')) {
      const command = line.substring(2).trim()
      blocks.push({
        type: 'command',
        prompt: '$',
        content: command
      })
      i++
      
      // 收集这个命令后面的输出，直到遇到下一个命令或注释
      const outputLines = []
      while (i < lines.length) {
        const nextLine = lines[i]
        
        // 如果遇到新的命令或注释，停止收集输出
        if (nextLine.trim().startsWith('$ ') || nextLine.trim().startsWith('## ')) {
          break
        }
        
        // 收集输出行
        outputLines.push(nextLine)
        i++
      }
      
      // 如果有输出内容，创建output block
      if (outputLines.length > 0) {
        const outputContent = outputLines.join('\n').trim()
        if (outputContent) {
          blocks.push({
            type: 'output',
            content: outputContent
          })
        }
      }
    }
    else {
      // 其他行作为输出处理
      i++
    }
  }
  
  return blocks
}

// 加载终端内容
const loadTerminalContent = async () => {
  const key = contentMap[route.path]
  if (!key) {
    parsedContent.value = []
    return
  }
  
  const lang = locale.value
  loading.value = true
  
  try {
    // 尝试加载对应语言的文件
    let filePath = `../terminal/${lang}/${key}.txt`
    let loader = terminalFiles[filePath]
    
    // 如果找不到，尝试中文版本
    if (!loader) {
      filePath = `../terminal/zh/${key}.txt`
      loader = terminalFiles[filePath]
    }
    
    if (loader) {
      const content = await loader()
      rawContent.value = content
      parsedContent.value = parseTerminalContent(content)
    } else {
      // 如果文件不存在，显示默认内容
      parsedContent.value = [{
        type: 'comment',
        content: '该页面的终端演示内容正在准备中...'
      }]
    }
  } catch (error) {
    console.error('Failed to load terminal content:', error)
    parsedContent.value = [{
      type: 'comment',
      content: '加载终端内容失败'
    }]
  } finally {
    loading.value = false
  }
}

// 监听路由变化
watch(() => route.path, () => {
  loadTerminalContent()
  nextTick(() => {
    if (terminalContent.value) {
      terminalContent.value.scrollTop = 0
    }
  })
}, { immediate: true })

// 监听语言变化
watch(locale, () => {
  loadTerminalContent()
})

// 复制所有命令
const copyCommands = () => {
  const commands = parsedContent.value
    .filter(block => block.type === 'command')
    .map(block => `${block.prompt} ${block.content}`)
    .join('\n')
  
  if (commands) {
    navigator.clipboard.writeText(commands)
      .then(() => {
        // 可以添加成功提示
        console.log('Commands copied to clipboard')
      })
      .catch(err => {
        console.error('Failed to copy commands:', err)
      })
  }
}

// 重置滚动
const resetDemo = () => {
  if (terminalContent.value) {
    terminalContent.value.scrollTop = 0
  }
}

// 检测是否是长框内容或包含大量行
const isLongBox = (content) => {
  if (!content) return false
  
  // 检测是否有很多行内容
  const lineCount = content.split('\n').length
  const hasLotsOfLines = lineCount > 30
  
  // 检测是否内容很长
  const hasLongContent = content.length > 1000
  
  // 只有在内容确实很长的情况下才返回true
  return hasLotsOfLines || hasLongContent
}

// 截断过长内容
const truncateIfNeeded = (content) => {
  if (!content) return ''
  
  const lines = content.split('\n')
  
  // 优先按行数判断，如果行数合理就不截断
  if (lines.length <= 30) {
    return content
  }
  
  // 如果行数过多，截断行数
  if (lines.length > 30) {
    return lines.slice(0, 30).join('\n') + '\n[... 输出过长，已截断显示 ...]'
  }
  
  return content
}

</script>

<style scoped>
.terminal-container {
  height: 100%;
  background: var(--terminal-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
}

.terminal-tabs {
  display: flex;
  gap: 8px;
}

.terminal-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: var(--tab-bg);
  border-radius: 4px;
  font-size: 13px;
  color: var(--text-secondary);
}

.terminal-tab.active {
  background: var(--accent-color);
  color: white;
}

.tab-icon {
  font-size: 10px;
}

.terminal-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 4px 8px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.action-btn:hover {
  background: var(--hover-bg);
  border-color: var(--accent-color);
}

.terminal-body {
  flex: 1;
  overflow: hidden;
  background: var(--terminal-bg);
}

.terminal-content {
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  font-family: 'Cascadia Code', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  text-align: left;
}

.terminal-content::-webkit-scrollbar {
  width: 8px;
}

.terminal-content::-webkit-scrollbar-track {
  background: var(--terminal-bg);
}

.terminal-content::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

.terminal-content::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

.demo-block {
  margin-bottom: 16px;
  text-align: left;
}

.command-line {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 8px 0;
}

.prompt {
  color: var(--accent-color);
  font-weight: bold;
  flex-shrink: 0;
  user-select: none;
}

.command-text {
  color: var(--text-primary);
  font-weight: 500;
  word-break: break-all;
  font-family: 'Courier New', 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', monospace;
}

.output-block {
  margin: 8px 0;
  padding-left: 20px;
}

.output-text {
  color: var(--text-secondary);
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  font-family: 'Courier New', 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', monospace;
  line-height: 1.5;
  max-width: 100%;
  overflow-x: auto;
}

/* 处理长框和ASCII艺术的特殊情况 */
.output-text.long-box {
  font-size: 11px;
  overflow-x: auto;
  white-space: pre;
  max-height: 400px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.05);
  border-left: 2px solid var(--accent-color);
  padding: 8px;
  border-radius: 4px;
}

/* 长行截断处理 */
.output-text {
  word-break: break-all;
}

.output-text::-webkit-scrollbar {
  height: 4px;
}

.output-text::-webkit-scrollbar-track {
  background: transparent;
}

.output-text::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 2px;
}

.output-text::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

.truncate-hint {
  margin-top: 8px;
  padding: 4px 8px;
  background: var(--comment-bg, rgba(255, 165, 0, 0.1));
  border-left: 2px solid #ffa500;
  border-radius: 3px;
}

.hint-text {
  font-size: 11px;
  color: #ffa500;
  font-style: italic;
}

.comment-line {
  color: var(--comment-color, #6b7280);
  font-style: italic;
  margin: 12px 0;
  padding: 8px 12px;
  background: var(--comment-bg, rgba(107, 114, 128, 0.1));
  border-left: 3px solid var(--accent-color);
  border-radius: 4px;
}

.comment-text {
  display: block;
  font-size: 13px;
}

.welcome-message {
  text-align: left;
  padding: 40px 20px;
  color: var(--text-secondary);
}

.loading {
  padding: 20px;
  color: var(--text-secondary);
  text-align: left;
}

.ascii-logo {
  font-family: monospace;
  color: var(--accent-color);
  white-space: pre;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.2;
  text-align: left;
}

.welcome-message p {
  margin: 10px 0;
}

.hint {
  font-size: 12px;
  opacity: 0.8;
}


/* 暗色主题 */
:root.dark {
  --terminal-bg: #0a0a0a;
  --header-bg: #18181b;
  --tab-bg: #27272a;
  --comment-bg: rgba(107, 114, 128, 0.1);
  --comment-color: #9ca3af;
}

/* 亮色主题 */
:root:not(.dark) {
  --terminal-bg: #ffffff;
  --header-bg: #f4f4f5;
  --tab-bg: #e4e4e7;
  --comment-bg: rgba(107, 114, 128, 0.05);
  --comment-color: #6b7280;
}

/* 白天主题：黑色字体 */
:root:not(.dark) .command-text {
  color: #000000 !important;
}

:root:not(.dark) .output-text {
  color: #1f2937 !important;
}

:root:not(.dark) .prompt {
  color: var(--accent-color) !important;
}

/* 夜晚主题：白色字体 */
:root.dark .command-text {
  color: #ffffff !important;
}

:root.dark .output-text {
  color: #e5e7eb !important;
}

:root.dark .prompt {
  color: var(--accent-color) !important;
}

.default-content {
  color: var(--text-primary);
  font-family: 'Courier New', 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', monospace;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  padding: 10px;
}
</style>