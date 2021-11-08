import ProjectsStyles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <projects className={ProjectsStyles.projects} id='projects'>
      <div className={ProjectsStyles.container}>
        <h1>Projects</h1>
        <section className={ProjectsStyles.dark}>
          <div>
            <i className='fas fa-laptop'></i>
            <i className='fas fa-tablet-alt'></i>
            <i className='fas fa-mobile-alt'></i>
          </div>
          <div>
            <h2>Rock'n'Roll Herberge</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <a href='http://www.rnrherberge.de/' className={ProjectsStyles.btn}>
              Visit website
            </a>
            <a href='http://www.rnrherberge.de/' className={ProjectsStyles.btn}>
              Visit github repository
            </a>
          </div>
        </section>

        <section className={ProjectsStyles.dark}>
          <div>
            <i className='fas fa-laptop'></i>
            <i className='fas fa-tablet-alt'></i>
            <i className='fas fa-mobile-alt'></i>
          </div>
          <div>
            <h2>Rock'n'Roll Herberge</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <a href='http://www.rnrherberge.de/' className={ProjectsStyles.btn}>
              Visit website
            </a>
            <a href='http://www.rnrherberge.de/' className={ProjectsStyles.btn}>
              Visit github repository
            </a>
          </div>
        </section>
      </div>
    </projects>
  );
};

export default Projects;