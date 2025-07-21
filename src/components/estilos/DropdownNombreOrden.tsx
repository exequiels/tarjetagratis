import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { useTranslation } from 'react-i18next'

const DropdownNombreOrden = ({ value, onChange }: Props) => {
  const { t } = useTranslation('dropdown')

  const orderOptions = [
    { label: t('orden.opciones.superior'), value: 'flex-order-0' },
    { label: t('orden.opciones.medio'), value: 'flex-order-1' },
    { label: t('orden.opciones.inferior'), value: 'flex-order-2' },
  ]

  return (
    <div className="flex justify-content-between align-items-center">
      <div>
        <label htmlFor="order" className="text-lg">
          {t('orden.label')}
        </label>
      </div>
      <Dropdown
        inputId="order"
        value={value}
        options={orderOptions}
        onChange={(e) => onChange(e.value)}
        placeholder={t('orden.placeholder')}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownNombreOrden
