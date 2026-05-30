import { useEffect, useState, useRef } from "react"
import "./VisitorCounter.css"

function VisitorCounter() {
  const [count, setCount] = useState(null)
  const [visible, setVisible] = useState(false)
  const fetched = useRef(false)

  useEffect(() => {
    if (fetched.current) return
    fetched.current = true

    const visited = sessionStorage.getItem("visited")

    if (!visited) {
      sessionStorage.setItem("visited", "true")
      fetch("https://api.counterapi.dev/v1/yanisrj-portfolio/visits/up")
        .then(res => res.json())
        .then(data => setCount(data.count))
        .catch(() => {})
    } else {
      fetch("https://api.counterapi.dev/v1/yanisrj-portfolio/visits")
        .then(res => res.json())
        .then(data => setCount(data.count))
        .catch(() => {})
    }
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      // Ctrl+Shift+V — يظهر/يخفي العداد
      if (e.ctrlKey && e.shiftKey && e.key === "V") {
        setVisible(prev => !prev)
      }

      // Ctrl+Shift+R — يعيد العداد لـ 0
      if (e.ctrlKey && e.shiftKey && e.key === "R") {
        e.preventDefault()
        fetch("https://api.counterapi.dev/v1/yanisrj-portfolio/visits/set?value=0")
          .then(res => res.json())
          .then(data => {
            setCount(0)
            sessionStorage.removeItem("visited")
            alert("✅ Visitor count reset to 0!")
          })
          .catch(() => alert("❌ Failed to reset!"))
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  if (!visible || count === null) return null

  return (
    <div className="visitor-counter">
      <span>👁️ {count.toLocaleString()} visits</span>
    </div>
  )
}

export default VisitorCounter