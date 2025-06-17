import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownNombreOrden = ({ value, onChange }: Props) => {
  const orderOptions = [
    { label: 'Superior', value: 'flex-order-0' },
    { label: 'Medio', value: 'flex-order-1' },
    { label: 'Inferior', value: 'flex-order-2' },
  ]

  return (
    <div className="flex justify-content-between align-items-center">
      <div>
        <label htmlFor="order">Fila: </label>
      </div>
      <Dropdown
        inputId="order"
        value={value}
        options={orderOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Orden"
        className="mt-2"
      />
    </div>
  )
}

export default DropdownNombreOrden
