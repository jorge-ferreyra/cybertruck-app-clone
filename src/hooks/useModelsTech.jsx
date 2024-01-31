import { modelsTech } from "../consts.js"

export const useModelsTech = (lang) => {
  return modelsTech[lang] || modelsTech.es
}