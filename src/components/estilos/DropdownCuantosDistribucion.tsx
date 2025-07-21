import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { useTranslation } from 'react-i18next'

const DropdownCuantosDistribucion = ({ value, onChange }: Props) => {
  const { t } = useTranslation('dropdown')

  const options = [
    { label: t('cuantosDistribucion.row'), value: 'row' },
    { label: t('cuantosDistribucion.column'), value: 'column' },
  ]

  return (
    <div className="flex justify-content-between align-items-center mt-2">
      <label htmlFor="distribucion" className="text-lg">
        {t('cuantosDistribucion.label')}{' '}
      </label>
      <Dropdown
        inputId="distribucion"
        value={value}
        options={options}
        onChange={(e) => onChange(e.value)}
        placeholder={t('cuantosDistribucion.placeholder')}
      />
    </div>
  )
}

export default DropdownCuantosDistribucion
