import { useState } from "react"
import "./About.css"
import Skills from "./Skills"
import Timeline from "./Timeline"
import { useLang } from "../../context/LanguageContext"

function About() {
  const [flip, setFlip] = useState(false)
  const { t } = useLang()

  return (
    <div className="about reveal" id="about">
      <div className="title">
        <h2>{t.aboutTitle}</h2>
      </div>
      <div className="content">
        <div className="photo-card reveal" onClick={() => setFlip(!flip)}>
          <div className={flip ? "photo-inner flip" : "photo-inner"}>
            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>
            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-about reveal">
          <p>{t.aboutText}</p>
        </div>
      </div>
      <Skills />
      <Timeline />
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
            fill="rgba(255,255,255,0.02)"
          />
        </svg>
      </div>
    </div>
  )
}

export default About