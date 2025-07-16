import { useState, useEffect } from 'react'
import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { useTranslation } from 'react-i18next'

const DropdownColor = ({ value, onChange }: Props) => {
  const { t } = useTranslation('dropdown')
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

  const colorList = [
    'gray',
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'yellow',
    'orange',
  ]

  const colorOptions = colorList.map((color) => ({
    label: t(`colores.${color}`),
    value: color,
  }))

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
    <div className="gap-2 p-3 bg-verde border-round-lg">
      <div className="">
        <label className="text-lg">{t('color_label')}</label>
        <Dropdown
          value={colorBase}
          options={colorOptions}
          onChange={(e) => setColorBase(e.value)}
          placeholder={t('color_placeholder')}
        />

        <div className="mt-2">
          <label className="text-lg">{t('tono_label')}</label>
          <Dropdown
            value={tone}
            options={tones.map((t) => ({ label: t, value: t }))}
            onChange={(e) => setTone(e.value)}
            placeholder={t('tono_placeholder')}
            itemTemplate={(option) => (
              <div
                style={{
                  backgroundColor: `var(--${colorBase}-${option.value})`,
                  color: [
                    'yellow',
                    'yellow-300',
                    'yellow-400',
                    'yellow-500',
                  ].includes(`${colorBase}-${option.value}`)
                    ? '#333'
                    : '#fff',
                  padding: '2px 6px',
                  borderRadius: '6px',
                }}
              >
                {option.label}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default DropdownColor
