<template>
  <div class="video-player">
    <div class="video-header">
      <h3>{{ $t('video.demo') }}</h3>
      <p class="video-subtitle">{{ $t('video.realCase') }}</p>
    </div>
    <div class="video-container" v-if="videoId">
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
    <div class="video-placeholder" v-else>
      <div class="placeholder-content">
        <div class="video-icon">🎥</div>
        <h4>{{ $t('video.comingSoon') }}</h4>
        <p class="placeholder-desc">{{ $t('video.description') }}</p>
        <div class="case-info">
          <div class="info-item">
            <span class="info-icon">🔬</span>
            <span>{{ $t('video.realAnalysis') }}</span>
          </div>
          <div class="info-item">
            <span class="info-icon">💬</span>
            <span>{{ $t('video.naturalLanguage') }}</span>
          </div>
          <div class="info-item">
            <span class="info-icon">⚡</span>
            <span>{{ $t('video.stepByStep') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 真实案例的YouTube视频映射 - 暂时为空，等待实际视频ID
const videoMapping = {
  // '/cases/social-behavior': 'VIDEO_ID_HERE',
  // '/cases/customs-finance': 'VIDEO_ID_HERE', 
  // '/cases/scrna-complex': 'VIDEO_ID_HERE',
  // '/cases/scllm': 'VIDEO_ID_HERE',
  // '/cases/hd-10x': 'VIDEO_ID_HERE',
  // '/cases/atac-upstream': 'VIDEO_ID_HERE',
  // '/cases/rna-upstream': 'VIDEO_ID_HERE',
  // '/cases/molecular-docking': 'VIDEO_ID_HERE',
  // '/cases/mixed-python-r': 'VIDEO_ID_HERE',
  // '/cases/seurat-llm-annotation': 'VIDEO_ID_HERE',
}

const videoId = computed(() => {
  return videoMapping[route.path] || null
})
</script>

<style scoped>
.video-player {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.video-header {
  margin-bottom: 20px;
}

.video-header h3 {
  margin: 0 0 8px 0;
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 600;
}

.video-subtitle {
  margin: 0;
  color: var(--text-secondary);
  font-size: 14px;
}

.video-container {
  flex: 1;
  position: relative;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  min-height: 400px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--code-bg);
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  min-height: 400px;
}

.placeholder-content {
  text-align: center;
  color: var(--text-secondary);
  max-width: 300px;
}

.video-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.8;
}

.placeholder-content h4 {
  margin: 0 0 12px 0;
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 600;
}

.placeholder-desc {
  margin: 0 0 24px 0;
  font-size: 14px;
  line-height: 1.5;
}

.case-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.info-icon {
  font-size: 16px;
}
</style>