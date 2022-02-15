import React from 'react'
import "./mobile.css"
import { MdOutlineCancel } from 'react-icons/md'
const Mobile = ({isOpen,setIsOpen}) => {
  return (
    <div className="moblie">
      <div>
      <MdOutlineCancel className="menu-icon"/>
      </div>
    </div>
  )
}

export default Mobile