import React from "react";
import "./projectcarc.css";
const ProjectCard = ({ item }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{item.title}</label>
        <div className="project-links">
          {item.demo && (
            <a className="project-link" href={item.demo} target="_blank">
              <div className="link-button">
                <i class="fa-solid fa-globe"></i>Demo
              </div>
            </a>
          )}
          {item.github && (
            <a className="project-link" href={item.github} target="_blank">
            <div className="link-button">
            <i class="fa-brands fa-github"></i> Github
            </div>
          </a>
          )}
        </div>
        <p>
          {item.about}
        </p>
        <div className="project-tags">
          {item.tags.map((item)=>{
            return (
              <div>
                {item.tag}
              </div>
            )
          })}
        </div>
      </div>
      <img src={item.image} alt="" className="project-photo" />
    </div>
  );
};

export default ProjectCard;
