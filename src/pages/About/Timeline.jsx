import "./Timeline.css"

const experiences = [
  {
    year: "2023",
    title: "Started Learning Programming",
    desc: "Started with HTML, CSS and JavaScript — built my first websites.",
    icon: "🚀"
  },
  {
    year: "2024",
    title: "Learned React & Backend",
    desc: "Dived into React, Node.js, Python and databases.",
    icon: "⚛️"
  },
  {
    year: "2025",
    title: "Cybersecurity Interest",
    desc: "Started learning cybersecurity, ethical hacking and web security.",
    icon: "🔒"
  },
  {
    year: "2026",
    title: "Portfolio & Real Projects",
    desc: "Built real projects and this portfolio to showcase my skills.",
    icon: "💼"
  },
]

function Timeline() {
  return (
    <div className="timeline">
      <h3>My Journey</h3>
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