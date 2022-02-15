import React from "react";
import "./projectcarc.css";
const ProjectCard = ({ item }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{item.title}</label>
        <div className="project-links">
          {item.demo && (
            <a className="project-link" href={item.demo}>
              <div>
                <i class="fa-solid fa-globe"></i>Demo
              </div>
            </a>
          )}
        </div>
      </div>
      <img src={item.image} alt="" className="project-photo" />
    </div>
  );
};

export default ProjectCard;
