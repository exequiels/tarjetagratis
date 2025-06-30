import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

type DropdownSizeProps = Props & {
  fieldId: string
}

const DropdownSize = ({ value, onChange, fieldId }: DropdownSizeProps) => {
  const baseOptions = [
    { label: 'Compacto', value: 'text-xl' },
    { label: 'Normal', value: 'text-2xl' },
    { label: 'Grande', value: 'text-4xl' },
    { label: 'Gigante', value: 'text-6xl' },
  ]

  const extraOption = [
    { label: 'Bestial', value: 'text-7xl' },
    { label: 'Demencial', value: 'text-8xl' },
    { label: 'Colosal', value: 'text-10xl' },
    { label: 'Épico', value: 'text-12xl' },
  ]

  const legendariaOption = [{ label: 'Legendaria', value: 'text-18xl' }]

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
