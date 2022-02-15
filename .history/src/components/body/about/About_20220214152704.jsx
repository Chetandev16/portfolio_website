import React from "react";
import "./about.css";
import Typical from "react-typical";
import { scryRenderedDOMComponentsWithClass } from "react-dom/cjs/react-dom-test-utils.development";
import chetanimg from "../../../img/chetandev.png"
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There.
          <br />
          I am <span style={{color:"rgb(85, 75, 235)" , fontSize:"26px" ,fontWeight: "bold"}}>Chetan Pathak</span> <br />
          currently pursuing Btech Cse and interested in Flutter development
          <Typical
            className="typical"
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
        <div className="about-photo">
          <img src={chetanimg} alt="" />
        </div>
      </div>
      <div className="about-bottom">Contact bolte!</div>
    </div>
  );
};

export default About;