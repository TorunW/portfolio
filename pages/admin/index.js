import { importDb } from "../../config/db";
import ProjectForm from "../../components/ProjectForm";
import { server } from "../../config/server";
import { useState, useEffect } from "react";
import AdminStyles from "../../styles/Admin.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

const admin = ({ initProjects, initInfos }) => {
  const router = useRouter();
  const [projects, setProjects] = useState(initProjects);
  const [infos, setInfos] = useState(initInfos);
  const [update, setUpdate] = useState(false);
  // const { data: session } = useSession();

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
    await fetch(`${server}/api/project/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUpdate(true);
  }

  async function logout(){
    const res = await fetch(`/api/login/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json()
    router.push("/")  
  }

  return (
    <admin className={AdminStyles.admin}>
      <Head>
        <script
          src="https://kit.fontawesome.com/4eddce3a99.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className={AdminStyles.adminPage}>
        <div className={AdminStyles.header}>
          <h2 className={AdminStyles.h2}>Admin Panel</h2>
          <div className={AdminStyles.navButtonContainer}>
            <a className={AdminStyles.navButton} href="admin/inbox">
              <div>Inbox</div>
              <i class="fas fa-envelope"></i>
            </a>
            <a className={AdminStyles.navButton} href="#" onClick={() => logout()}>
              Logout
            </a>
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
  
  // const session = await getSession(context);
  const { cookie } = context.req.headers; 


  let secWor;
  if (cookie.indexOf(`torun-wikstrom.com:${process.env.SEC_USE}`) > -1){
    secWor = cookie.split(`torun-wikstrom.com:${process.env.SEC_USE}`)[1].split('=')[1];
  }

  if (secWor !== process.env.SEC_WOR) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    const db = await importDb();
    const projects = await db.all("select * from project");
    const infos = await db.all("select * from aboutinfo");

    return {
      props: {
        // session,
        initProjects: projects,
        initInfos: infos,
      },
    };
  }
};
