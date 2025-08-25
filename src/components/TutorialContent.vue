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

// 导入所有markdown文件
const markdownModules = import.meta.glob('../content/**/*.md', { 
  eager: false,
  query: '?raw',
  import: 'default'
})

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
  '/installation/pantheon-notebook': 'installation/pantheon-notebook',
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
  '/trouble/faq': 'trouble/faq',
  
  '/release-notes': 'release-notes',
  '/join-us': 'join-us'
}

const loadMarkdown = async () => {
  const key = contentMap[route.path] || 'introduction'
  const lang = locale.value
  
  try {
    const modulePath = `../content/${lang}/${key}.md`
    const loader = markdownModules[modulePath]
    
    if (loader) {
      const content = await loader()
      markdownContent.value = content
    } else {
      // 如果找不到对应语言的文件，尝试加载默认语言
      const fallbackPath = `../content/zh/${key}.md`
      const fallbackLoader = markdownModules[fallbackPath]
      
      if (fallbackLoader) {
        const content = await fallbackLoader()
        markdownContent.value = content
      } else {
        throw new Error(`File not found: ${modulePath}`)
      }
    }
  } catch (error) {
    console.error('Failed to load markdown:', error)
    markdownContent.value = `# 内容加载失败\n\n无法加载 ${key} 的内容。\n\n错误信息：${error.message}`
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
  overflow-x: hidden;
  box-sizing: border-box;
}

.tutorial-content::-webkit-scrollbar {
  width: 8px;
}

.tutorial-content::-webkit-scrollbar-track {
  background: var(--main-bg);
  border-radius: 4px;
}

.tutorial-content::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

.tutorial-content::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

.markdown-body {
  color: var(--text-primary);
  line-height: 1.8;
  text-align: left;
  max-width: 100%;
  padding-bottom: 50px;
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

/* Mobile responsive design */
@media (max-width: 768px) {
  .tutorial-content {
    padding: 15px;
    height: auto;
    overflow-y: visible;
    min-height: auto;
  }
  
  .markdown-body {
    padding-bottom: 30px;
  }
  
  :deep(.markdown-body h1) {
    font-size: 22px;
    margin: 15px 0 12px;
  }
  
  :deep(.markdown-body h2) {
    font-size: 18px;
    margin: 15px 0 10px;
  }
  
  :deep(.markdown-body h3) {
    font-size: 16px;
    margin: 12px 0 8px;
  }
  
  :deep(.markdown-body p) {
    margin: 8px 0;
    font-size: 14px;
  }
  
  :deep(.markdown-body ul),
  :deep(.markdown-body ol) {
    padding-left: 20px;
    font-size: 14px;
  }
  
  :deep(.markdown-body code) {
    font-size: 13px;
    padding: 1px 4px;
  }
  
  :deep(.markdown-body pre) {
    padding: 12px;
    margin: 12px 0;
    overflow-x: auto;
  }
  
  :deep(.markdown-body pre code) {
    font-size: 12px;
  }
}
</style>