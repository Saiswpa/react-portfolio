import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>
        <div className="all-projects">
          <div className="project-reverse">
            <div className="project-text">
              <h3>SOCIALIFE - SOCIAL MEDIA APP</h3>
              <p className="project-desc">
                An online platform to facilitate social networking and
                communication. Users create personal profiles to make post with
                image, like or dislike other posts, view comments, add or remove
                friends, view all Feed posts and other personal pages
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>Redux</p>
                <p>Node</p>
                <p>MongoDB</p>
                <p>JWT</p>
                <p>Stripe</p>
                <p>CSS</p>
                <p>Material UI</p>
              </div>
             
            </div>
           
          </div>

         

          

         

          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
