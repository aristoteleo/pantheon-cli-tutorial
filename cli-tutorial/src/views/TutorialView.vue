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
  height: 100vh;
  width: 100%;
}

.content-section {
  flex: 1;
  background: var(--main-bg);
  overflow-y: auto;
  border-right: 1px solid var(--border-color);
}

.terminal-section {
  flex: 1;
  background: var(--main-bg);
  padding: 20px;
  overflow: hidden;
}
</style>