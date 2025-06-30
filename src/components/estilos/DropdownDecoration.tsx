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
  { label: 'Amarillo Suave', value: 'yellowsoft' },
  { label: 'Menta', value: 'mint' },
  { label: 'Rosa Pastel', value: 'pinkpastel' },
  { label: 'Celeste Suave', value: 'lightblue' },
  { label: 'Durazno', value: 'peach' },
  { label: 'Beige', value: 'beige' },
  { label: 'Amarillo Pastel', value: 'pastelyellow' },
  { label: 'Verde Claro', value: 'lightgreen' },
  { label: 'Naranja Pastel', value: 'peachorange' },
]

const colorMap: Record<string, string> = {
  red: 'red',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
  black: 'black',
  white: 'white',
  yellowsoft: '#FBD160',
  mint: '#A3D2CA',
  pinkpastel: '#FFC9DE',
  lightblue: '#B5EAEA',
  peach: '#FFDAC1',
  beige: '#E6E2D3',
  pastelyellow: '#FFE066',
  lightgreen: '#C1E1C1',
  peachorange: '#FFD6A5',
}

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
        options={decorationTypes}
        onChange={(e) => setType(e.value)}
        placeholder="Tipo"
      />
      {type && (
        <Dropdown
          value={color}
          options={colorBases}
          onChange={(e) => setColor(e.value)}
          placeholder="Color"
          itemTemplate={(option) => (
            <div
              style={{
                backgroundColor:
                  type === 'resaltado'
                    ? colorMap[option.value] || option.value
                    : 'transparent',
                color:
                  type === 'resaltado'
                    ? '#333'
                    : colorMap[option.value] || option.value,
                padding: '2px 6px',
                borderRadius: '6px',
              }}
            >
              {option.label}
            </div>
          )}
        />
      )}
    </div>
  )
}

export default DropdownDecoration
