import React from "react";
import "./social.css";
import Github from "../../img/github.png"
import Insta from "../../img/instagram.png"
import Linkedin from "../../img/linkedin.png"
import Twitter from "../../img/twitter.png"


const Social = () => {

  return (
    <div className="social-contact">
       <a href="https://github.com/Chetandev16" >
         <img src={Github} alt="github"/>
       </a>
    </div>
  );
};

export default Social;
