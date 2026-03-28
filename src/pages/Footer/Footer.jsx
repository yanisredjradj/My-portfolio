import "./Footer.css"
import { FaInstagram, FaDiscord, FaTiktok, FaSnapchatGhost, FaFacebook, FaWhatsapp, FaTelegram, FaGithub, FaSpotify } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
 
function Footer(){
  return(
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Yanis Redjradj</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/yanis_redjradj" target="_blank" rel="noreferrer"><FaInstagram/></a>
          <a href="https://discord.com/users/yanis_rj" target="_blank" rel="noreferrer"><FaDiscord/></a>
          <a href="https://www.tiktok.com/@yanis.redjradj" target="_blank" rel="noreferrer"><FaTiktok/></a>
          <a href="https://www.snapchat.com/add/yanis.redjradj" target="_blank" rel="noreferrer"><FaSnapchatGhost/></a>
          <a href="https://www.facebook.com/share/18XRkSPbaR/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><FaFacebook/></a>
          <a href="https://x.com/yanis_redjradj" target="_blank" rel="noreferrer"><FaXTwitter/></a>
          <a href="https://wa.me/213676938038" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
          <a href="https://t.me/+213676938038" target="_blank" rel="noreferrer"><FaTelegram/></a>
          <a href="https://github.com/yanisredjradj" target="_blank" rel="noreferrer"><FaGithub/></a>
          <a href="https://open.spotify.com/user/31vn3tquljxh3uavv3zqmqzkx3qm?si=35295d2b7b264633" target="_blank" rel="noreferrer"><FaSpotify/></a>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer;
 