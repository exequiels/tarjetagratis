import { createContext, useState, useContext } from 'react'
import i18n from '../i18n'

type LanguageContextType = {
  Idioma: string
  setIdioma: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  Idioma: 'es',
  setIdioma: () => {},
})

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [Idioma, setIdiomaState] = useState<'es' | 'en'>('es')

  const setIdioma = (lang: string) => {
    setIdiomaState(lang as 'es' | 'en')
    i18n.changeLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ Idioma, setIdioma }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
