import React from "react";
import shuvro from "../../images/shuvro.jpg";
import './About.css'

const About = () => {
  return (
    <div className="about-me row">
      <div className="col-md-4">
        <img className="shuvro-img img-fluid" src={shuvro} alt="" />
      </div>
      <div className="col-md-8 my-auto">
        <h1 className="about-title">ALNEED ROY SHUVRO</h1>
        <h3 className="about-title">Junior Web Developer</h3>
        <h5 className="about-paragraph">
          Every person must have a goal in life. I also have a goal to become a web developer. <br />
          To achieve my goal, I will do hard work more and more. I know the way to achieve my goal is not easy but I will never give up. I always believe in myself. "I Can" - is my most favourite phrase. <br />
          I believe, hard working is the key of success. So i never compromize with hard work. By maintaining Puntuality, Morality and hard working, i will surely become a well known web developer. 
        </h5>
      </div>
    </div>
  );
};

export default About;
