import React from 'react'
import "./web.css"
import {FaLaptopCode} from "react-icons/fa"
import {BiCodeAlt} from "react-icons/bi"
const Web = () => {
  return (
    <div className="web">
      <div className='web-option'>
        <a href="#project">
          <FaLaptopCode/>
          Project
        </a>
      </div>
      <div className='web-option'>
        <a href="#skills">
          <BiCodeAlt/>
          Skills
        </a>
      </div>
      <div className='web-option'>
        <a href="#work">
          Work
        </a>
      </div>
      <div className='web-option'>
        <a href="#contact">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Web