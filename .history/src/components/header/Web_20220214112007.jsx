import React from 'react'
import "./web.css"
import {FaPaintBrush} from "react-icons/fa"
const Web = () => {
  return (
    <div className="web">
      <div className='web-option'>
        <a href="#project">
          <FaPaintBrush/>
          Project
        </a>
      </div>
      <div className='web-option'>
        <a href="#skills">
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