import React from "react";
import "./web.css";
import { saveAs } from "file-saver";
import "./chetanpathak.pdf";
const Web = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1QwTEzXlZzS7cilLkFPLmPuJ3X_dgPNUu/view?usp=sharing",
      "resume.pdf"
    );
  };
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
        <div onClick={saveFile}>
          <i class="fa-solid fa-download option-icon"></i> Resume
        </div>
      </div>
    </div>
  );
};

export default Web;
