import { useEffect } from "react"
import "./Toast.css"

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`toast toast-${type}`}>
      <span>{type === "success" ? "✅" : "❌"}</span>
      <p>{message}</p>
    </div>
  )
}

export default Toast