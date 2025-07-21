import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { fontOptions } from '../../utils/OpcionesFuentes'
import { useTranslation } from 'react-i18next'

const DropdownFuente = ({ value, onChange }: Props) => {
  const { t } = useTranslation('dropdown')
  return (
    <div>
      <label htmlFor="fuente">{t('fuente.label')}</label>

      <Dropdown
        inputId="fuente"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder={t('fuente.buscar_placeholder')}
        emptyFilterMessage={t('fuente.mensaje_vacio')}
        value={value}
        options={fontOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Selecciona una fuente"
        itemTemplate={(option) => (
          <div style={{ fontFamily: option.value }}>{option.label}</div>
        )}
        className="w-full mt-2"
      />
    </div>
  )
}

export default DropdownFuente
