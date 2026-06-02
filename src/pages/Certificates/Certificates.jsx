import "./Certificates.css"
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa"
import { useLang } from "../../context/LanguageContext"

export default function Certificates() {
  const { t } = useLang()

  const certificates = [
    {
      title: t.cert1title,
      issuer: t.cert1issuer,
      date: "2024",
      image: null,
      url: "https://freecodecamp.org"
    },
    {
      title: t.cert2title,
      issuer: t.cert2issuer,
      date: "2024",
      image: null,
      url: "https://cisco.com"
    },
    {
      title: t.cert3title,
      issuer: t.cert3issuer,
      date: "2025",
      image: null,
      url: "https://udemy.com"
    },
  ]

  return (
    <section className="certificates reveal" id="certificates">
      <div className="title">
        <h2>{t.certificatesTitle}</h2>
      </div>
      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <div className="cert-card reveal" key={i}>
            <div className="cert-img">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} />
              ) : (
                <div className="cert-placeholder">
                  <FaCertificate />
                  <span>{t.noCert}</span>
                </div>
              )}
              {cert.image ? (
                <a href={cert.image} target="_blank" rel="noreferrer" className="cert-overlay">
                  <FaExternalLinkAlt /> View
                </a>
              ) : (
                <div className="cert-overlay-disabled" />
              )}
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}