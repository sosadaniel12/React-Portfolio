import React from "react";
import "./Projects.css";

const styles = {
  bgColor: {
    backdropFilter: "blur(8px) saturate(153%)",
    webkitBackdropFilter: "blur(8px) saturate(153%)",
    backgroundColor: "rgba(255, 255, 255, 0.61)",
    borderRadius: "12px",
    border: "1px solid rgba(209, 213, 219, 0.3)",
  },
};

// Individual Cards
function ProjectCards(props) {
  return (
    <div className="card" style={styles.bgColor}>
      <div className="img-container">
        <img alt={props.name} src={props.image} className="images" />
      </div>
      <div className="content">
        <p className="card-title">{props.name}</p>
        <hr></hr>
        <p class="proj-icons-container">
          <a href={props.github}>
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
          </a>
          <a href={props.deploy}>
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/domain.png"
              alt="Live Application"
            />
          </a>
        </p>
        <p class="topics">{props.topics}</p>
      </div>
    </div>
  );
}

export default ProjectCards;
