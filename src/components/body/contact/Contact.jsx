import React from "react";
import "./contact.css";
import Separator from "../../comman/seperator/Separator";
import SocialContact from "../../comman/Social";
import download from "../../cpsiteresume.pdf";
const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <div className="section-title">Contact</div>
      <div className="contact-container">
        <div className="contact-left">
          <p style={{fontWeight:"normal"}}>Want to get in touch? Contact me on any of the platform!</p>
          <div className="social-chetan">
            <SocialContact/>
          </div>
        </div>
        <div className="download">
          <a href={download} download="resume.pdf">
            <i className="fa-solid fa-download option-icon download-icon"></i> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
