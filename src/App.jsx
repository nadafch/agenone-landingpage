import * as COMPONENTS from './components'
import * as ICON from "./configs/icon"
import Hero from './pages/Hero'
import Services from './pages/Services'
import Achievement from './pages/Achievement'
import OurWorks from './pages/OurWorks'

function App() {
  return (
    <>
      <COMPONENTS.Navbar />
      <Hero />
      <Services />
      <Achievement />
      <OurWorks />
    </>
  )
}

export default App
