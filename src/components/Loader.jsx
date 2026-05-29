import { useEffect, useState } from "react"
import "./Loader.css"

function Loader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1500)
    const timer2 = setTimeout(() => setVisible(false), 2000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`loader ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-content">
        <h1><span>y</span>anis</h1>
        <div className="loader-bar">
          <div className="loader-progress" />
        </div>
      </div>
    </div>
  )
}

export default Loader