<template>
  <aside class="sidebar">
    <!-- Logo区域 -->
    <div class="logo-section">
      <div class="logo-icon">
        <img :src="logoUrl" alt="Pantheon-CLI" />
      </div>
      <div class="logo-text">Pantheon-CLI</div>
    </div>
    
    <nav class="nav-menu">
      <div v-for="item in menuItems" :key="item.key" class="menu-section">
        <div 
          v-if="!item.children"
          @click="item.url ? openExternalLink(item.url) : navigateTo(item.path)"
          :class="['nav-item', { active: isActive(item.path), external: !!item.url }]"
        >
          <span class="nav-text">{{ t(`nav.${item.key}`) }}</span>
          <span v-if="item.url" class="external-icon">↗</span>
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
              <div v-for="child in item.children" :key="child.key || child.path">
                <!-- 如果子项有路径，直接显示为二级菜单 -->
                <div
                  v-if="child.path"
                  @click="navigateTo(child.path)"
                  :class="['nav-subitem', { active: isActive(child.path) }]"
                >
                  <span class="subitem-text">{{ t(`nav.${child.key}`) }}</span>
                </div>
                
                <!-- 如果子项有子菜单，显示为可展开的三级菜单 -->
                <div v-else-if="child.children" class="submenu-group">
                  <div 
                    @click="toggleSection(child.key)"
                    :class="['nav-subitem', 'nav-subparent', { expanded: expandedSections[child.key] }]"
                  >
                    <span class="subitem-text">{{ t(`nav.${child.key}`) }}</span>
                    <span class="nav-arrow small">{{ expandedSections[child.key] ? '▼' : '▶' }}</span>
                  </div>
                  
                  <transition name="submenu">
                    <div v-show="expandedSections[child.key]" class="sub-submenu">
                      <div
                        v-for="grandchild in child.children"
                        :key="grandchild.path"
                        @click="navigateTo(grandchild.path)"
                        :class="['nav-sub-subitem', { active: isActive(grandchild.path) }]"
                      >
                        <span class="sub-subitem-text">{{ t(`nav.${grandchild.key}`) }}</span>
                      </div>
                    </div>
                  </transition>
                </div>
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
      
      <div class="copyright-info">
        <div class="dev-team">By Pantheon development team</div>
        <div class="copyright">© Copyright 2025, Aristoteleo.</div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
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

// 动态计算logo URL，基于当前的base路径
const logoUrl = computed(() => {
  return import.meta.env.BASE_URL + 'pantheon.png'
})

const loadNavigation = async () => {
  try {
    const response = await fetch(import.meta.env.BASE_URL + 'navigation.yaml')
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const yamlText = await response.text()
    
    if (!yamlText.trim()) {
      throw new Error('Empty navigation.yaml file')
    }
    
    const config = yaml.load(yamlText)
    
    if (!config || !config.navigation) {
      throw new Error('Invalid navigation config structure')
    }
    
    menuItems.value = config.navigation
    
    // Initialize expanded sections based on current route
    updateExpandedSections()
  } catch (error) {
    console.error('Failed to load navigation config:', error)
    
    // Fallback navigation structure
    menuItems.value = [
      {
        key: 'introduction',
        children: [
          { path: '/', key: 'introOverview' },
          { path: '/intro/what-is-cli', key: 'introWhatIs' },
          { path: '/intro/why-cli', key: 'introWhy' },
          { path: '/intro/getting-started', key: 'introGettingStarted' }
        ]
      },
      {
        key: 'installation',
        children: [
          { path: '/installation', key: 'installOverview' }
        ]
      }
    ]
    
    updateExpandedSections()
  }
}

const updateExpandedSections = () => {
  // 根据当前路由设置展开状态
  const currentPath = route.path
  
  // 重置所有展开状态
  Object.keys(expandedSections).forEach(key => {
    expandedSections[key] = false
  })
  
  // 根据路径设置对应的父级为展开状态
  if (currentPath === '/' || currentPath.startsWith('/intro/')) {
    expandedSections['introduction'] = true
  } else if (currentPath === '/installation' || currentPath.startsWith('/installation/')) {
    expandedSections['installation'] = true
    // 如果是详细安装指南的子页面，也展开详细安装指南
    if (currentPath.startsWith('/installation/detail/')) {
      expandedSections['installDetail'] = true
    }
  } else if (currentPath === '/basic-commands' || currentPath.startsWith('/basic/')) {
    expandedSections['basicCommands'] = true
  } else if (currentPath === '/advanced-usage' || currentPath.startsWith('/advanced/')) {
    expandedSections['advancedUsage'] = true
  } else if (currentPath.startsWith('/cases/')) {
    expandedSections['realCases'] = true
  } else if (currentPath === '/troubleshooting' || currentPath.startsWith('/trouble/')) {
    expandedSections['troubleshooting'] = true
  }
}

// 监听路由变化，更新展开状态
watch(() => route.path, updateExpandedSections)

onMounted(loadNavigation)

const toggleSection = (key) => {
  expandedSections[key] = !expandedSections[key]
}

const navigateTo = (path) => {
  router.push(path)
}

const openExternalLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const isActive = (path) => {
  // 如果没有path（外部链接），不激活
  if (!path) return false
  
  // 完全匹配
  if (route.path === path) return true
  
  // 如果是子页面，检查是否属于当前父级路径
  // 注意：只有在当前路径确实是子页面时才激活父级
  if (path === '/' && route.path === '/') return true
  if (path.startsWith('/intro/') && route.path === path) return true
  if (path === '/installation' && route.path.startsWith('/installation/')) return true
  if (path.startsWith('/basic/') && route.path === path) return true
  if (path === '/basic-commands' && route.path.startsWith('/basic/')) return true
  if (path.startsWith('/advanced/') && route.path === path) return true
  if (path === '/advanced-usage' && route.path.startsWith('/advanced/')) return true
  if (path.startsWith('/cases/') && route.path === path) return true
  if (path.startsWith('/trouble/') && route.path === path) return true
  if (path === '/troubleshooting' && route.path.startsWith('/trouble/')) return true
  
  return false
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

.logo-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: var(--sidebar-bg);
}

.logo-icon {
  width: 60px;
  height: 42px;
  color: var(--accent-color);
  margin-bottom: 12px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.logo-icon:hover {
  transform: scale(1.05);
  color: var(--accent-color);
  filter: brightness(1.1);
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  letter-spacing: 0.3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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

.nav-item.external {
  position: relative;
}

.external-icon {
  position: absolute;
  right: 20px;
  font-size: 12px;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.nav-item.external:hover .external-icon {
  color: var(--text-primary);
}

.submenu {
  background: var(--submenu-bg);
}

.nav-subitem {
  padding: 8px 45px 8px 50px;
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
  flex: 1;
  padding-right: 25px;
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

.nav-subparent {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-arrow.small {
  font-size: 8px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.sub-submenu {
  background: var(--submenu-bg);
  margin-left: 10px;
  border-left: 2px solid var(--border-color);
}

.nav-sub-subitem {
  padding: 6px 15px 6px 70px;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.nav-sub-subitem:hover {
  background: var(--hover-bg);
  color: var(--text-primary);
}

.nav-sub-subitem.active {
  background: var(--active-bg);
  color: var(--accent-color);
  border-left-color: var(--accent-color);
}

.sub-subitem-text {
  display: block;
  font-size: 12px;
  text-align: left;
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

.copyright-info {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.dev-team {
  font-size: 11px;
  color: var(--text-secondary);
  margin-bottom: 4px;
  font-weight: 500;
}

.copyright {
  font-size: 10px;
  color: var(--text-secondary);
  opacity: 0.8;
  line-height: 1.4;
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