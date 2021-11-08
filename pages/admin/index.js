import { importDb } from '../../config/db';
import NewProjectForm from '../../components/NewProjectForm';
import { server } from '../../config/server';
import { useState } from 'react';
import EditAboutForm from '../../components/EditAboutForm';

const admin = ({ initProjects, initInfos, initContact }) => {
  const [projects, setProjects] = useState(initProjects);
  const [infos, setInfos] = useState(initInfos);
  const [messages, setMessages] = useState(initContact);

  async function onAddNewProject(newProject) {
    const response = await fetch(`${server}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });
    const newProjects = await response.json();
    setProjects(newProjects);
  }

  async function onDeleteProject(id) {
    await fetch(`${server}/api/project/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <div>
      <h2>Admin</h2>
      <NewProjectForm onSubmit={onAddNewProject} />
      <h3>Project</h3>
      {projects.map((project, index) => (
        <div key={index} project={project}>
          <li>{project.title}</li>
          <li>{project.about}</li>
          <li>{project.mobile_image}</li>
          <li>{project.tablet_image}</li>
          <li>{project.desktop_image}</li>
          <li>{project.website_link}</li>
          <li>{project.git_link}</li>
          <a onClick={() => onDeleteProject(project.id)}>
            Delete from portfolio
          </a>
        </div>
      ))}
      <EditAboutForm onSubmit={onEditAbout} />
      <h3>About</h3>
      {infos.map((aboutinfo, index) => (
        <div key={index} aboutinfo={aboutinfo}>
          <li>{aboutinfo.title}</li>
          <li>{aboutinfo.info_text}</li>
        </div>
      ))}
      <h3>Messages</h3>
      {messages.map((message, index) => (
        <div key={index} message={message}>
          <li>{message.fullname}</li>
          <li>{message.email}</li>
          <li>{message.msg}</li>
          <li>{message.created_at}</li>
          <li>{message.read}</li>
        </div>
      ))}
    </div>
  );
};

export default admin;

export const getServerSideProps = async () => {
  const db = await importDb();
  const projects = await db.all('select * from project');
  const infos = await db.all('select * from aboutinfo');

  return { props: { initProjects: projects, initInfos: infos } };
};
