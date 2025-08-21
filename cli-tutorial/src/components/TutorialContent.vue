<template>
  <div class="tutorial-content">
    <div class="markdown-body" v-html="renderedContent"></div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'

const route = useRoute()
const { locale } = useI18n()
const markdownContent = ref('')

const contentMap = {
  '/': 'introduction',
  '/intro/what-is-cli': 'intro/what-is-cli',
  '/intro/why-cli': 'intro/why-cli',
  '/intro/getting-started': 'intro/getting-started',
  
  '/installation': 'installation',
  '/installation/requirements': 'installation/requirements',
  '/installation/windows': 'installation/windows',
  '/installation/macos': 'installation/macos',
  '/installation/linux': 'installation/linux',
  '/installation/verify': 'installation/verify',
  
  '/basic-commands': 'basic-commands',
  '/basic/navigation': 'basic/navigation',
  '/basic/file-operations': 'basic/file-operations',
  '/basic/text-editing': 'basic/text-editing',
  '/basic/permissions': 'basic/permissions',
  
  '/advanced-usage': 'advanced-usage',
  '/advanced/scripting': 'advanced/scripting',
  '/advanced/pipes': 'advanced/pipes',
  '/advanced/regex': 'advanced/regex',
  '/advanced/automation': 'advanced/automation',
  
  '/troubleshooting': 'troubleshooting',
  '/trouble/common-errors': 'trouble/common-errors',
  '/trouble/debugging': 'trouble/debugging',
  '/trouble/faq': 'trouble/faq'
}

const loadMarkdown = async () => {
  const key = contentMap[route.path] || 'introduction'
  const lang = locale.value
  
  try {
    const module = await import(`../content/${lang}/${key}.md?raw`)
    markdownContent.value = module.default
  } catch (error) {
    console.error('Failed to load markdown:', error)
    markdownContent.value = `# 内容加载失败\n\n无法加载 ${key} 的内容。`
  }
}

const renderedContent = computed(() => {
  return marked(markdownContent.value)
})

watch([() => route.path, locale], loadMarkdown, { immediate: true })

onMounted(() => {
  marked.setOptions({
    highlight: function(code, lang) {
      return `<pre class="language-${lang}"><code>${escapeHtml(code)}</code></pre>`
    },
    breaks: true,
    gfm: true
  })
})

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}
</script>

<style scoped>
.tutorial-content {
  padding: 20px 25px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.markdown-body {
  color: var(--text-primary);
  line-height: 1.8;
  text-align: left;
}

:deep(.markdown-body h1) {
  font-size: 24px;
  margin: 20px 0 15px;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

:deep(.markdown-body h2) {
  font-size: 20px;
  margin: 18px 0 12px;
  color: var(--text-primary);
}

:deep(.markdown-body h3) {
  font-size: 18px;
  margin: 15px 0 10px;
  color: var(--text-primary);
}

:deep(.markdown-body p) {
  margin: 10px 0;
  color: var(--text-secondary);
}

:deep(.markdown-body ul),
:deep(.markdown-body ol) {
  margin: 10px 0;
  padding-left: 25px;
  color: var(--text-secondary);
}

:deep(.markdown-body li) {
  margin: 5px 0;
}

:deep(.markdown-body strong) {
  color: var(--text-primary);
  font-weight: 600;
}

:deep(.markdown-body code) {
  background: var(--code-bg);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: var(--code-color);
}

:deep(.markdown-body pre) {
  background: var(--code-block-bg);
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 15px 0;
  border: 1px solid var(--border-color);
}

:deep(.markdown-body pre code) {
  background: transparent;
  padding: 0;
  color: var(--code-block-color);
  display: block;
  line-height: 1.5;
}

:deep(.markdown-body blockquote) {
  border-left: 4px solid var(--accent-color);
  padding-left: 15px;
  margin: 15px 0;
  color: var(--text-secondary);
  font-style: italic;
}
</style>