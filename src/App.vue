<template>
  <div id="app">
    <!-- Mobile overlay for sidebar -->
    <div v-if="sidebarOpen" class="mobile-overlay" @click="closeSidebar"></div>
    
    <!-- Mobile hamburger menu -->
    <button class="mobile-menu-btn" @click="toggleSidebar">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    
    <Sidebar :class="{ 'sidebar-open': sidebarOpen }" />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
}

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
  width: calc(100% - 240px);
  height: 100vh;
  position: relative;
}

/* Mobile hamburger menu */
.mobile-menu-btn {
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: var(--sidebar-bg);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  flex-direction: column;
  gap: 3px;
  transition: all 0.3s ease;
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.3s ease;
}

.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Mobile responsive design */
@media (max-width: 768px) {
  html, body {
    overflow-y: auto;
    height: auto;
  }
  
  #app {
    height: auto;
    min-height: 100vh;
    flex-direction: column;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-overlay {
    display: block;
  }
  
  .main-content {
    margin-left: 0;
    width: 100%;
    padding-top: 60px;
    height: auto;
    min-height: auto;
    overflow-y: visible;
    flex: 1;
  }
}
</style>
