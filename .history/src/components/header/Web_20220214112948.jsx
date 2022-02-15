import React from "react";
import "./web.css";
const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fa-solid fa-laptop"></i>
          Project
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">Skills</a>
      </div>
      <div className="web-option">
        <a href="#work">Certification</a>
      </div>
      <div className="web-option">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Web;
