import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownFuente = ({ value, onChange }: Props) => {
  const fontOptions = [
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Times New Roman', value: '"Times New Roman", serif' },
    { label: 'Garamond', value: 'Garamond, serif' },
    { label: 'Courier New', value: '"Courier New", monospace' },
    { label: 'Lucida Console', value: '"Lucida Console", monospace' },
    { label: 'Tahoma', value: 'Tahoma, sans-serif' },
    { label: 'Trebuchet MS', value: '"Trebuchet MS", sans-serif' },
    { label: 'Brush Script MT', value: '"Brush Script MT", cursive' },
    { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
    { label: 'Palatino Linotype', value: '"Palatino Linotype", serif' },
    { label: 'Impact', value: 'Impact, sans-serif' },
    { label: 'Segoe UI', value: '"Segoe UI", sans-serif' },
  ]

  return (
    <div>
      <div>
        <label htmlFor="fuente" className="text-lg">
          Fuente:{' '}
        </label>
      </div>
      <Dropdown
        inputId="fuente"
        value={value}
        options={fontOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Selecciona una fuente"
        itemTemplate={(option) => (
          <div style={{ fontFamily: option.value }}>{option.label}</div>
        )}
        className="w-full mt-2"
      />
    </div>
  )
}

export default DropdownFuente
