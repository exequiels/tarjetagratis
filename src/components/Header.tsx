// import DropdownIdioma from './estilos/DropdownIdioma'

const Header = () => {
  return (
    <>
      <div className="col-12">
        <div className="border-1 border-round-lg p-3">
          <div className="mb-2 md:mb-0 flex justify-content-between flex flex-wrap">
            <div>
              <a href="/" className="underline">
                tarjetagratis.com
              </a>
            </div>
            {/* <DropdownIdioma /> */}
            <div className="flex gap-3 mt-3">
              {/* <a href="/tutorial-como-crear-tarjeta" className="underline">
                Tutorial
              </a> */}
              <a href="/faq" className="underline">
                FAQs
              </a>
              <a href="/about" className="underline">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
