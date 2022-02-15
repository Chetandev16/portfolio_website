import React from "react";
import "./web.css";
import download from "../../../components/resume/chetanpathak.pdf"
const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fa-solid fa-laptop option-icon"></i> Project
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fa-solid fa-code option-icon"></i> Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fa-solid fa-briefcase option-icon"></i> Certification
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fa-solid fa-phone option-icon"></i> Contact
        </a>
      </div>
      <div className="web-option">
        <a download href={download}>
          <i class="fa-solid fa-download option-icon"></i> Resume
        </a>
      </div>
    </div>
  );
};

export default Web;
