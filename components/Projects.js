import ProjectsStyles from '../styles/Projects.module.css';

const Projects = ({ projects }) => {
  return (
    <projects className={ProjectsStyles.projects} id='projects'>
      <div className={ProjectsStyles.container}>
        {/* <h1>My Projects</h1> */}
        <div className={ProjectsStyles.projectContainer}>
          <div className={ProjectsStyles.image}>
            <img src='/uploads/nahdran.png' />
          </div>

          <div className={ProjectsStyles.textContainer}>
            <h2>Rock'n'Roll Herberge</h2>
            <div className={ProjectsStyles.text}>
              Music-themed youth hostel. <br /> Designed and built a responsive
              website using Reactjs for the front-end development, and
              Express/Nodejs for the back-end. <br /> Ensured optimised UI/UX
              and admin interface including an admin panel allowing content
              editing.
              <br />
              Performed UAT, utilised Nodemailer to allow bookings to
              synchronise with email, and translated site into English allowing
              two language versions.
            </div>
            <div className={ProjectsStyles.buttonContainer}>
              <a className={ProjectsStyles.btn}>Visit website</a>
              <a className={ProjectsStyles.btn}>Github repository</a>
            </div>
          </div>
        </div>
        {/* <section className={ProjectsStyles.projectContainer}>
          <div className={ProjectsStyles.textContainer}>
            <h2>Nahdran Film</h2>
            <div>
              Educational platform
              <br /> Built a responsive website from scratch to showcase a stop
              motion short film being submitted to a film festival, front-end
              was developed through Reactjs and back-end with Express/Nodejs.
              <br />
              Gathered client requirements regarding design, and ensured both
              optimised UI/UX and admin interface.
              <br /> Performed UAT, created an admin panel to allow the client
              to receive enquiries and upload educational content.
            </div>
            <div className={ProjectsStyles.buttonContainer}>
              <a className={ProjectsStyles.btn}>Visit website</a>
              <a className={ProjectsStyles.btn}>Github repository</a>
            </div>
          </div>
          <div className={ProjectsStyles.imgContainer}>
            <img className={ProjectsStyles.pc} src='/uploads/nahdran.png' />
          </div>
        </section>
        <section className={ProjectsStyles.projectContainer}>
          <div className={ProjectsStyles.textContainer}>
            <h2>Online Artist Portfolio</h2>
            <div>
              A responsive website displaying artworks, front-end was developed
              through Nextjs and Database SQLite.
              <br /> Researched competitor sites to develop an effective design,
              and ensured optimised UI/UX. Developed an effective and optimised
              user interface, and provided basic support on content.
              <br /> Performed UAT, created an admin panel to enable the client
              to receive enquiries and upload new artworks. M
            </div>
            <div className={ProjectsStyles.buttonContainer}>
              <a className={ProjectsStyles.btn}>Visit website</a>
              <a className={ProjectsStyles.btn}>Github repository</a>
            </div>
          </div>
          <div className={ProjectsStyles.imgContainer}>
            <img className={ProjectsStyles.pc} src='/uploads/chill.png' />
          </div>
        </section> */}
        {/* {projects.map((p, i) => (
          <section key={i} p={p} className={ProjectsStyles.projectContainer}>
            <div className={ProjectsStyles.textContainer}>
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
            <div className={ProjectsStyles.imgContainer}>
              <img className={ProjectsStyles.pc} src={p.desktop_image} />
            </div>
          </section>
        ))} */}
      </div>
    </projects>
  );
};

export default Projects;
