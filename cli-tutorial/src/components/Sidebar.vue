<template>
  <aside class="sidebar">
    <nav class="nav-menu">
      <div v-for="item in menuItems" :key="item.key" class="menu-section">
        <div 
          v-if="!item.children"
          @click="navigateTo(item.path)"
          :class="['nav-item', { active: isActive(item.path) }]"
        >
          <span class="nav-text">{{ t(`nav.${item.key}`) }}</span>
        </div>
        
        <div v-else class="menu-group">
          <div 
            @click="toggleSection(item.key)"
            :class="['nav-item', 'nav-parent', { expanded: expandedSections[item.key] }]"
          >
            <span class="nav-text">{{ t(`nav.${item.key}`) }}</span>
            <span class="nav-arrow">{{ expandedSections[item.key] ? '▼' : '▶' }}</span>
          </div>
          
          <transition name="submenu">
            <div v-show="expandedSections[item.key]" class="submenu">
              <div
                v-for="child in item.children"
                :key="child.path"
                @click="navigateTo(child.path)"
                :class="['nav-subitem', { active: isActive(child.path) }]"
              >
                <span class="subitem-text">{{ t(`nav.${child.key}`) }}</span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </nav>
    
    <div class="sidebar-footer">
      <div class="theme-toggle">
        <button @click="toggleTheme" class="theme-btn">
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
          <span class="btn-text">{{ t('theme.toggle') }}</span>
        </button>
      </div>
      
      <div class="lang-toggle">
        <select v-model="locale" @change="changeLocale" class="lang-select">
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '../stores/theme'
import { useLocaleStore } from '../stores/locale'
import { storeToRefs } from 'pinia'
import yaml from 'js-yaml'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()
const themeStore = useThemeStore()
const localeStore = useLocaleStore()
const { isDark } = storeToRefs(themeStore)

const menuItems = ref([])
const expandedSections = reactive({})

const loadNavigation = async () => {
  try {
    const response = await fetch('/src/config/navigation.yaml')
    const yamlText = await response.text()
    const config = yaml.load(yamlText)
    
    menuItems.value = config.navigation
    
    // Initialize expanded sections
    config.navigation.forEach(item => {
      expandedSections[item.key] = item.key === 'introduction'
    })
  } catch (error) {
    console.error('Failed to load navigation config:', error)
  }
}

onMounted(loadNavigation)

const toggleSection = (key) => {
  expandedSections[key] = !expandedSections[key]
}

const navigateTo = (path) => {
  router.push(path)
}

const isActive = (path) => {
  return route.path === path
}

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const changeLocale = () => {
  localeStore.setLocale(locale.value)
}
</script>

<style scoped>
.sidebar {
  width: 240px;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
}

.nav-menu {
  flex: 1;
  padding: 15px 0;
}

.menu-section {
  margin-bottom: 2px;
}

.menu-group {
  margin-bottom: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  position: relative;
  user-select: none;
}

.nav-item:hover {
  background: var(--hover-bg);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--active-bg);
  color: var(--accent-color);
  border-left-color: var(--accent-color);
}

.nav-parent {
  font-weight: 600;
}

.nav-parent.expanded {
  color: var(--text-primary);
}

.nav-arrow {
  position: absolute;
  right: 20px;
  font-size: 10px;
  transition: transform 0.2s ease;
}

.nav-icon {
  margin-right: 10px;
  font-size: 1.1em;
}

.nav-text {
  font-size: 14px;
  flex: 1;
  text-align: left;
}

.submenu {
  background: var(--submenu-bg);
}

.nav-subitem {
  padding: 8px 20px 8px 50px;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.nav-subitem:hover {
  background: var(--hover-bg);
  color: var(--text-primary);
}

.nav-subitem.active {
  background: var(--active-bg);
  color: var(--accent-color);
  border-left-color: var(--accent-color);
}

.subitem-text {
  display: block;
  text-align: left;
}

.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  max-height: 0;
}

.submenu-enter-to,
.submenu-leave-from {
  opacity: 1;
  max-height: 500px;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid var(--border-color);
  background: var(--sidebar-bg);
}

.theme-btn {
  width: 100%;
  padding: 8px;
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background: var(--hover-bg);
}

.lang-toggle {
  margin-top: 10px;
}

.lang-select {
  width: 100%;
  padding: 8px;
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  cursor: pointer;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: var(--sidebar-bg);
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}
</style>