//////29 min

import React, { useState } from "react";
import "./header.css";
import Mobile from "./Mobile";
import Web from "./Web";
import Typical from "react-typical";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <Typical
          loop={Infinity}
          steps={[
            "A Student",
            1200,
            "Enthusiastic Dev🔴",
            1200,
            "React Developer 💻",
            1200,
            "Future SDE 😉",
            1200,
          ]}
          wrapper="p"
        />
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GiHamburgerMenu className="menu-icon" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
