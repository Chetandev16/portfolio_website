import React from "react";
import "./mobile.css";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon"></div>
      <div className="">
        <div className="">
          <a href="#project">
            <i class="fa-solid fa-laptop option-icon"></i> Project
          </a>
        </div>
        <div className="">
          <a href="#skills">
            <i class="fa-solid fa-code option-icon"></i> Skills
          </a>
        </div>
        <div className="">
          <a href="#work">
            <i class="fa-solid fa-briefcase option-icon"></i> Certification
          </a>
        </div>
        <div className="">
          <a href="#contact">
            <i class="fa-solid fa-phone option-icon"></i> Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
