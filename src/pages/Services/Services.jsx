import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode, FaFilm, FaShieldAlt, FaImage } from "react-icons/fa";
 
function Services(){
 
  return(
    <div className="services" id="serv">
 
      <div className="title">
        <h2>Services</h2>
      </div>
 
      <div className="services-container">
 
        <div className="service-card">
          <FaCode className="service-icon"/>
          <h3>Frontend Development</h3>
          <p>I build modern and interactive websites using React, HTML, CSS, JavaScript, Node.Js, Php, MySql and Next.js.</p>
        </div>
 
        <div className="service-card">
          <FaPalette className="service-icon"/>
          <h3>UI Design</h3>
          <p>Creating clean and modern user interfaces with focus on design and usability.</p>
        </div>
 
        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Web Applications</h3>
          <p>Building modern web applications with dynamic features and smooth performance.</p>
        </div>
 
        <div className="service-card">
          <FaFilm className="service-icon"/>
          <h3>Video Editing</h3>
          <p>Professional video editing with smooth cuts, transitions, effects, and color grading for any type of content.</p>
        </div>
 
        <div className="service-card">
          <FaImage className="service-icon"/>
          <h3>Photoshop</h3>
          <p>Photo retouching, manipulation, graphic design, and visual content creation using Adobe Photoshop.</p>
        </div>
 
        <div className="service-card">
          <FaShieldAlt className="service-icon"/>
          <h3>Cyber Security</h3>
          <p>Basic security auditing, vulnerability assessment, and protecting web applications from common threats.</p>
        </div>
 
      </div>
 
    </div>
  )
 
}
 
export default Services;
 