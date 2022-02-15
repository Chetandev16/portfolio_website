import React from 'react'
import "./skillcard.css"
const SkillCard = ({item}) => {
  return (
    <div className='skill-card'>
       <div className="skill-icon">
           {item.icon}
       </div>
       <div className="skill-name">
           {item.name}
       </div>
    </div>
  )
}

export default SkillCard