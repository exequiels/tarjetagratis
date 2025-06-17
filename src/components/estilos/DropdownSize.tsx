import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownSize = ({ value, onChange }: Props) => {
  const sizeOptions = [
    { label: 'Pequeña', value: 'text-sm' },
    { label: 'Normal', value: 'text-base' },
    { label: 'Grande', value: 'text-2xl' },
    { label: 'Muy Grande', value: 'text-4xl' },
    { label: 'Enorme', value: 'text-6xl' },
    { label: 'Max', value: 'text-8xl' },
  ]

  return (
    <div className="flex justify-content-between align-items-center mt-2 p-3 bg-verde border-round-lg">
      <div>
        <label htmlFor="size" className="text-lg">
          Tamaño:{' '}
        </label>
      </div>
      <Dropdown
        inputId="size"
        value={value}
        options={sizeOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Tamaño"
        itemTemplate={(option) => <div>{option.label}</div>}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownSize
