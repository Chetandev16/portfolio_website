import React from 'react'
import "./Body.css"
import Typical from "react-typical";
import About from "./about/About"
import Project from "./project/Project"
import Skills from "./skills/Skills"
import Certification from "./Certification/Certification"
import Contact from "./contact/Contact"
const Body = () => {
  return (
    <div className="body">
      <section id="#about">
        <About/>
      </section>
      <section id="#project" className='c1'>
        <Project/>
      </section>
      <section id="#skills" className='c2'>
        <Skills/>
      </section>
      <section id="#work" className='c3'>
        <Certification/>
      </section>
      <section id="#contact" className='c4'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body


{/* <Typical */}
    //       loop={Infinity}
    //       steps={[
    //         "A Student",
    //         1200,
    //         "Enthusiastic Dev ~",
    //         1200,
    //         "React Developer!! ",
    //         1200,
    //         "Future SDE :)",
    //         1200,
    //       ]}
    //       wrapper="p"
    //     />