import { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  )

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsDark(!isDark)}
      title={isDark ? "Light Mode" : "Dark Mode"}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle