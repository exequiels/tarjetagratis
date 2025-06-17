import Falta from '../utils/Falta'

const Faltan = () => {
  return (
    <>
      <div className="col-12 centrado">
        <div className="border-1 border-round-lg w-full min-h-full p-5">
          <div className="block text-4xl font-bold">
            Te espero el dia 01/05/2026
          </div>
          <div className="block text-2xl font-bold">
            Falta cada vez menos...
          </div>
          <Falta />
        </div>
      </div>
    </>
  )
}

export default Faltan
