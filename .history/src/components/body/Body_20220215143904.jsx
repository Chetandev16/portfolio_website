import React from "react";
import "./Body.css";

import About from "./about/About";
import Project from "./project/Project";
import Skills from "./skills/Skills";
import Certification from "./Certification/Certification";
import Contact from "./contact/Contact";
const Body = () => {
  return (
    <div className="body">
      <section className="c1">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Certification />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;