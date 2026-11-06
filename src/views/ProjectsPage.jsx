import { useCallback, useState } from "react";
import projects from "../components/ProjectsInfo";
import ProjectDialog from "../components/ProjectCard";

const numberFor = (index) => String(index + 1).padStart(2, "0");

const WorkSection = () => {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="section">
      <div className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Projects with a job to do.</h2>
        <p className="lede">
          A bakery shop, a chat product, a hackathon map, a canvas game, and a
          Pokédex. Open any of them for the full story, or jump straight to the
          live site.
        </p>
      </div>

      <article className="feature">
        <button
          type="button"
          className={`media-button ${featured.fit === "contain" ? "is-contain" : ""}`}
          aria-label={`Open ${featured.name}`}
          onClick={() => setActive(featured)}
        >
          <img
            src={featured.imageSrc}
            alt={featured.imageAlt}
            style={{ objectPosition: featured.imagePosition }}
          />
        </button>
        <div className="feature-copy">
          <p className="meta">
            {numberFor(0)} · {featured.kind} · {featured.year}
          </p>
          <h3>{featured.name}</h3>
          <p>{featured.summary}</p>
          <ul className="tags">
            {featured.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="actions">
            <button type="button" className="btn" onClick={() => setActive(featured)}>
              Read the project
            </button>
            <a className="btn btn-ghost" href={featured.url} target="_blank" rel="noreferrer">
              Visit site
            </a>
          </div>
        </div>
      </article>

      <div className="work-grid">
        {rest.map((project, index) => (
          <article
            key={project.name}
            className={`work-card ${project.fit === "contain" ? "is-contain" : ""}`}
          >
            <button
              type="button"
              className="work-card-open"
              aria-label={`Open ${project.name}`}
              onClick={() => setActive(project)}
            >
              <span className="media-frame">
                <img
                  src={project.imageSrc}
                  alt=""
                  style={{ objectPosition: project.imagePosition }}
                />
              </span>
              <span className="work-card-body">
                <span className="meta">
                  {numberFor(index + 1)} · {project.kind} · {project.year}
                </span>
                <span className="work-card-title">{project.name}</span>
                <span className="work-card-summary">{project.summary}</span>
              </span>
            </button>
            <a className="work-card-visit" href={project.url} target="_blank" rel="noreferrer">
              Visit
              <span aria-hidden="true"> ↗</span>
              <span className="sr-only"> {project.name}</span>
            </a>
          </article>
        ))}
      </div>

      <ProjectDialog project={active} onClose={close} />
    </section>
  );
};

export default WorkSection;
