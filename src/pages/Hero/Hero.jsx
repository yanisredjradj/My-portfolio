import { useEffect, useRef, useState } from "react"
import "./Hero.css"
import { useLang } from "../../context/LanguageContext"

const rolesByLang = {
  en: ["Frontend Developer", "UI Designer", "Cybersecurity Enthusiast", "Problem Solver"],
  ar: ["مطور واجهات", "مصمم UI", "متحمس للأمن السيبراني", "حلال مشاكل"],
  fr: ["Développeur Frontend", "Designer UI", "Passionné Cybersécurité", "Résolveur de problèmes"],
}

function Counter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = target / (1500 / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}+</span>
}

export default function Hero() {
  const typeRef = useRef(null)
  const { t, lang } = useLang()

  useEffect(() => {
    const roles = rolesByLang[lang] || rolesByLang.en
    let roleIndex = 0
    let charIndex = 0
    let deleting = false
    let timeout

    function type() {
      if (!typeRef.current) return
      const current = roles[roleIndex]
      if (!deleting) {
        charIndex++
        typeRef.current.textContent = current.slice(0, charIndex)
        if (charIndex === current.length) {
          deleting = true
          timeout = setTimeout(type, 1800)
          return
        }
      } else {
        charIndex--
        typeRef.current.textContent = current.slice(0, charIndex)
        if (charIndex === 0) {
          deleting = false
          roleIndex = (roleIndex + 1) % roles.length
        }
      }
      timeout = setTimeout(type, deleting ? 55 : 95)
    }

    timeout = setTimeout(type, 1000)
    return () => clearTimeout(timeout)
  }, [lang])

  return (
    <div className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="hero-blob1"></div>
      <div className="hero-blob2"></div>
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-tag">{t.heroTag}</span>
          <h1>Yanis<br /><span>Redjradj</span></h1>
          <p className="hero-typewriter">
            <span ref={typeRef}></span>
            <span className="cursor"></span>
          </p>
          <div className="hero-divider"></div>
          <p className="hero-desc">{t.heroDesc}</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num"><Counter target={3} /></span>
              <span className="stat-label">{t.projects}</span>
            </div>
            <div className="stat">
              <span className="stat-num"><Counter target={2} /></span>
              <span className="stat-label">{t.yearsLearning}</span>
            </div>
            <div className="stat">
              <span className="stat-num"><Counter target={6} /></span>
              <span className="stat-label">{t.technologies}</span>
            </div>
          </div>
          <div className="hero-btns">
            <a href="#contact">{t.contactMe}</a>
            <a href="#about">{t.whoAmI}</a>
            <a href="/cv.pdf" download className="btn-cv">{t.downloadCV}</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="hero.png" alt="Yanis Redjradj" className="hero-img" />
        </div>
      </div>
      <div className="scroll-indicator">
        <span>{t.scroll}</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  )
}