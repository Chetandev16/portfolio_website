import React from 'react'
import "./skill.css"
import SkillCard from "./SkillCard"
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
              <div className='skill-section-title'>{item.type}</div>
              <div className="skill-list">
                {
                  item.list.map((item)=>{
                    <SkillCard item={item}/>
                  })
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}

export default Skills