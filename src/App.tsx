import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { PrimeReactProvider } from 'primereact/api'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './routes/Rutas'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const value = {
    ripple: true,
  }
  return (
    <>
      <PrimeReactProvider value={value}>
        <HelmetProvider>
          <BrowserRouter>
            <Rutas />
          </BrowserRouter>
        </HelmetProvider>
      </PrimeReactProvider>
    </>
  )
}

export default App
