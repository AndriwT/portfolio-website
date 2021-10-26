import ProjectCard from "../components/ProjectCard";
import projects from "../components/ProjectsInfo";

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects &&
          projects.map((project, i) => {
            return (
              <div key={i} className="projects">
                <ProjectCard props={project} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsPage;
