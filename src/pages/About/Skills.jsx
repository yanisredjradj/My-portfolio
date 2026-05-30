import "./Skills.css"
import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "HTML", percent: 90, icon: "🌐" },
  { name: "CSS", percent: 85, icon: "🎨" },
  { name: "JavaScript", percent: 75, icon: "⚡" },
  { name: "React", percent: 70, icon: "⚛️" },
  { name: "Python", percent: 65, icon: "🐍" },
  { name: "PHP", percent: 60, icon: "🐘" },
  { name: "MySQL", percent: 60, icon: "🗄️" },
  { name: "Git", percent: 75, icon: "📦" },
  { name: "Figma", percent: 65, icon: "🎭" },
  { name: "Cybersecurity", percent: 55, icon: "🔒" },
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
        <span className="skill-name">{icon} {name}</span>
        <span className="skill-percent">{width}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className="skills">
      <h3>My Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillBar key={i} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills