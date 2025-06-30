import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { PrimeReactProvider } from 'primereact/api'
import CardLayout from './components/CardLayout'
import Header from './components/Header'
import Footer from './components/Footer'
import 'animate.css'

function App() {
  const value = {
    ripple: true,
  }
  return (
    <>
      <PrimeReactProvider value={value}>
        <Header />
        <CardLayout />
        <Footer />
      </PrimeReactProvider>
    </>
  )
}

export default App
