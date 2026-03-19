import "./Footer.css"
import { FaInstagram, FaDiscord } from "react-icons/fa";

function Footer(){
  return(
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Yanis Redjradj</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/yanis_redjradj" target="_blank" rel="noreferrer"><FaInstagram/></a>
          <a href="https://discord.com/users/yanis_rj" target="_blank" rel="noreferrer"><FaDiscord/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
