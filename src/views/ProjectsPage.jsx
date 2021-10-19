import ProjectCard from "../components/ProjectCard";
import projects from "../components/ProjectsInfo";

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects &&
          projects.map((project, i) => {
            return (
              <div key={i}>
                <ProjectCard props={project} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsPage;
