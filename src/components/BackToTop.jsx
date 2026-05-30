import { useEffect, useState } from "react"
import "./BackToTop.css"

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollTop}
      title="Back to Top"
    >
      ↑
    </button>
  )
}

export default BackToTop