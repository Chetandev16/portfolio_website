import React from "react";
import "./header.css";
import Mobile from "./Mobile";
import Web from "./Web";
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
  return (
    <div className="header">
      <div className="logo">Chetan!!</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <GiHamburgerMenu/>
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
