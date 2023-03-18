import { Routes, Route } from "react-router-dom"
import SignIn, { SignUp } from "./components/Authentication"
import AboutUs from "./pages/aboutUs/AboutUs"
import ContactUs from "./pages/contactUs/ContactUs"
import OurSolution from "./pages/ourSolution/OurSolution"
import Resources from "./pages/resources/Resources"
import ErrorPage from "./pages/ErrorPage"


const App = () => {
  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<OurSolution />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="*" element={<ErrorPage />} />
    
    </Routes>
  );
};
export default App;
