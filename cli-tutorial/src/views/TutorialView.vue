<template>
  <div class="tutorial-view">
    <div class="content-section" :class="{ 'full-width': !shouldShowTerminal }">
      <TutorialContent />
    </div>
    <div class="terminal-section" v-if="shouldShowTerminal">
      <Terminal />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TutorialContent from '../components/TutorialContent.vue'
import Terminal from '../components/Terminal.vue'

const route = useRoute()

// 定义不需要显示终端的页面
const noTerminalPages = [
  '/advanced/tool-details',
  '/cases/social-behavior',
  '/cases/customs-finance',
  '/cases/scrna-complex',
  '/cases/scllm',
  '/cases/hd-10x',
  '/cases/atac-upstream',
  '/cases/rna-upstream',
  '/cases/mixed-python-r',
  '/cases/molecular-docking',
  '/cases/seurat-llm-annotation'
]

const shouldShowTerminal = computed(() => {
  return !noTerminalPages.includes(route.path)
})
</script>

<style scoped>
.tutorial-view {
  display: flex;
  height: 100%;
  width: 100%;
}

.content-section {
  flex: 1 1 50%;
  min-width: 50%;
  max-width: 50%;
  background: var(--main-bg);
  border-right: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}

.content-section.full-width {
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  border-right: none;
}

.terminal-section {
  flex: 1 1 50%;
  min-width: 50%;
  max-width: 50%;
  background: var(--main-bg);
  padding: 20px;
  height: 100%;
  overflow: hidden;
}
</style>