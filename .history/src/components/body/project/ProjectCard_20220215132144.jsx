import React from 'react'
import "./projectcarc.css"
const ProjectCard = ({item}) => {
  return (

    <div className='project-card'>
        <div className="project-info">
          <label>
            {item.title}
          </label>
        </div>
        <img src={item.image} alt="" className='project-photo'/>
    </div>
  )
}

export default ProjectCard