import { useEffect, useRef } from "react";
import "./Hero.css";

const roles = [
  "Frontend Developer",
  "UI Designer",
  "Cybersecurity Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const typeRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    function type() {
      if (!typeRef.current) return;
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        typeRef.current.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charIndex--;
        typeRef.current.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      timeout = setTimeout(type, deleting ? 55 : 95);
    }

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hero" id="hero">

      <div className="hero-grid"></div>
      <div className="hero-blob1"></div>
      <div className="hero-blob2"></div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <span className="hero-tag">Portfolio 2026</span>

          <h1>
            Yanis<br />
            <span>Redjradj</span>
          </h1>

          <p className="hero-typewriter">
            <span ref={typeRef}></span>
            <span className="cursor"></span>
          </p>

          <div className="hero-divider"></div>

          <p className="hero-desc">
            Passionate about building modern digital experiences,
            securing systems, and growing every single day.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>

          <div className="hero-btns">
            <a href="#contact">Contact Me</a>
            <a href="#about">Who Am I</a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img
            src="hero.png"
            alt="Yanis Redjradj"
            className="hero-img"
          />
        </div>

      </div>

      {/* SCROLL */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>

    </div>
  );
}