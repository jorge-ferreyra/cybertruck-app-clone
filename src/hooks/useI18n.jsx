import { i18n } from '../consts.js'

export function useI18n (lang) {
  return i18n[lang] || i18n.es
}