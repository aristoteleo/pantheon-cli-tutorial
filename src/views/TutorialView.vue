<template>
  <div class="tutorial-view">
    <div class="content-section" :class="{ 'full-width': !shouldShowRightPanel }">
      <TutorialContent />
    </div>
    <div class="right-panel-section" v-if="shouldShowRightPanel">
      <VideoPlayer v-if="shouldShowVideo" />
      <div class="terminal-wrapper" v-else>
        <Terminal />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TutorialContent from '../components/TutorialContent.vue'
import Terminal from '../components/Terminal.vue'
import VideoPlayer from '../components/VideoPlayer.vue'

const route = useRoute()

// 定义不需要显示右侧面板的页面
const noRightPanelPages = [
  '/advanced/tool-details',
  '/release-notes',
  '/join-us'
]

// 定义需要显示视频的页面（真实案例）
const videoPages = [
  '/cases/social-behavior',
  '/cases/customs-finance',
  '/cases/scrna-complex',
  '/cases/scllm',
  '/cases/hd-10x',
  '/cases/atac-upstream',
  '/cases/rna-upstream',
  '/cases/molecular-docking',
  '/cases/mixed-python-r',
  '/cases/seurat-llm-annotation'
]

const shouldShowRightPanel = computed(() => {
  return !noRightPanelPages.includes(route.path)
})

const shouldShowVideo = computed(() => {
  return videoPages.includes(route.path)
})

// 兼容性：保持原有的 shouldShowTerminal 计算属性
const shouldShowTerminal = computed(() => {
  return shouldShowRightPanel.value && !shouldShowVideo.value
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

.right-panel-section {
  flex: 1 1 50%;
  min-width: 50%;
  max-width: 50%;
  background: var(--main-bg);
  height: 100%;
  overflow: hidden;
}

.terminal-wrapper {
  padding: 20px;
  height: 100%;
  overflow: hidden;
}

/* Mobile responsive design */
@media (max-width: 768px) {
  .tutorial-view {
    flex-direction: column;
    height: auto;
    min-height: calc(100vh - 60px); /* Account for hamburger menu space */
  }
  
  .content-section {
    flex: none;
    min-width: 100%;
    max-width: 100%;
    height: auto;
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    overflow-y: visible;
  }
  
  .content-section.full-width {
    min-height: calc(100vh - 60px);
    border-bottom: none;
  }
  
  .right-panel-section {
    flex: none;
    min-width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 300px;
    max-height: 50vh;
  }
  
  .terminal-wrapper {
    padding: 15px;
    height: 100%;
  }
}
</style>