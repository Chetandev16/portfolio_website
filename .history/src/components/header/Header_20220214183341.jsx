import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";
import Logo from "../../img/1.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        
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
