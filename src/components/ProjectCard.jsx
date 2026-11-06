import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const ProjectDialog = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const returnFocus = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    returnFocus.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      dialogRef.current?.querySelector(".dialog-close")?.focus();
    });

    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      if (returnFocus.current && returnFocus.current.focus) {
        returnFocus.current.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  return ReactDOM.createPortal(
    <div className="dialog-root" onMouseDown={onClose}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={`dialog-media ${project.fit === "contain" ? "is-contain" : ""}`}>
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            style={{ objectPosition: project.imagePosition }}
          />
        </div>
        <div className="dialog-body">
          <p className="meta">
            {project.kind} · {project.year}
          </p>
          <h3 id="project-dialog-title">{project.name}</h3>
          <ul className="tags">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{project.description}</p>
          <div className="actions">
            <a className="btn" href={project.url} target="_blank" rel="noreferrer">
              Visit project
            </a>
            <button type="button" className="btn btn-ghost dialog-close" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectDialog;
