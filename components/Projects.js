import ProjectsStyles from "../styles/Projects.module.css";

const Projects = ({ projects }) => {
  return (
    <projects className={ProjectsStyles.projects} id="projects">
      <div className={ProjectsStyles.container}>
        <h1>My Projects</h1>
        {projects.map((p, i) => (
          <section key={i} p={p} className={ProjectsStyles.projectContainer}>
            <div className={ProjectsStyles.text}>
              <h2>{p.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: p.about }}></div>
            </div>
            <img className={ProjectsStyles.pc} src={p.desktop_image} />
            <div className={ProjectsStyles.buttonContainer}>
              <a href={p.website_link} className={ProjectsStyles.btn}>
                Visit website
              </a>
              <a href={p.git_link} className={ProjectsStyles.btn}>
                Github repository
              </a>
            </div>
          </section>
        ))}
      </div>
    </projects>
  );
};

export default Projects;
