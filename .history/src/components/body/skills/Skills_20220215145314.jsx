import React from 'react'
import "./skill.css"
import Separator from "../../comman/separator/Separator"
import { SkillData } from './data'
const Skills = () => {
  const data = SkillData;
  return ( 
    <div className='skills'>
      <Separator/>
      <div className='section-title'>
        Skills
      </div>
      <div>
        {data.map((item)=>{
          return(
            <div className='skill-section'>
              <div>{item.type}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}

export default Skills