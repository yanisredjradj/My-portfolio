import Header from "./components/Header"
import Hero from "./pages/Hero/Hero"
import About from "./pages/About/About"
import Project from "./pages/Project/Project"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import useScrollReveal from "./useScrollReveal"
import CustomCursor from "./components/CustomCursor"
import Loader from "./components/Loader"
import MusicPlayer from "./components/MusicPlayer"

function App() {
  useScrollReveal()
  return (
    <>
      <Loader />
      <CustomCursor />
      <MusicPlayer />
      <Header />
      <Hero />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App