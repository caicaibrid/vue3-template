import { createI18n } from 'vue-i18n'
import en from './en.ts'
import zh from './zh.ts'
// 定义语言包
const messages = {
  en,
  zh,
}

// 创建 i18n 实例
const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en', // 默认语言
  fallbackLocale: 'en', // 备用语言
  messages,
})

export default i18n
