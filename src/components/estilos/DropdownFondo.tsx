import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { fondos } from '../../utils/FondosArmador'
import { useTranslation } from 'react-i18next'

const DropdownFondo = ({ value, onChange }: Props) => {
  const { t } = useTranslation(['dropdown', 'fondos'])

  return (
    <div>
      <div>
        <label htmlFor="fondo">{t('dropdown:fondo.label')}</label>
      </div>
      <Dropdown
        id="fondo"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder={t('dropdown:fondo.buscar_placeholder')}
        emptyFilterMessage={t('dropdown:fondo.mensaje_vacio')}
        value={value}
        options={fondos}
        className="w-full mt-2"
        onChange={(e) => onChange(e.value)}
        optionLabel="key"
        itemTemplate={(option) => (
          <div className="flex align-items-center gap-2">
            <img
              src={option.thumbnail}
              alt={t(`fondos:${option.key}`)}
              style={{ width: '2rem', height: '3rem' }}
            />
            <span>{t(`fondos:${option.key}`)}</span>
          </div>
        )}
        valueTemplate={(option) =>
          option ? (
            <div className="flex align-items-center gap-2">
              <span>{t(`fondos:${option.key}`)}</span>
            </div>
          ) : null
        }
      />
    </div>
  )
}

export default DropdownFondo
