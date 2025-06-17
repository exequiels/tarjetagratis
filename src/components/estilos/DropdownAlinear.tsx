import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownAlinear = ({ value, onChange }: Props) => {
  const alinearOptions = [
    { label: 'Hacia arriba', value: 'align-items-start' },
    { label: 'En el centro', value: 'align-items-center' },
    { label: 'Hacia abajo', value: 'align-items-end' },
  ]

  return (
    <div className="flex justify-content-between align-items-center">
      <div>
        <label htmlFor="alinear" className="text-lg">
          Alineación:{' '}
        </label>
      </div>
      <Dropdown
        inputId="alinear"
        value={value}
        options={alinearOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Alinear"
        itemTemplate={(option) => <div>{option.label}</div>}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownAlinear
