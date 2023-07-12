import React, {useEffect} from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Languages from "./components/Languages/Languages";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Studies from "./components/Studies/Studies";
import "./scss/styles.scss";

function App() {
  useEffect(() => {
    const mobile = document.getElementById('mobile');
    
    setTimeout(() => {
      mobile.style.opacity = 1;
      
    }, 510);
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Languages />
      <Projects />
      <Studies />
      <Footer />
    </>
  );
}

export default App;
