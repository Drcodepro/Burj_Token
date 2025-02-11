
import './App.css'
import { AboutFeture } from './Component/AboutSection'
import { FeatureSection } from './Component/FeatureSection'
import Footer from './Component/Footer'
import { LandingPage } from './Component/LandingPage'
import { NavBar } from './Component/NavBar'
import RoadMap from './Component/RoadMap'

function App() {

  return (
    <>
    <NavBar/>
    <LandingPage/>
    <AboutFeture/>
    <FeatureSection/>
    <RoadMap/>
    <Footer/>
    </>
  )
}

export default App
