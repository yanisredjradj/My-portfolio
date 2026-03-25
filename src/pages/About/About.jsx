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
            Hi, I’m Yanis Redjradj, a student in 3ème Technique Math – Génie Électrique, currently preparing for my Baccalauréat.
I’m passionate about programming, cybersecurity, and building modern digital projects. I enjoy learning how systems work, securing them, and improving my skills every day.
My goal is to achieve a Master 2 degree and an engineering diploma in Programming, Cybersecurity, or Software Development. I aim to study abroad, especially in France, to gain high-level education and real-world experience.
I’m focused on becoming highly skilled in tech, building impactful projects, and developing a strong professional profile. My ambition is to achieve financial independence, create my own opportunities, and grow into a successful engineer in the tech industry.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;
