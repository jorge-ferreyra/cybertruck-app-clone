/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LanguageContext = createContext()

export function LanguageProvider ({ children }) {
  const [currentLang, setCurrentLang] = useState('es')
  const [animationButton, setAnimationButton] = useState('es')
  return (
    <LanguageContext.Provider value={{
      currentLang, setCurrentLang,
      animationButton, setAnimationButton
    }}>
      {children}
    </LanguageContext.Provider>
  )
}