import './App.css'
import Footer from './componentes/sections/Footer'
import Navbar from './componentes/sections/Navbar'
import Presentation from './componentes/sections/Presentation'
import Technology from './componentes/sections/Technology'
import Projects from './componentes/sections/Projects'
import AboutMe from './componentes/sections/AboutMe'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Presentation/>
        <Technology/>
        <Projects/>
        <AboutMe/>
        <Footer/>
      </div>
    </>
  )
}

export default App
