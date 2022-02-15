import React from "react";
import "./contact.css";
import { SocialData } from "./data";
const Contact = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} alt={item.platform}>
            <div className="social-icon-div">
              <img src={item.logo} alt={item.name} />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
