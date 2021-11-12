import ProjectCard from "../components/ProjectCard";
import projects from "../components/ProjectsInfo";
import Grow from "@material-ui/core/Grow";

import React from "react";

const ProjectsPage = () => {
  return (
    <div style={{ minHeight: "100vh", color: "white" }}>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        <div className="projects-mapping">
          {projects &&
            projects.map((project, i) => {
              let time = 0;
              const variableTime = () => {
                if (i > 10) {
                  time = 5000;
                } else {
                  time = (i + 1) * 500;
                }
              };
              variableTime();

              return (
                <Grow
                  in={true}
                  style={{ transformOrigin: "center top" }}
                  timeout={time}
                >
                  <div key={i} className="projects">
                    <ProjectCard props={project} />
                  </div>
                </Grow>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
