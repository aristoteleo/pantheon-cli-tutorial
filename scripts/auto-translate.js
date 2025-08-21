#!/usr/bin/env node
/**
 * 自动翻译脚本
 * 使用OpenAI API将现有语言文件翻译为其他语言
 */

const fs = require('fs')
const path = require('path')

// 配置
const CONFIG = {
  // 在这里添加你的OpenAI API密钥
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'your-api-key-here',
  
  // 源语言文件路径
  sourceLocales: {
    en: path.join(__dirname, '../src/locales/en.js'),
    zh: path.join(__dirname, '../src/locales/zh.js')
  },
  
  // 目标语言配置
  targetLanguages: {
    ja: {
      name: 'Japanese',
      prompt: 'Translate to Japanese, maintaining technical terms and proper formatting'
    },
    es: {
      name: 'Spanish', 
      prompt: 'Translate to Spanish, maintaining technical terms and proper formatting'
    }
  }
}

/**
 * 调用OpenAI翻译
 */
async function translateText(text, targetLang, sourceText = 'English') {
  const prompt = `You are a technical translator. Translate the following ${sourceText} text to ${CONFIG.targetLanguages[targetLang].name}. 
Keep technical terms, code examples, and formatting intact. Only translate user-facing text:

${text}`

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{
          role: 'user',
          content: prompt
        }],
        temperature: 0.3,
      }),
    })

    const data = await response.json()
    return data.choices[0].message.content.trim()
  } catch (error) {
    console.error(`Translation error for ${targetLang}:`, error)
    return text // 返回原文作为后备
  }
}

/**
 * 处理嵌套对象翻译
 */
async function translateObject(obj, targetLang, sourceText, path = '') {
  const result = {}
  
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = path ? `${path}.${key}` : key
    
    if (typeof value === 'string') {
      console.log(`Translating ${currentPath}...`)
      result[key] = await translateText(value, targetLang, sourceText)
      
      // 添加延迟以避免API限制
      await new Promise(resolve => setTimeout(resolve, 100))
    } else if (typeof value === 'object' && value !== null) {
      result[key] = await translateObject(value, targetLang, sourceText, currentPath)
    } else {
      result[key] = value
    }
  }
  
  return result
}

/**
 * 解析JS文件内容
 */
function parseJSLocaleFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  
  // 简单的正则提取 - 在实际项目中可能需要更复杂的解析
  const match = content.match(/export default\s*({[\s\S]*})/)
  if (!match) {
    throw new Error(`Cannot parse locale file: ${filePath}`)
  }
  
  // 这里使用eval有安全风险，在生产环境中应该使用更安全的JSON解析
  // 或者使用AST解析器如 @babel/parser
  return eval(`(${match[1]})`)
}

/**
 * 生成JS语言文件
 */
function generateJSLocaleFile(data, targetLang) {
  return `export default ${JSON.stringify(data, null, 2)}`
}

/**
 * 主翻译函数
 */
async function translateLocales() {
  console.log('🌐 Starting auto-translation...')
  
  if (CONFIG.OPENAI_API_KEY === 'your-api-key-here') {
    console.error('❌ Please set your OpenAI API key in the config or environment variable OPENAI_API_KEY')
    return
  }
  
  // 读取英文作为主要源文件
  const enData = parseJSLocaleFile(CONFIG.sourceLocales.en)
  
  for (const [langCode, langConfig] of Object.entries(CONFIG.targetLanguages)) {
    console.log(`\n🔄 Translating to ${langConfig.name} (${langCode})...`)
    
    try {
      const translatedData = await translateObject(enData, langCode, 'English')
      
      // 生成目标语言文件
      const outputPath = path.join(__dirname, `../src/locales/${langCode}.js`)
      const fileContent = generateJSLocaleFile(translatedData, langCode)
      
      fs.writeFileSync(outputPath, fileContent, 'utf8')
      console.log(`✅ Generated ${langConfig.name} locale file: ${outputPath}`)
      
    } catch (error) {
      console.error(`❌ Error translating to ${langConfig.name}:`, error)
    }
  }
  
  console.log('\n🎉 Translation completed!')
  console.log('📝 Please review the generated files and update i18n.js to include new languages.')
}

/**
 * 更新i18n配置示例
 */
function showI18nUpdateInstructions() {
  console.log('\n📋 To complete the setup, update your i18n.js file:')
  console.log(`
// Add imports
import ja from './locales/ja'
import es from './locales/es'

// Update messages
messages: {
  en,
  zh,
  ja,  // Japanese
  es   // Spanish
}
`)
}

// 运行脚本
if (require.main === module) {
  translateLocales()
    .then(() => {
      showI18nUpdateInstructions()
    })
    .catch(console.error)
}

module.exports = { translateLocales, translateText }