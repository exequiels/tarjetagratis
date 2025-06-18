import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

type DropdownSizeProps = Props & {
  fieldId: string
}

const DropdownSize = ({ value, onChange, fieldId }: DropdownSizeProps) => {
  const baseOptions = [
    { label: 'Pequeña', value: 'text-xl' },
    { label: 'Normal', value: 'text-2xl' },
    { label: 'Grande', value: 'text-4xl' },
    { label: 'Enorme', value: 'text-6xl' },
  ]

  const extraOption = { label: 'Max', value: 'text-8xl' }

  const sizeOptions =
    fieldId === 'nombre' || fieldId === 'cuantos'
      ? [...baseOptions, extraOption]
      : baseOptions

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
