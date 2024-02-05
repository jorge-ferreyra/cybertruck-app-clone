import { useContext } from "react"
import { LanguageContext } from '../context/Languages.jsx'

export function useLanguage () {
  const { currentLang, setCurrentLang, animationButton, setAnimationButton } = useContext(LanguageContext)

  const handleLangChange = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es'
    setCurrentLang(newLang)
    if (animationButton == 'es') {
      document.querySelector('.langContainer').classList.add('clicked')
      document.querySelector('.changeLang').classList.add('clicked')
      setAnimationButton('en')
    } else {
      document.querySelector('.langContainer').classList.remove('clicked')
      document.querySelector('.changeLang.clicked').classList.remove('clicked')
      setAnimationButton('es')
    }
  }
  return{ currentLang, setCurrentLang, animationButton, setAnimationButton, handleLangChange }
}