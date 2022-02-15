import React from "react";
import "./about.css";
import Typical from "react-typical"
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There. 
          <br/>
          I am Chetan Pathak 
          <Typical
            loop={Infinity}
            steps={[
              "A Student",
              1200,
              "Enthusiastic Dev ~",
              1200,
              "React Developer!! ",
              1200,
              "Future SDE :)",
              1200,
            ]}
            wrapper="p"
          />
        </div>
        <div className="about-photo"></div>
      </div>
      <div className="about-bottom">Contact bolte!</div>
    </div>
  );
};

export default About;
