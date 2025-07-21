import { Dropdown } from 'primereact/dropdown'
import type { CardFormData } from '../../types/CardFormData'
import { getPlantillas } from '../../utils/Plantillas'
import { useTranslation } from 'react-i18next'

type Props = {
  value: CardFormData | null
  onChange: (plantilla: CardFormData) => void
}

const DropdownPlantillas = ({ onChange, value }: Props) => {
  const { t } = useTranslation('dropdown')
  const plantillas = getPlantillas(t)

  return (
    <div>
      <label htmlFor="plantillas">{t('plantillas.label')}</label>
      <Dropdown
        inputId="plantillas"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder={t('plantillas.filterPlaceholder')}
        emptyFilterMessage={t('plantillas.emptyMessage')}
        value={value}
        options={plantillas}
        onChange={(e) => onChange(e.value)}
        placeholder={t('plantillas.placeholder')}
        optionLabel="label"
        className="w-full mt-2"
      />
    </div>
  )
}

export default DropdownPlantillas
