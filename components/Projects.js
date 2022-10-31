import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <section className={styles.projects} id='projects'>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.wrapper + ' ' + styles.rightWrapper}>
        <div className={styles.imageWrapper}>
          <img src='uploads/js.png' className={styles.styledImage} />
        </div>
        <div className={styles.content + ' ' + styles.rightContent}>
          <h2 className={styles.h2}>Jüdische Stimme</h2>
          <div className={styles.p}>
            Website for a non-profit organization Designed and built a
            responsive website using React Nextjs, with Typescript and Redux,
            for the Front- and Backend development, with custom CMS to ensure
            the maintenance of the website is user friendly. <br />
            Migrated database the clients old website on WordPress, and planned
            the new website around it. <br />
            Implemented Stripe for donations, Mailchimp for Newsletter and
            Google captcha to prevent spam, Nodemailer to receive messages sent
            through the contact form. <br />
            Designed UI/UX using Figma following the clients wishes. Added
            multilingual support, allowing the user to switch between languages.
          </div>
          <div className={styles.btnContainer}>
            <a
              href='https://github.com/TorunW/Juedische-Stimme'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.btn}
            >
              GitHub Repository
            </a>
            <a
              href='https://juedische-stimme.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.btn}
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>

      <div className={styles.wrapper + ' ' + styles.leftWrapper}>
        <div className={styles.imageWrapper}>
          <img src='uploads/chill.png' className={styles.styledImage} />
        </div>
        <div className={styles.content + ' ' + styles.leftContent}>
          <h2 className={styles.h2}>Chillborg - Online Artist Portfolio</h2>
          <div className={styles.p}>
            A responsive website, front-end was developed through Nextjs and
            Database SQLite. <br />
            Researched competitor sites to develop an effective design, and
            ensured optimised UI/UX. <br />
            Developed an effective and optimised user interface, and provided
            basic support on content. Performed UAT, created an admin panel to
            enable the client to receive enquiries and upload new artworks.
          </div>
          <div className={styles.btnContainer}>
            <a
              href='https://github.com/TorunW/new-art-gallery'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.btn}
            >
              GitHub Repository
            </a>
            <a
              href='https://chillborg.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.btn}
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>

      <div className={styles.wrapper + ' ' + styles.rightWrapper}>
        <div className={styles.imageWrapper}>
          <img src='uploads/nah.png' className={styles.styledImage} />
        </div>
        <div className={styles.content + ' ' + styles.rightContent}>
          <h2 className={styles.h2}>Nahdran Film</h2>
          <div className={styles.p}>
            Educational platform. <br /> Built a responsive website from scratch
            to showcase a stop motion short film being submitted to a film
            festival, front-end was developed through Reactjs and back-end with
            Express/Nodejs.
            <br /> Gathered client requirements regarding design, and ensured
            both optimised UI/UX and admin interface. Performed UAT, created an
            admin panel to allow the client to receive enquiries and upload
            educational content.
          </div>
          <div className={styles.btnContainer}>
            <a
              href='https://github.com/dnelband/nahdran'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.btn}
            >
              GitHub Repository
            </a>
            <a
              href='https://nahdran-film.de/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.btn}
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
