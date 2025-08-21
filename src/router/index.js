import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'introduction',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/intro/:topic',
    name: 'introTopic',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/installation',
    name: 'installation',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/installation/:topic',
    name: 'installTopic',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/installation/detail/:topic',
    name: 'installDetailTopic',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/basic-commands',
    name: 'basicCommands',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/basic/:topic',
    name: 'basicTopic',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/advanced-usage',
    name: 'advancedUsage',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/advanced/:topic',
    name: 'advancedTopic',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/cases/:topic',
    name: 'caseTopic',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/troubleshooting',
    name: 'troubleshooting',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/trouble/:topic',
    name: 'troubleTopic',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/release-notes',
    name: 'releaseNotes',
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/join-us',
    name: 'joinUs',
    component: () => import('../views/TutorialView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router