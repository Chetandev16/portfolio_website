import React from 'react'
import "./Body.css"
import Typical from "react-typical";
import About from "./about/About"
const Body = () => {
  return (
    <div className="body">
      <section id="#about">
        <About/>
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