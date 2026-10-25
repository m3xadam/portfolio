import "../css/project.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio showcasing projects, skills, and contact information.",
    technologies: ["React", "CSS", "JavaScript"],
    source: "https://github.com/your-username/portfolio",
    live: "https://your-portfolio-demo.com",
  },
  {
    title: "Task Manager",
    description:
      "A simple task manager for organizing work, tracking progress, and staying productive.",
    technologies: ["React", "CSS", "JavaScript"],
    source: "https://github.com/your-username/task-manager",
    live: "https://your-task-manager-demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that presents current conditions and forecasts in a clear layout.",
    technologies: ["React", "API", "CSS"],
    source: "https://github.com/your-username/weather-dashboard",
    live: "https://your-weather-demo.com",
  },
];

function Project() {
  return (
    <section className="Pwrapper" id="project">
      <div className="pwhelper">
        <p className="pswp">FEATURED PROJECTS</p>
        <h2 className="psec1h2">
          <span>My</span> Projects
        </h2>

        <div className="projectwrapper">
          {projects.map((project) => (
            <article className="projectSec" key={project.title}>
              <h3>{project.title}</h3>
              {/* <img src="" alt="" /> */}
              <p className="projectDescription">{project.description}</p>

              <ul className="projectTechnologies" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="projectActions">
                <a href={project.source} target="_blank" rel="noreferrer">
                  Source Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Preview
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;