<template>
  <div id="app">
    <Sidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  width: 100%;
  background: var(--main-bg);
}

.main-content {
  flex: 1;
  margin-left: 240px;
  display: flex;
  overflow: hidden;
  width: calc(100% - 240px);
}
</style>
