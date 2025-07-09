import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownCuantosDistribucion = ({ value, onChange }: Props) => {
  const options = [
    { label: 'Columnas', value: 'row' },
    { label: 'Filas', value: 'column' },
  ]

  return (
    <div className="flex justify-content-between align-items-center mt-2">
      <label htmlFor="distribucion">Distribución: </label>
      <Dropdown
        inputId="distribucion"
        value={value}
        options={options}
        onChange={(e) => onChange(e.value)}
        placeholder="Distribución"
      />
    </div>
  )
}

export default DropdownCuantosDistribucion
