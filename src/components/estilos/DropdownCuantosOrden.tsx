import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownNombreOrden = ({ value, onChange }: Props) => {
  const reverseOptions = [
    { label: 'Primera', value: 'flex-row' },
    { label: 'Segunda', value: 'flex-row-reverse' },
  ]

  return (
    <div className="flex justify-content-between align-items-center">
      <div>
        <label htmlFor="reverse">Columna: </label>{' '}
      </div>
      <Dropdown
        inputId="reverse"
        value={value}
        options={reverseOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Orden"
        className="mt-2"
      />
    </div>
  )
}

export default DropdownNombreOrden
