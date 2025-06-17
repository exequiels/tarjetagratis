import { useState, useEffect } from 'react'
import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownColor = ({ value, onChange }: Props) => {
  const [colorBase, setColorBase] = useState(() => {
    const parts = value?.split('-') || []
    return parts[1] || 'red'
  })

  const [tone, setTone] = useState(() => {
    const parts = value?.split('-') || []
    return parts[2] || '300'
  })

  useEffect(() => {
    const newValue = `text-${colorBase}-${tone}`
    if (newValue !== value) {
      onChange(newValue)
    }
  }, [colorBase, tone, value, onChange])

  useEffect(() => {
    const parts = value?.split('-') || []
    setColorBase(parts[1] || 'red')
    setTone(parts[2] || '300')
  }, [value])

  const colorOptions = [
    { label: 'Gris', value: 'gray' },
    { label: 'Rojo', value: 'red' },
    { label: 'Rosa', value: 'pink' },
    { label: 'Púrpura', value: 'purple' },
    { label: 'Índigo', value: 'indigo' },
    { label: 'Azul', value: 'blue' },
    { label: 'Cian', value: 'cyan' },
    { label: 'Verde azulado', value: 'teal' },
    { label: 'Verde', value: 'green' },
    { label: 'Amarillo', value: 'yellow' },
    { label: 'Naranja', value: 'orange' },
  ]

  const tones = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]

  return (
    <div className="gap-2 mt-2 p-3 bg-verde border-round-lg">
      <div className="">
        <label className="text-lg">Color: </label>
        <Dropdown
          value={colorBase}
          options={colorOptions}
          onChange={(e) => setColorBase(e.value)}
          placeholder="Color"
        />

        <div className="mt-2">
          <label className="text-lg">Tono: </label>
          <Dropdown
            value={tone}
            options={tones.map((t) => ({ label: t, value: t }))}
            onChange={(e) => setTone(e.value)}
            placeholder="Tono"
          />
        </div>
      </div>
    </div>
  )
}

export default DropdownColor
