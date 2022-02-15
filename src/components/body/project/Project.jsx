import React from "react";
import "./project.css";
import { ProjectData } from "./data";
import ProjectCard from "./ProjectCard";
import Separator from "../../comman/seperator/Separator";
const Project = () => {
  const data = ProjectData;
  console.log(data);
  return (
    <div className="projects">
      <Separator/>
      <label className="section-title"> Projects</label>
      <div>
        {data.map((item)=>{
          return(
            <ProjectCard item={item} />
          )
        })}
      </div>
    </div>
  );
};

export default Project;
