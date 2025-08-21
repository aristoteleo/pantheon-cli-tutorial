<template>
  <div class="tutorial-view">
    <div class="content-section">
      <TutorialContent />
    </div>
    <div class="terminal-section">
      <Terminal />
    </div>
  </div>
</template>

<script setup>
import TutorialContent from '../components/TutorialContent.vue'
import Terminal from '../components/Terminal.vue'
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