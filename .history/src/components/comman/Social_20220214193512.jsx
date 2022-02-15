import React from "react";
import "./social.css";
import Github from "../../img/github.png";
import Insta from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";

const Social = () => {
  return (
    <div className="social-contact">
      <a href="https://github.com/Chetandev16" target="_blank">
        <div className="social-icon-div">
          <img src={Github} alt="github" className="img-social"/>
        </div>
      </a>

      <a href="https://instagram.com/chetan._pathak/" target="_blank">
        <div className="social-icon-div">
          <img src={Insta} alt="instagram" className="img-social"/>
        </div>
      </a>

      <a href="https://linkedin.com/in/chetanpathak16/" target="_blank">
        <div className="social-icon-div">
          <img src={Linkedin} alt="linkedin" className="img-social" />
        </div>
      </a>

      <a href="#"> 
        <div className="social-icon-div">
          <img src={Twitter} alt="twitter"  className="img-social"/>
        </div>
      </a>

    </div>
  );
};

export default Social;
