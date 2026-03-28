import "./Project.css";
import { FaExternalLinkAlt } from "react-icons/fa";
 
const projects = [
  {
    title: "My Social Media",
    url: "https://yanis-rj-links-test.vercel.app/",
    desc: "A centralized hub for all my social media profiles — everything in one place. Password required to access: 18052009",
    skills: ["React", "Vite", "CSS", "Vercel"]
  }
];
 
export default function Project() {
 
  return (
 
    <section className="project reveal" id="project">
 
      <div className="title">
        <h2>Project</h2>
      </div>
 
      <div className="projects-container projects-center">
 
        {projects.map((project, index) => (
 
          <div className="project-card" key={index}>
 
            <div className="project-preview">
              <iframe
                src={project.url}
                title={project.title}
                loading="lazy"
                scrolling="no"
                sandbox="allow-scripts allow-same-origin"
              />
              <a href={project.url} target="_blank" rel="noreferrer" className="preview-overlay">
                <FaExternalLinkAlt /> Open
              </a>
            </div>
 
            <h3>{project.title}</h3>
 
            <p>{project.desc}</p>
 
            <div className="skills">
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
 
            <div className="btns">
              <a href={project.url} target="_blank" rel="noreferrer" className="btn">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
 
          </div>
 
        ))}
 
      </div>
    </section>
 
  );
 
}
 