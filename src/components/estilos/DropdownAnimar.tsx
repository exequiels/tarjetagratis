import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { animarOptions } from '../../utils/OpcionesAnimar'
import { useTranslation } from 'react-i18next'

type DropdownAnimarProps = Props & {
  fieldId: string
}

const DropdownAnimar = ({ fieldId, value, onChange }: DropdownAnimarProps) => {
  const { t } = useTranslation('dropdown')
  return (
    <div className="flex justify-content-between align-items-center mt-2 p-3 bg-verde border-round-lg">
      <div>
        <label htmlFor="animar" className="text-lg">
          {t('animar_label')}{' '}
        </label>
      </div>
      <Dropdown
        id={fieldId}
        inputId="animar"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder={t('animar_filterPlaceholder')}
        emptyFilterMessage={t('animar_emptyFilterMessage')}
        value={value}
        options={animarOptions}
        onChange={(e) => onChange(e.value)}
        placeholder={t('animar_placeholder')}
        itemTemplate={(option) => <div>{option.label}</div>}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownAnimar
