import React from "react";
import "./web.css";
import download from "../../../components/cpsiteresume.pdf"
const Web = ({ setShow }) => {
  return (
    <div className="web">
      <div className="web-option">
        <a onClick={() => {
          setShow(1);
        }}>
          <i class="fa-solid fa-laptop option-icon"></i> Project
        </a>
      </div>
      <div className="web-option">
        <a onClick={() => {
          setShow(2);
        }}>
          <i class="fa-solid fa-code option-icon"></i> Skills
        </a>
      </div>
      <div className="web-option">
        <a onClick={() => {
          setShow(3);
        }}>
          <i class="fa-solid fa-briefcase option-icon"></i> Certification
        </a>
      </div>
      <div className="web-option">
        <a onClick={() => {
          setShow(4);
        }}>
          <i class="fa-solid fa-phone option-icon"></i> Contact
        </a>
      </div>
      <div className="web-option">
        <a download="resume.pdf" href={download}>
          <i class="fa-solid fa-download option-icon"></i> Resume
        </a>
      </div>
    </div>
  );
};

export default Web;
