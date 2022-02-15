import React from "react";
import "./projectcarc.css";
const ProjectCard = ({ item }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{item.title}</label>
        <div className="project-links">
          {item.demo && (
            <a>
              <div>
                <i class="fa-solid fa-globe"></i>
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
