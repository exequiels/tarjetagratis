import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { useTranslation } from 'react-i18next'

const DropdownAlinear = ({ value, onChange }: Props) => {
  const { t } = useTranslation('dropdown')
  const alinearOptions = [
    { label: t('alinear_options.start'), value: 'align-items-start' },
    { label: t('alinear_options.center'), value: 'align-items-center' },
    { label: t('alinear_options.end'), value: 'align-items-end' },
  ]

  return (
    <div className="flex justify-content-between align-items-center">
      <div>
        <label htmlFor="alinear" className="text-lg">
          {t('alinear_label')}
        </label>
      </div>
      <Dropdown
        inputId="alinear"
        value={value}
        options={alinearOptions}
        onChange={(e) => onChange(e.value)}
        placeholder={t('alinear_placeholder')}
        itemTemplate={(option) => <div>{option.label}</div>}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownAlinear
