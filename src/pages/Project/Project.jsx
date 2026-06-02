import "./Project.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLang } from "../../context/LanguageContext";

export default function Project() {
  const { t } = useLang();

  const projects = [
    {
      title: t.p1title,
      url: "https://yanis-rj-links-test.vercel.app/",
      desc: t.p1desc,
      skills: ["React", "Vite", "CSS", "Vercel"]
    },
    {
      title: t.p2title,
      image: "",
      url: "https://google-secure-auth.onrender.com/",
      desc: t.p2desc,
      skills: ["Python", "Flask", "JavaScript", "Render"]
    },
    {
      title: t.p3title,
      image: "/yanisfit.png",
      url: "https://yanis-fit.vercel.app/",
      desc: t.p3desc,
      skills: ["React", "Vite", "CSS", "Vercel"]
    },
    {
      title: t.p4title,
      image: "",
      url: "https://eid-adha-livid.vercel.app/",
      desc: t.p4desc,
      skills: ["React", "Vite", "CSS", "Vercel"]
    },
  ];

  return (
    <section className="project reveal" id="project">
      <div className="title">
        <h2>{t.projectTitle}</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card reveal"
            key={index}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="project-preview">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <iframe
                  src={project.url}
                  title={project.title}
                  loading="lazy"
                  scrolling="no"
                  sandbox="allow-scripts allow-same-origin"
                />
              )}
              <a href={project.url} target="_blank" rel="noreferrer" className="preview-overlay">
                <FaExternalLinkAlt /> Open
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="proj-skills">
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
            <div className="btns">
              <a href={project.url} target="_blank" rel="noreferrer" className="btn">
                <FaExternalLinkAlt /> {t.liveDemo}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}