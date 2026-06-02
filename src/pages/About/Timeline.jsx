import "./Timeline.css"
import { useLang } from "../../context/LanguageContext"

function Timeline() {
  const { t } = useLang()

  const experiences = [
    { year: t.t1year, title: t.t1title, desc: t.t1desc, icon: "🚀" },
    { year: t.t2year, title: t.t2title, desc: t.t2desc, icon: "⚛️" },
    { year: t.t3year, title: t.t3title, desc: t.t3desc, icon: "🔒" },
    { year: t.t4year, title: t.t4title, desc: t.t4desc, icon: "💼" },
  ]

  return (
    <div className="timeline">
      <h3>{t.myJourney}</h3>
      <div className="timeline-list">
        {experiences.map((exp, i) => (
          <div className="timeline-item reveal" key={i}>
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h4>{exp.title}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline