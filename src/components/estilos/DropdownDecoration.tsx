import { useState, useEffect } from 'react'
import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const decorationTypes = [
  { label: 'Normal', value: '' },
  { label: 'Sombra', value: 'sombra' },
  { label: 'Sombra Difusa', value: 'sombraDifusa' },
  { label: 'Contorno', value: 'contorno' },
  { label: 'Resaltado', value: 'resaltado' },
]

const colorBases = [
  { label: 'Rojo', value: 'red' },
  { label: 'Azul', value: 'blue' },
  { label: 'Verde', value: 'green' },
  { label: 'Amarillo', value: 'yellow' },
  { label: 'Negro', value: 'black' },
  { label: 'Blanco', value: 'white' },
]

const DropdownDecoration = ({ value, onChange }: Props) => {
  const [type, setType] = useState(() => value?.split('-')[1] || '')
  const [color, setColor] = useState(() => value?.split('-')[2] || 'black')

  useEffect(() => {
    const newValue = type ? `decoration-${type}-${color}` : ''
    if (newValue !== value) {
      onChange(newValue)
    }
  }, [type, color, value, onChange])

  useEffect(() => {
    const parts = value?.split('-') || []
    setType(parts[1] || '')
    setColor(parts[2] || 'black')
  }, [value])

  return (
    <div className="flex flex-column gap-2 mt-2 p-3 bg-verde border-round-lg">
      <label className="text-lg">Decoración:</label>
      <Dropdown
        value={type}
        options={decorationTypes.map((d) => ({
          label: d.label,
          value: d.value,
        }))}
        onChange={(e) => setType(e.value)}
        placeholder="Tipo"
      />
      {type && (
        <Dropdown
          value={color}
          options={colorBases}
          onChange={(e) => setColor(e.value)}
          placeholder="Color"
        />
      )}
    </div>
  )
}

export default DropdownDecoration
