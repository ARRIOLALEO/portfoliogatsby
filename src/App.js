import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Stack from "./components/stack";
import Prices from "./components/packages";
import ContactUs from "./components/contactus";
import Testimonials from "./components/testimonials";
import SeoTexst from "./components/seotext";
import Projects from "./components/projects";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Prices />
      <Testimonials />
      <SeoTexst />
      <Stack />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
