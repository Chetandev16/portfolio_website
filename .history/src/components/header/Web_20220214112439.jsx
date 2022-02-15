import React from 'react'
import "./web.css"
import {FaLaptopCode} from "react-icons/fa"
import {BiCodeAlt} from "react-icons/bi"
import {AiFillSafetyCertificate} from "react-icons/ai"
import {GrContactInfo} from "react-icons/gr"
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
          Certification
          <AiFillSafetyCertificate/>
        </a>
      </div>
      <div className='web-option'>
        <a href="#contact">
          Contact 
          
          <GrContactInfo/>
        </a>
      </div>
    </div>
  )
}

export default Web