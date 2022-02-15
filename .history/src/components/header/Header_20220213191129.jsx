import React, { useState } from "react";
import "./header.css";
import Mobile from "./Mobile";
import Web from "./Web";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">Chetan!!</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div
            className="menu-icon"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GiHamburgerMenu />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
