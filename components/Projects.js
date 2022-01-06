import ProjectsStyles from '../styles/Projects.module.css';

const Projects = ({ projects }) => {
  let projectDisplay;
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1001) {
      projectDisplay = (
        <div className={ProjectsStyles.container}>
          <h1>My Projects</h1>
          {projects.map((p, i) => (
            <section key={i} p={p} className={ProjectsStyles.projectContainer}>
              <img className={ProjectsStyles.pc} src={p.desktop_image} />
              <div className={ProjectsStyles.text}>
                <h2>{p.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: p.about }}></div>
                <div className={ProjectsStyles.buttonContainer}>
                  <a href={p.website_link} className={ProjectsStyles.btn}>
                    Visit website
                  </a>
                  <a href={p.git_link} className={ProjectsStyles.btn}>
                    Github repository
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      );
    } else {
      console.log('small window');
      projectDisplay = (
        <div className={ProjectsStyles.container}>
          <h1>My Projects</h1>
          {projects.map((p, i) => (
            <section key={i} p={p} className={ProjectsStyles.projectContainer}>
              <div className={ProjectsStyles.text}>
                <h2>{p.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: p.about }}></div>
              </div>
              <img className={ProjectsStyles.pc} src={p.desktop_image} />
              {/* <img className={ProjectsStyles.mobile} src={p.mobile_image} /> */}
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
      );
    }
  }

  return (
    <projects className={ProjectsStyles.projects} id='projects'>
      <div>{projectDisplay}</div>
    </projects>
  );
};

export default Projects;
