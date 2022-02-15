import React from 'react'
import "./mobile.css"
import { MdOutlineCancel } from 'react-icons/md'
const Mobile = ({isOpen,setIsOpen}) => {
  return (
    <div className="moblie">
      <div className='close-icon' onClick={()=>{
        setIsOpen(!isOpen)
      }}>
      <MdOutlineCancel/>
      </div>
    </div>
  )
}

export default Mobile