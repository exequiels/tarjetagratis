import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'
import { animarOptions } from '../../utils/OpcionesAnimar'

type DropdownAnimarProps = Props & {
  fieldId: string
}

const DropdownAnimar = ({ fieldId, value, onChange }: DropdownAnimarProps) => {
  console.log('DropdownAnimar render:', fieldId, 'value:', value)

  return (
    <div className="flex justify-content-between align-items-center mt-2 p-3 bg-verde border-round-lg">
      <div>
        <label htmlFor="animar" className="text-lg">
          Animación:{' '}
        </label>
      </div>
      <Dropdown
        inputId="animar"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder="Que buscas?"
        emptyFilterMessage="No hay resultados para esa busqueda"
        value={value}
        options={animarOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Animar"
        itemTemplate={(option) => <div>{option.label}</div>}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownAnimar
