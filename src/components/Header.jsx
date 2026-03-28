import "./Header.css"
import { useState, useEffect } from "react"
import { FaInstagram, FaDiscord, FaTiktok, FaSnapchatGhost, FaFacebook, FaWhatsapp, FaTelegram, FaGithub, FaSpotify } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
 
function Header() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
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
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#serv">Services</a></li>
                <li><a href="#contact">Contact</a></li>
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
        </header>
    )
}
 
export default Header
 