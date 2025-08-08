import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import cardlayoutEN from './traducciones/en/cardlayout.json'
import cardlayoutES from './traducciones/es/cardlayout.json'
import armadorEN from './traducciones/en/armador.json'
import armadorES from './traducciones/es/armador.json'
import dropdownEN from './traducciones/en/dropdown.json'
import dropdownES from './traducciones/es/dropdown.json'
import aboutEN from './traducciones/en/about.json'
import aboutES from './traducciones/es/about.json'
import verTarjetaES from './traducciones/es/verTarjeta.json'
import verTarjetaEN from './traducciones/en/verTarjeta.json'
import validacionesEN from './traducciones/en/validaciones.json'
import validacionesES from './traducciones/es/validaciones.json'
import plantillasES from './traducciones/es/plantillas.json'
import plantillasEN from './traducciones/en/plantillas.json'
import fondosEN from './traducciones/en/fondos.json'
import fondosES from './traducciones/es/fondos.json'
import faqEN from './traducciones/en/faq.json'
import faqES from './traducciones/es/faq.json'

// const getInitialLanguage = () => {
//   const browserLang = navigator.language || navigator.languages?.[0] || 'es'

//   if (browserLang.startsWith('en')) {
//     return 'en'
//   }

//   const hostname = window.location.hostname
//   if (hostname.includes('magickidscards.com')) {
//     return 'en'
//   }

//   if (hostname.includes('tarjetagratis.com')) {
//     return 'es'
//   }

//   return 'es'
// }
const getInitialLanguage = () => {
  const lang = (
    navigator.language ||
    navigator.languages?.[0] ||
    'es'
  ).toLowerCase()
  return lang.startsWith('en') ? 'en' : 'es'
}

i18n.use(initReactI18next).init({
  lng: getInitialLanguage(),
  resources: {
    en: {
      cardlayout: cardlayoutEN,
      armador: armadorEN,
      dropdown: dropdownEN,
      about: aboutEN,
      verTarjeta: verTarjetaEN,
      validaciones: validacionesEN,
      plantillas: plantillasEN,
      fondos: fondosEN,
      faq: faqEN,
    },
    es: {
      cardlayout: cardlayoutES,
      armador: armadorES,
      dropdown: dropdownES,
      about: aboutES,
      verTarjeta: verTarjetaES,
      validaciones: validacionesES,
      plantillas: plantillasES,
      fondos: fondosES,
      faq: faqES,
    },
  },
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
