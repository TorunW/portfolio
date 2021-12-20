import { importDb } from '../../config/db';
import ProjectForm from '../../components/ProjectForm';
import { server } from '../../config/server';
import { useState, useEffect } from 'react';
import AdminStyles from '../../styles/Admin.module.css';
import Head from 'next/head';
// import { getSession } from 'next-auth/react';

const admin = ({ initProjects, initInfos }) => {
  const [projects, setProjects] = useState(initProjects);
  const [infos, setInfos] = useState(initInfos);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update === true) {
      setTimeout(() => {
        setUpdate(false);
        window.location.reload();
      }, 3000);
    }
  }, [update]);

  async function onAddNewProject(newProject) {
    // const response = await fetch(`${server}/api/projects`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newProject),
    // });
    // const newProjects = await response.json();
    // setProjects(newProjects);
  }

  async function onDeleteProject(id) {
    await fetch(`${server}/api/project/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setUpdate(true);
  }

  return (
    <admin className={AdminStyles.admin}>
      <Head>
        <script
          src='https://kit.fontawesome.com/4eddce3a99.js'
          crossorigin='anonymous'
        ></script>
      </Head>
      <div className={AdminStyles.adminPage}>
        <div className={AdminStyles.header}>
          <h2 className={AdminStyles.h2}>Admin Panel</h2>
          <a className={AdminStyles.inbox} href='admin/inbox'>
            <i class='fas fa-envelope'></i>
            <div>Inbox</div>
          </a>
        </div>
        <ProjectForm onSubmit={onAddNewProject} />

        <h3 className={AdminStyles.sectionHeader}>Project</h3>
        <div className={AdminStyles.projectContainer}>
          {projects.map((project, index) => (
            <div className={AdminStyles.project} key={index} project={project}>
              <p className={AdminStyles.title}>{project.title}</p>
              <p>{project.about}</p>
              {/* <p>{project.mobile_image}</p>
              <p>{project.tablet_image}</p> */}
              <p>{project.desktop_image}</p>
              <p>{project.websitelink}</p>
              <p>{project.gitlink}</p>
              <div className={AdminStyles.buttonContainer}>
                <a
                  className={AdminStyles.button}
                  onClick={() => onDeleteProject(project.id)}
                >
                  Delete
                </a>
                <a
                  className={AdminStyles.button}
                  href={`admin/project/${project.id}`}
                >
                  Edit project
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 className={AdminStyles.sectionHeader}>About</h3>

        {infos.map((aboutinfo, index) => (
          <div
            className={AdminStyles.aboutSection}
            key={index}
            aboutinfo={aboutinfo}
          >
            <p className={AdminStyles.title}>{aboutinfo.title}</p>
            <p>{aboutinfo.info_text}</p>
            <div className={AdminStyles.buttonContainer}>
              <a
                className={AdminStyles.button}
                href={`admin/about/${aboutinfo.id}`}
              >
                Edit About
              </a>
            </div>
          </div>
        ))}
      </div>
    </admin>
  );
};

export default admin;

export const getServerSideProps = async (context) => {
  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  const db = await importDb();
  const projects = await db.all('select * from project');
  const infos = await db.all('select * from aboutinfo');

  return {
    props: {
      // session,
      initProjects: projects,
      initInfos: infos,
    },
  };
};

// async function onEditAbout(newAbout) {
//   const response = await fetch(`${server}/api/about`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newAbout),
//   });
//   const newAboutText = await response.json();
//   setInfos(newAboutText);
// }
