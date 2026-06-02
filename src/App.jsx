import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "./context/LanguageContext"

import Header from "./components/Header"
import Hero from "./pages/Hero/Hero"
import About from "./pages/About/About"
import Project from "./pages/Project/Project"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import NotFound from "./pages/NotFound"
import Certificates from "./pages/Certificates/Certificates"

import CustomCursor from "./components/CustomCursor"
import MusicPlayer from "./components/MusicPlayer"
import BackToTop from "./components/BackToTop"
import Loader from "./components/Loader"
import VisitorCounter from "./components/VisitorCounter"

import useScrollReveal from "./useScrollReveal"

function AppContent() {
  useScrollReveal()

  useEffect(() => {
    const keys = []
    const secret = "yanis"
    const handleKey = (e) => {
      keys.push(e.key.toLowerCase())
      if (keys.length > secret.length) keys.shift()
      if (keys.join("") === secret) {
        document.body.style.animation = "rainbowBg 2s ease"
        setTimeout(() => {
          document.body.style.animation = ""
          alert("🎉 You found the Easter Egg! Welcome to my portfolio!")
        }, 500)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <BrowserRouter>
      <Loader />
      <CustomCursor />
      <MusicPlayer />
      <BackToTop />
      <VisitorCounter />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <About />
            <Project />
            <Certificates />
            <Services />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App