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

      {/* GRID */}
      <div className="hero-grid"></div>

      {/* MAIN CONTENT */}
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

          <p className="hero-desc">
            Passionate about building modern digital experiences,
            securing systems, and learning every single day.
          </p>

          <div className="hero-btns">
            <a href="#contact">Contact Me</a>
            <a href="#about">Who Am I</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="hero-img-wrapper">
            <img src="hero.png" alt="Yanis" />
          </div>
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>

    </div>
  );
}