import React from "react";
import "./contact.css";
import { SocialData } from "./data";
const Contact = () => {
  const data = SocialData;
  return <div>{data.map((item) => {
    return <a href={item.link} alt={item.platform}>
      <img src={item.logo} alt={item.name} />
    </a>
  })}</div>;
};

export default Contact;
