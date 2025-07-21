import { useTranslation } from 'react-i18next'

const DropdownIdioma = () => {
  const { i18n } = useTranslation()

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  )
}

export default DropdownIdioma
