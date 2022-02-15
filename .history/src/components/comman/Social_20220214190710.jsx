import React from "react";
import "./social.css";
import { SocialData } from "./data";
const Social = () => {
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

export default Social;
