import "./App.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Layout/Footer";
import BackOnTop from "./components/BackOnTop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <GetInTouch />
      <Footer />
      <BackOnTop />
    </>
  );
}

export default App;
