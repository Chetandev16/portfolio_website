import React from "react";
import "./mobile.css";
import { MdOutlineCancel } from "react-icons/md";
import download from "../../../components/cpsiteresume.pdf"
const Mobile = ({ setShow, isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div
        className="close-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MdOutlineCancel className="menu-icon" />
      </div>
      <div className="mobile-options" onClick={() => {
        setIsOpen(!isOpen)
      }}>
        <div className="mobile-option">
          <a onClick={() => {
            setShow(1);
          }}>
            <i class="fa-solid fa-laptop option-icon"></i> Project
          </a>
        </div>
        <div className="mobile-option">
          <a onClick={() => {
            setShow(2);
          }}>
            <i class="fa-solid fa-code option-icon"></i> Skills
          </a>
        </div>
        <div className="mobile-option">
          <a onClick={() => {
            setShow(3);
          }}>
            <i class="fa-solid fa-briefcase option-icon"></i> Certification
          </a>
        </div>
        <div className="mobile-option">
          <a onClick={() => {
            setShow(4);
          }}>
            <i class="fa-solid fa-phone option-icon"></i> Contact
          </a>
        </div>
        <div className="mobile-option">
          <a href={download} download="resume.pdf">
            <i class={"fa-solid fa-download option-icon"}></i> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
