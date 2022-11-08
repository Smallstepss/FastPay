import { BrowserRouter, Routes, Route } from "react-router-dom"


import Authentication from "./components/Authentication"
import AboutUs from "./pages/aboutUs/AboutUs"
import ContactUs from "./pages/contactUs/ContactUs"
import OurSolution from "./pages/ourSolution/OurSolution"
import Resources from "./pages/resources/Resources"
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      {/* <Authentication /> */}
      <OurSolution />
      <AboutUs />
      <ContactUs />
      <Resources/>
      </BrowserRouter>
      
      
  )
}


export default App