import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode, FaFilm, FaShieldAlt, FaImage } from "react-icons/fa"
import { useLang } from "../../context/LanguageContext"

function Services() {
  const { t } = useLang()

  return (
    <div className="services reveal" id="serv">
      <div className="title">
        <h2>{t.servicesTitle}</h2>
      </div>
      <div className="services-container">
        <div className="service-card reveal" style={{ transitionDelay: "0s" }}>
          <FaCode className="service-icon"/>
          <h3>{t.serv1title}</h3>
          <p>{t.serv1desc}</p>
        </div>
        <div className="service-card reveal" style={{ transitionDelay: "0.1s" }}>
          <FaPalette className="service-icon"/>
          <h3>{t.serv2title}</h3>
          <p>{t.serv2desc}</p>
        </div>
        <div className="service-card reveal" style={{ transitionDelay: "0.2s" }}>
          <FaLaptopCode className="service-icon"/>
          <h3>{t.serv3title}</h3>
          <p>{t.serv3desc}</p>
        </div>
        <div className="service-card reveal" style={{ transitionDelay: "0.3s" }}>
          <FaFilm className="service-icon"/>
          <h3>{t.serv4title}</h3>
          <p>{t.serv4desc}</p>
        </div>
        <div className="service-card reveal" style={{ transitionDelay: "0.4s" }}>
          <FaImage className="service-icon"/>
          <h3>{t.serv5title}</h3>
          <p>{t.serv5desc}</p>
        </div>
        <div className="service-card reveal" style={{ transitionDelay: "0.5s" }}>
          <FaShieldAlt className="service-icon"/>
          <h3>{t.serv6title}</h3>
          <p>{t.serv6desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Services