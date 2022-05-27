import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";
import Logo from "../../img/1.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({setShow}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo" onClick={() => {
        setShow(0);
      }}>
        <img src={Logo} alt="logo"/>
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web setShow={setShow}/>
        </div>
        <div className="mobile-menu">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GiHamburgerMenu className="menu-icon" />
          </div>
          {isOpen && <Mobile setShow={setShow} isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
