import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WorkSection from "./ProjectsPage";

const HomePage = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      document.getElementById(id)?.scrollIntoView();
    };

    const frame = requestAnimationFrame(scrollToHash);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <header className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Digital creator</p>
            <h1>
              Andriw
              <br />
              Tapanes
            </h1>
            <p className="hero-lede">
              I grew up sharing traditional art with the people around me. That
              same instinct now shows up as web applications — beautiful,
              functional, and fun to use.
            </p>
            <div className="hero-actions">
              <a className="btn" href="/#work">
                View selected work
              </a>
              <a className="btn btn-ghost" href="/#contact">
                Get in touch
              </a>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-frame">
              <img
                src="/professional-portrait.png"
                alt="Portrait of Andriw Tapanes"
              />
            </div>
            <figcaption>
              Media arts, project management, and full-stack development.
            </figcaption>
          </figure>
        </header>

        <div className="shell">
          <WorkSection />
        </div>

        <section id="about" className="section shell">
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">About</p>
              <h2>From the studio into the browser.</h2>
              <p>
                Hi, I’m Andriw. I’m a digital creator. Ever since I was a kid
                I’ve liked putting work in front of people, first as traditional
                art and now as websites and apps.
              </p>
              <p>
                I started in media arts, then shifted into project management.
                During that time I got serious about web development and
                completed the full-stack Ironhack bootcamp, which gave me a
                working foundation across the stack. I’m excited for the next
                chapter.
              </p>
            </div>
            <dl className="capabilities">
              <div>
                <dt>Full-stack development</dt>
                <dd>
                  React on the front, Node.js, Express, and MongoDB behind it —
                  interfaces, APIs, and the data they depend on.
                </dd>
              </div>
              <div>
                <dt>UX/UI</dt>
                <dd>
                  Screens organized around what someone is actually trying to
                  do, from a first visit through a finished task.
                </dd>
              </div>
              <div>
                <dt>Design</dt>
                <dd>
                  Visual decisions carried over from a media arts practice:
                  type, color, layout, and the feeling of the thing.
                </dd>
              </div>
              <div>
                <dt>Project management</dt>
                <dd>
                  Keeping a project coherent from the first idea through
                  delivery, with a team or on my own.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="contact" className="contact shell">
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect.</h2>
          <p>
            If you want to talk about a product, a collaboration, or what comes
            next, you’ll find me on GitHub and LinkedIn.
          </p>
          <div className="contact-links">
            <a href="https://github.com/AndriwT" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andriwtapanes/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
