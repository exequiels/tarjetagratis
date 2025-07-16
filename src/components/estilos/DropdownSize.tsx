import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { useTranslation } from 'react-i18next'

type DropdownSizeProps = Props & {
  fieldId: string
}

const DropdownSize = ({ value, onChange, fieldId }: DropdownSizeProps) => {
  const { t } = useTranslation('dropdown')

  const baseOptions = [
    { label: t('size.compact'), value: 'text-xl' },
    { label: t('size.normal'), value: 'text-2xl' },
    { label: t('size.large'), value: 'text-4xl' },
    { label: t('size.giant'), value: 'text-6xl' },
  ]

  const extraOption = [
    { label: t('size.beast'), value: 'text-7xl' },
    { label: t('size.crazy'), value: 'text-8xl' },
    { label: t('size.colossal'), value: 'text-10xl' },
    { label: t('size.epic'), value: 'text-12xl' },
  ]

  const legendariaOption = [{ label: t('size.legendary'), value: 'text-18xl' }]

  const sizeOptions =
    fieldId === 'cuantos'
      ? [...baseOptions, ...extraOption, ...legendariaOption]
      : fieldId === 'nombre'
      ? [...baseOptions, ...extraOption]
      : baseOptions

  return (
    <div className="flex justify-content-between align-items-center mt-2 p-3 bg-verde border-round-lg">
      <div>
        <label htmlFor="size" className="text-lg">
          {t('size.label')}
        </label>
      </div>
      <Dropdown
        inputId="size"
        value={value}
        options={sizeOptions}
        onChange={(e) => onChange(e.value)}
        placeholder={t('size.placeholder')}
        itemTemplate={(option) => <div>{option.label}</div>}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownSize
