import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocaleStore = defineStore('locale', () => {
  const currentLocale = ref('zh')
  
  const setLocale = (locale) => {
    currentLocale.value = locale
  }
  
  return { currentLocale, setLocale }
})