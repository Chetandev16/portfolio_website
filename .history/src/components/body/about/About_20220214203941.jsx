import React from "react";
import "./about.css";
import Typical from "react-typical";
import chetanimg from "../../../img/chetandev.png";
import Social from "../../comman/Social";
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There. 👋
          <br />I am{" "}
          <span
            style={{
              color: "rgb(85, 75, 235)",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Chetan Pathak
          </span>{" "}
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
          <br />
          Currently pursuing Btech Cse and interested in React development
        </div>
        <div className="about-photo">
          <img src={chetanimg} alt="chetanimg" className="pic" />
        </div>
      </div>
      <Social />
    </div>
  );
};

export default About;
