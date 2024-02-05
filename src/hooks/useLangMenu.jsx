import { langMenu } from '../consts.js'

export function useLangMenu (lang) {
  return langMenu[lang] || langMenu.es
}