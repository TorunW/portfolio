import ProjectsStyles from '../styles/Projects.module.css';

const Projects = ({ projects }) => {
  return (
    <projects className={ProjectsStyles.projects} id='projects'>
      <div className={ProjectsStyles.container}>
        <h1>Projects</h1>

        {projects.map((p, i) => (
          <section key={i} p={p} className={ProjectsStyles.dark}>
            <div>
              <img className={ProjectsStyles.pc} src={p.desktop_image} />

              {/* <img src={p.tablet_image} /> */}
              <img className={ProjectsStyles.mobile} src={p.mobile_image} />
            </div>
            <div>
              <h2>{p.title}</h2>
              <p>{p.about}</p>
              <a href={p.website_link} className={ProjectsStyles.btn}>
                Visit website
              </a>
              <a href={p.git_link} className={ProjectsStyles.btn}>
                Visit github repository
              </a>
            </div>
          </section>
        ))}
      </div>
    </projects>
  );
};

export default Projects;
