import { Dropdown } from 'primereact/dropdown'
import type { CardFormData } from '../../types/CardFormData'
import { plantillas } from '../../utils/Plantillas'

type Props = {
  value: CardFormData | null
  onChange: (plantilla: CardFormData) => void
}

const DropdownPlantillas = ({ onChange, value }: Props) => {
  return (
    <div>
      <label htmlFor="plantillas">Plantillas:</label>
      <Dropdown
        inputId="plantillas"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder="Que buscas?"
        emptyFilterMessage="No hay resultados para esa busqueda"
        value={value}
        options={plantillas}
        onChange={(e) => onChange(e.value)}
        placeholder="Elegí una plantilla"
        optionLabel="label"
        className="w-full mt-2"
      />
    </div>
  )
}

export default DropdownPlantillas
