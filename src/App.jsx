import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Languages from "./components/Languages/Languages";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Studies from "./components/Studies/Studies";
import "./scss/styles.scss";

function App() {
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
