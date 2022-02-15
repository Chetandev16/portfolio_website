import React from "react";
import "./header.css";
import Mobile from "./Mobile";
import Web from "./Web";
import { FaDropbox } from 'react-icons/fa';
const Header = () => {
  return (
    <div className="header">
      <div className="logo">Chetan!!</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile">
          <FaBeer/>
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
