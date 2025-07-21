import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { useTranslation } from 'react-i18next'

const DropdownNombreOrden = ({ value, onChange }: Props) => {
  const { t } = useTranslation('dropdown')

  const reverseOptions = [
    { label: t('nombreOrden.flex-row'), value: 'flex-row' },
    { label: t('nombreOrden.flex-row-reverse'), value: 'flex-row-reverse' },
  ]

  return (
    <div className="flex justify-content-between align-items-center">
      <div>
        <label htmlFor="reverse" className="text-lg">
          {t('nombreOrden.label')}
        </label>
      </div>
      <Dropdown
        inputId="reverse"
        value={value}
        options={reverseOptions}
        onChange={(e) => onChange(e.value)}
        placeholder={t('nombreOrden.placeholder')}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownNombreOrden
