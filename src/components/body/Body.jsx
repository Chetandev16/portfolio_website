import React, { useState } from "react";
import "./Body.css";

import About from "./about/About";
import Project from "./project/Project";
import Skills from "./skills/Skills";
import Certification from "./Certification/Certification";
import Contact from "./contact/Contact";
const Body = ({show}) => {

  if (show === 0) {
    return (
      <div>
        <About />
      </div>
    );
  } else if (show === 1) {
    return (
      <div>
        <Project />
      </div>
    )
  } else if (show === 2) {
    return (
      <div>
        <Skills />
      </div>
    )
  } else if (show === 3) {
    return (
      <div>
        <Certification />
      </div>
    )
  } else if (show === 4) {
    return (
      <div>
        <Contact />
      </div>
    )
  }
  // return (
  //   <div className="body">
  //     <section className="c1">
  //       <About />
  //     </section>
  //     <section id="project">
  //       <Project />
  //     </section>
  //     <section id="skills">
  //       <Skills />
  //     </section>
  //     <section id="work">
  //       <Certification />
  //     </section>
  //     <section id="contact">
  //       <Contact />
  //     </section>
  //   </div>
  // );
};

export default Body;