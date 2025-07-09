import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { fontOptions } from '../../utils/OpcionesFuentes'

const DropdownFuente = ({ value, onChange }: Props) => {
  return (
    <div>
      <label htmlFor="fuente">Fuente: </label>

      <Dropdown
        inputId="fuente"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder="Que buscas?"
        emptyFilterMessage="No hay resultados para esa busqueda"
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
