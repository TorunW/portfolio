import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import nahdranImg from '../public/uploads/nahdran.png';

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <section className={styles.projects} id='projects'>
      <h2 className={styles.title}>My Projects</h2>
      {projects.map((p, i) => {
        let oddIndex = i % 2 == 0 ? true : false;
        return (
          <div
            key={i}
            p={p}
            className={
              oddIndex === true
                ? styles.wrapper + ' ' + styles.rightWrapper
                : styles.wrapper + ' ' + styles.leftWrapper
            }
          >
            <div className={styles.imageWrapper}>
              <img src={p.desktop_image} className={styles.styledImage} />
            </div>
            <div
              className={
                oddIndex === true
                  ? styles.content + ' ' + styles.rightContent
                  : styles.content + ' ' + styles.leftContent
              }
            >
              <h2 className={styles.h2}>{p.title}</h2>
              <div
                className={styles.p}
                dangerouslySetInnerHTML={{ __html: p.about }}
              ></div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
