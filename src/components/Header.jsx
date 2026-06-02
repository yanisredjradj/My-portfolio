import "./Header.css"
import { useState, useEffect } from "react"
import { FaInstagram, FaDiscord, FaTiktok, FaSnapchatGhost, FaFacebook, FaWhatsapp, FaTelegram, FaGithub, FaSpotify, FaBars, FaTimes } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ThemeToggle from "./ThemeToggle"
import LangToggle from "./LangToggle"
import { useLang } from "../context/LanguageContext"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { t } = useLang()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ["hero", "about", "project", "certificates", "serv", "contact"]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={scrolled ? "header scroll" : "header"}>
      <div className="logo">
        <h1><span>y</span>anis</h1>
      </div>

      <ul className="links">
        <li><a href="#hero" className={activeSection === "hero" ? "active" : ""}>{t.home}</a></li>
        <li><a href="#about" className={activeSection === "about" ? "active" : ""}>{t.about}</a></li>
        <li><a href="#project" className={activeSection === "project" ? "active" : ""}>{t.project}</a></li>
        <li><a href="#certificates" className={activeSection === "certificates" ? "active" : ""}>{t.certificates}</a></li>
        <li><a href="#serv" className={activeSection === "serv" ? "active" : ""}>{t.services}</a></li>
        <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>{t.contact}</a></li>
      </ul>

      <ul className="icons">
        <li><a href="https://www.instagram.com/yanis_redjradj" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
        <li><a href="https://discord.com/users/yanis_rj" target="_blank" rel="noreferrer"><FaDiscord /></a></li>
        <li><a href="https://www.tiktok.com/@yanis.redjradj" target="_blank" rel="noreferrer"><FaTiktok /></a></li>
        <li><a href="https://www.snapchat.com/add/yanis.redjradj" target="_blank" rel="noreferrer"><FaSnapchatGhost /></a></li>
        <li><a href="https://www.facebook.com/share/18XRkSPbaR/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
        <li><a href="https://x.com/yanis_redjradj" target="_blank" rel="noreferrer"><FaXTwitter /></a></li>
        <li><a href="https://wa.me/213676938038" target="_blank" rel="noreferrer"><FaWhatsapp /></a></li>
        <li><a href="https://t.me/+213676938038" target="_blank" rel="noreferrer"><FaTelegram /></a></li>
        <li><a href="https://github.com/yanisredjradj" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="https://open.spotify.com/user/31vn3tquljxh3uavv3zqmqzkx3qm?si=35295d2b7b264633" target="_blank" rel="noreferrer"><FaSpotify /></a></li>
      </ul>

      <LangToggle />
      <ThemeToggle />

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#hero" className={activeSection === "hero" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t.home}</a>
        <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t.about}</a>
        <a href="#project" className={activeSection === "project" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t.project}</a>
        <a href="#certificates" className={activeSection === "certificates" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t.certificates}</a>
        <a href="#serv" className={activeSection === "serv" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t.services}</a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t.contact}</a>
        <div className="mobile-social">
          <a href="https://www.instagram.com/yanis_redjradj" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://discord.com/users/yanis_rj" target="_blank" rel="noreferrer"><FaDiscord /></a>
          <a href="https://www.tiktok.com/@yanis.redjradj" target="_blank" rel="noreferrer"><FaTiktok /></a>
          <a href="https://www.snapchat.com/add/yanis.redjradj" target="_blank" rel="noreferrer"><FaSnapchatGhost /></a>
          <a href="https://www.facebook.com/share/18XRkSPbaR/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://x.com/yanis_redjradj" target="_blank" rel="noreferrer"><FaXTwitter /></a>
          <a href="https://wa.me/213676938038" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://t.me/+213676938038" target="_blank" rel="noreferrer"><FaTelegram /></a>
          <a href="https://github.com/yanisredjradj" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://open.spotify.com/user/31vn3tquljxh3uavv3zqmqzkx3qm?si=35295d2b7b264633" target="_blank" rel="noreferrer"><FaSpotify /></a>
        </div>
      </div>
    </header>
  )
}

export default Header