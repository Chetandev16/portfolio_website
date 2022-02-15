import React from "react";
import "./project.css";
import { ProjectData } from "./data";
import ProjectCard from "./ProjectCard";
const Project = () => {
  const data = ProjectData;
  console.log(data);
  return (
    <div className="projects">
      <label> Projects</label>
      <div>
        {data.map((item)=>{
          return(
            <ProjectCard/>
          )
        })}
      </div>
    </div>
  );
};

export default Project;
