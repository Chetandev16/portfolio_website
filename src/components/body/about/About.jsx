import React from "react";
import "./about.css";
import Typical from "react-typical";
import chetanimg from "../../../img/chetandev.png";
import Social from "../../comman/Social";
const About = () => {
  return (
    <>
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
              ]}
              wrapper="p"
            />
            <br />
            This is my personal portfolio website which is made with the help of Reactjs
          </div>
          <div></div>
          <div className="about-photo">
            <img src={chetanimg} alt="chetanimg" className="pic floating" />
          </div>
        </div>
        <Social />
      </div>
    </>
  );
};

export default About;
