import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
                Full Stack  <br /> Developer{" "}
                <span>
                  <img src="assets/wave hand.png" />
                </span>
              </h1>
              <p>
               Hi, I am Shaik Davood. Passionate Front End Developer.
               <br/>
               Feel Free to connect with me.
              </p>
              
            </div>
            <img src="assets\Avatar-Profile-PNG-Photos.png" alt="profile" />
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
