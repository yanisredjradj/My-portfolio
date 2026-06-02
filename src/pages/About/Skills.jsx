import "./Skills.css"
import { useEffect, useRef, useState } from "react"
import { useLang } from "../../context/LanguageContext"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaNodeJs, FaPython } from "react-icons/fa"
import { SiMysql, SiPhp } from "react-icons/si"

const skills = [
  { name: "HTML",       percent: 90, icon: <FaHtml5   color="#E34F26" /> },
  { name: "CSS",        percent: 85, icon: <FaCss3Alt  color="#1572B6" /> },
  { name: "JavaScript", percent: 75, icon: <FaJs       color="#F7DF1E" /> },
  { name: "React",      percent: 70, icon: <FaReact    color="#61DAFB" /> },
  { name: "Python",     percent: 65, icon: <FaPython   color="#3776AB" /> },
  { name: "PHP",        percent: 60, icon: <SiPhp      color="#777BB4" /> },
  { name: "MySQL",      percent: 60, icon: <SiMysql    color="#4479A1" /> },
  { name: "Git",        percent: 75, icon: <FaGitAlt   color="#F05032" /> },
  { name: "Figma",      percent: 65, icon: <FaFigma    color="#F24E1E" /> },
  { name: "Node.js",    percent: 60, icon: <FaNodeJs   color="#339933" /> },
]

function SkillBar({ name, percent, icon }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setTimeout(() => setWidth(percent), 200)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percent])

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar-header">
        <span className="skill-name">
          <span className="skill-icon">{icon}</span>
          {name}
        </span>
        <span className="skill-percent">{width}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

function Skills() {
  const { t } = useLang()
  return (
    <div className="skills">
      <h3>{t.mySkills}</h3>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillBar key={i} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills