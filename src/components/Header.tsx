// import DropdownIdioma from './estilos/DropdownIdioma'

const Header = () => {
  return (
    <>
      <div className="col-12">
        <div className="border-1 border-round-lg p-3">
          <div className="mb-2 md:mb-0 flex justify-content-between">
            <a href="/" className="underline">
              tarjetagratis.com
            </a>
            {/* <DropdownIdioma /> */}
            <a href="/about" className="underline">
              About
            </a>
          </div>
        </div>
        <div className="flex justify-content-end"></div>
      </div>
    </>
  )
}

export default Header
