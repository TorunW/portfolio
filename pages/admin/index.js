import { importDb } from '../../config/db';
import { useState, useEffect } from 'react';
import AdminStyles from '../../styles/Admin.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProjectForm from '../../components/ProjectForm';

const admin = ({ initProjects, initInfos }) => {
  const [projects, setProjects] = useState(initProjects);
  const [infos, setInfos] = useState(initInfos);
  const [update, setUpdate] = useState(false);
  const [adminDisplay, setAdminDisplay] = useState(false);
  let router = useRouter();

  // IF ELSE only show admin if we have a token

  useEffect(() => {
    let token = sessionStorage.getItem('Token');

    if (!token) {
      router.push('/login');
      setAdminDisplay(false);
    } else {
      setAdminDisplay(true);
    }
  }, []);

  useEffect(() => {
    if (update === true) {
      setTimeout(() => {
        setUpdate(false);
        window.location.reload();
      }, 3000);
    }
  }, [update]);

  async function onAddNewProject(newProject) {}

  async function onDeleteProject(id) {
    await fetch(`/api/project/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setUpdate(true);
  }

  function logout() {
    sessionStorage.removeItem('Token');
    router.push('/');
  }

  return (
    <admin className={AdminStyles.admin}>
      <Head>
        <script
          src='https://kit.fontawesome.com/4eddce3a99.js'
          crossOrigin='anonymous'
        ></script>
      </Head>

      <div
        className={AdminStyles.adminPage}
        style={adminDisplay === false ? { opacity: '0' } : { opacity: '1' }}
      >
        <div className={AdminStyles.header}>
          <h2 className={AdminStyles.h2}>Admin Panel</h2>
          <div className={AdminStyles.navButtonContainer}>
            <a href='/admin/inbox'>
              Inbox
              <i class='fas fa-envelope' />
            </a>
            <button onClick={logout}>Logga ut</button>
          </div>
        </div>
        <ProjectForm onSubmit={onAddNewProject} />

        <h3 className={AdminStyles.sectionHeader}>Project</h3>
        <div className={AdminStyles.projectContainer}>
          {projects.map((project, index) => (
            <div className={AdminStyles.project} key={index} project={project}>
              <p className={AdminStyles.title}>{project.title}</p>
              <div dangerouslySetInnerHTML={{ __html: project.about }}></div>
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
            <div
              dangerouslySetInnerHTML={{ __html: aboutinfo.info_text }}
            ></div>
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
  const db = await importDb();
  const projects = await db.all('select * from project');
  const infos = await db.all('select * from aboutinfo');

  return {
    props: {
      initProjects: projects,
      initInfos: infos,
    },
  };
};
