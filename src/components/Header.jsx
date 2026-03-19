import "./Header.css"
import { useState, useEffect } from "react"
import { FaInstagram, FaDiscord } from "react-icons/fa"

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
            </ul>
        </header>
    )
}

export default Header
