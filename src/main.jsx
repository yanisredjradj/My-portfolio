import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const savedTheme = localStorage.getItem("theme")
if (savedTheme === "light") {
  document.body.classList.add("light")
}

const savedLang = localStorage.getItem("lang")
if (savedLang === "ar") {
  document.dir = "rtl"
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)