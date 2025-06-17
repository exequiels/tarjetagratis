import { Button } from 'primereact/button'

const Intro = () => {
  return (
    <div className="col-12">
      <div className="border-round-lg border-1">
        <div className="">
          <h1 className="text-5xl">Neo</h1>
        </div>

        <div className="">
          <h2>¡Te invito a mi cumple!</h2>
        </div>

        <div className="flex flex-column">
          <div className="flex-1">
            <h2>Salon: Brisas 123 Norte</h2>
          </div>
          <div className="flex-1">
            <Button
              label="Ver Ubicacion"
              icon="pi pi-external-link"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
