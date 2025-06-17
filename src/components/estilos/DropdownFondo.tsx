import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { fondos } from '../../utils/FondosArmador'

const DropdownFondo = ({ value, onChange }: Props) => {
  return (
    <div>
      <div>
        <label htmlFor="fondo">Imagen de Fondo</label>
      </div>
      <Dropdown
        id="fondo"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder="Que buscas?"
        emptyFilterMessage="No hay resultados para esa busqueda"
        value={value}
        options={fondos}
        className="w-full"
        onChange={(e) => onChange(e.value)}
      />
    </div>
  )
}

export default DropdownFondo
