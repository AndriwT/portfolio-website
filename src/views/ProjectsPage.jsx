import ProjectCard from "../components/ProjectCard";
import projects from "../components/ProjectsInfo";
import React from "react";
import Fade from "react-reveal/Fade";

const ProjectsPage = () => {
  return (
    <div style={{ minHeight: "100vh", color: "white" }}>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        <div className="projects-mapping">
          {projects &&
            projects.map((project, i) => {
              return (
                <Fade top>
                  <div key={i} className="projects">
                    <ProjectCard props={project} />
                  </div>
                </Fade>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
