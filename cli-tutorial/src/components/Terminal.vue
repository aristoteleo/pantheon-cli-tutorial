<template>
  <div class="terminal-container">
    <div class="terminal-input">
      <div class="input-header">
        <span class="header-title">{{ t('terminal.input') }}</span>
        <button @click="executeCommand" class="execute-btn">▶ Run</button>
      </div>
      <div class="input-area">
        <textarea
          v-model="inputCommand"
          @keydown.enter.ctrl="executeCommand"
          :placeholder="t('terminal.placeholder')"
          class="command-input"
        ></textarea>
      </div>
    </div>
    
    <div class="terminal-output">
      <div class="output-header">
        <span class="header-title">{{ t('terminal.output') }}</span>
        <button @click="clearTerminal" class="clear-btn">{{ t('terminal.clear') }}</button>
      </div>
      <div ref="terminalRef" class="xterm-container"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import { useThemeStore } from '../stores/theme'
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const terminalRef = ref(null)
const inputCommand = ref('')
let terminal = null
let fitAddon = null

const commandHistory = []
const commandResponses = {
  'help': `Available commands:
  help     - Show this help message
  ls       - List files in current directory
  pwd      - Show current directory
  echo     - Display a message
  clear    - Clear the terminal
  date     - Show current date and time
  version  - Show CLI version`,
  'ls': 'file1.txt  file2.js  folder1/  folder2/  README.md',
  'pwd': '/home/user/projects/cli-tutorial',
  'version': 'CLI Tool v1.0.0',
  'date': () => new Date().toString()
}

const getTerminalTheme = () => {
  return isDark.value ? {
    background: '#0a0a0a',
    foreground: '#e4e4e7',
    cursor: '#22c55e',
    cursorAccent: '#0a0a0a',
    selection: 'rgba(34, 197, 94, 0.3)',
    black: '#0a0a0a',
    red: '#ef4444',
    green: '#22c55e',
    yellow: '#eab308',
    blue: '#3b82f6',
    magenta: '#a855f7',
    cyan: '#06b6d4',
    white: '#e4e4e7'
  } : {
    background: '#ffffff',
    foreground: '#18181b',
    cursor: '#16a34a',
    cursorAccent: '#ffffff',
    selection: 'rgba(22, 163, 74, 0.2)',
    black: '#18181b',
    red: '#dc2626',
    green: '#16a34a',
    yellow: '#ca8a04',
    blue: '#2563eb',
    magenta: '#9333ea',
    cyan: '#0891b2',
    white: '#fafafa'
  }
}

onMounted(() => {
  terminal = new Terminal({
    theme: getTerminalTheme(),
    fontSize: 14,
    fontFamily: "'Cascadia Code', 'Courier New', monospace",
    cursorBlink: true,
    cursorStyle: 'block',
    scrollback: 1000,
    convertEol: true
  })
  
  fitAddon = new FitAddon()
  terminal.loadAddon(fitAddon)
  
  terminal.open(terminalRef.value)
  fitAddon.fit()
  
  terminal.writeln('Welcome to CLI Tutorial Terminal!')
  terminal.writeln('Type "help" for available commands.')
  terminal.write('\r\n$ ')
  
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (terminal) {
    terminal.dispose()
  }
  window.removeEventListener('resize', handleResize)
})

watch(isDark, () => {
  if (terminal) {
    terminal.options.theme = getTerminalTheme()
  }
})

const handleResize = () => {
  if (fitAddon) {
    fitAddon.fit()
  }
}

const executeCommand = () => {
  if (!inputCommand.value.trim()) return
  
  const command = inputCommand.value.trim()
  commandHistory.push(command)
  
  terminal.writeln(command)
  
  const [cmd, ...args] = command.split(' ')
  
  if (cmd === 'clear') {
    terminal.clear()
    terminal.write('$ ')
  } else if (cmd === 'echo') {
    terminal.writeln(args.join(' '))
    terminal.write('\r\n$ ')
  } else if (commandResponses[cmd]) {
    const response = typeof commandResponses[cmd] === 'function' 
      ? commandResponses[cmd]() 
      : commandResponses[cmd]
    terminal.writeln(response)
    terminal.write('\r\n$ ')
  } else {
    terminal.writeln(`Command not found: ${cmd}`)
    terminal.writeln('Type "help" for available commands.')
    terminal.write('\r\n$ ')
  }
  
  inputCommand.value = ''
}

const clearTerminal = () => {
  terminal.clear()
  terminal.writeln('Terminal cleared.')
  terminal.write('\r\n$ ')
}
</script>

<style scoped>
.terminal-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
}

.terminal-input,
.terminal-output {
  background: var(--terminal-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.terminal-input {
  flex: 0 0 200px;
}

.terminal-output {
  flex: 1;
  min-height: 0;
}

.input-header,
.output-header {
  background: var(--header-bg);
  padding: 10px 15px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
}

.execute-btn,
.clear-btn {
  padding: 5px 12px;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: opacity 0.3s ease;
}

.execute-btn:hover,
.clear-btn:hover {
  opacity: 0.9;
}

.input-area {
  padding: 15px;
}

.command-input {
  width: 100%;
  height: 100px;
  background: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 10px;
  color: var(--text-primary);
  font-family: 'Cascadia Code', 'Courier New', monospace;
  font-size: 14px;
  resize: none;
}

.command-input:focus {
  outline: none;
  border-color: var(--accent-color);
}

.xterm-container {
  height: calc(100% - 45px);
  padding: 10px;
}

:deep(.xterm) {
  height: 100%;
}

:deep(.xterm-viewport) {
  background: transparent !important;
}

:deep(.xterm-screen) {
  text-align: left !important;
}

:deep(.xterm-rows) {
  text-align: left !important;
}
</style>