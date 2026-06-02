import { useLang } from "../context/LanguageContext"
import "./LangToggle.css"

function LangToggle() {
  const { lang, switchLang } = useLang()

  return (
    <div className="lang-toggle-wrapper">
      <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => switchLang("en")}>EN</button>
      <button className={`lang-btn ${lang === "fr" ? "active" : ""}`} onClick={() => switchLang("fr")}>FR</button>
      <button className={`lang-btn ${lang === "ar" ? "active" : ""}`} onClick={() => switchLang("ar")}>عر</button>
    </div>
  )
}

export default LangToggle