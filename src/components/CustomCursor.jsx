import { useEffect, useState, useRef } from "react"
import "./CustomCursor.css"

function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(
    () => localStorage.getItem("cursor") !== "off"
  )
  const [clicking, setClicking] = useState(false)

  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const animFrame = useRef(null)

  useEffect(() => {
    const move = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px"
        dotRef.current.style.top = e.clientY + "px"
      }
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px"
        ringRef.current.style.top = ringPos.current.y + "px"
      }
      animFrame.current = requestAnimationFrame(animate)
    }

    const down = () => setClicking(true)
    const up = () => setClicking(false)

    if (enabled) {
      window.addEventListener("mousemove", move)
      window.addEventListener("mousedown", down)
      window.addEventListener("mouseup", up)
      animFrame.current = requestAnimationFrame(animate)
      document.body.style.cursor = "none"
    } else {
      document.body.style.cursor = "auto"
    }

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
      cancelAnimationFrame(animFrame.current)
    }
  }, [enabled])

  useEffect(() => {
    localStorage.setItem("cursor", enabled ? "on" : "off")
    document.body.style.cursor = enabled ? "none" : "auto"
    if (!enabled) {
      document.querySelectorAll("*").forEach(el => {
        el.style.cursor = ""
      })
    }
  }, [enabled])

  return (
    <>
      <button
        className={`cursor-toggle ${enabled ? "on" : "off"}`}
        onClick={() => setEnabled(!enabled)}
        title={enabled ? "Disable Cursor" : "Enable Cursor"}
        style={{ cursor: "pointer" }}
      >
        <span className="toggle-knob" />
      </button>

      {enabled && (
        <>
          <div ref={ringRef} className={`cursor-ring ${clicking ? "clicking" : ""}`} />
          <div ref={dotRef} className="cursor-dot" />
        </>
      )}
    </>
  )
}

export default CustomCursor