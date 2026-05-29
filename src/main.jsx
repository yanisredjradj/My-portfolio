import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const savedTheme = localStorage.getItem("theme")
if (savedTheme === "light") {
  document.body.classList.add("light")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)