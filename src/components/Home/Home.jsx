import React, { useState } from "react";
import Header from '../header/Header'
import Body from "../body/Body"
import Footer from '../footer/Footer'
import "./home.css"


const Home = () => {
  const [show, setShow] = useState(0);

  return (
    <div className="home">
      <div>
        <Header setShow={setShow} />
      </div>
      <div>
        <Body show={show} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home