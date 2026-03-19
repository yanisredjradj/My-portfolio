import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {
  const [flip, setFlip] = useState(false);
  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <div className="photo-card" onClick={() => setFlip(!flip)}>
          <div className={flip ? "photo-inner flip" : "photo-inner"}>
            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>
            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-about">
          <p>
            Hi, I'm Yanis, a motivated Computer Science student with a strong passion for technology, football, and self-development. I enjoy learning new skills like coding, problem-solving, and building digital projects that can grow into real opportunities. At the same time, I'm dedicated to improving myself physically through the gym and mentally through discipline and consistency.
            I'm ambitious and always aiming higher—whether it's succeeding in my studies, building a stable income, or creating my own projects in the future. I love combining creativity, strategy, and hard work to achieve my goals. My vision is to build a successful life, both financially and personally, while continuously evolving into the best version of myself.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;
