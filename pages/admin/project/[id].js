import { importDb } from '../../../config/db';
import { useState } from 'react';
import { server } from '../../../config/server';
import ProjectForm from '../../../components/ProjectForm';

const projectView = ({ project }) => {
  const [title, setTitle] = useState(project.title);
  const [about, setAbout] = useState(project.about);
  const [mobileImage, setMobileImage] = useState(project.mobile_image);
  const [tabletImage, setTabletImage] = useState(project.tablet_image);
  const [desktopImage, setDesktopImage] = useState(project.desktop_image);
  const [websiteLink, setWebsiteLink] = useState(project.website_link);
  const [gitLink, setGitLink] = useState(project.git_link);
  const [id, setId] = useState(project.id);

  async function onSave(res) {
    console.log(res, 'res');
  }

  return (
    <div>
      <div>
        <ProjectForm type={'edit'} project={project} onSubmit={onSave} />
      </div>
    </div>
  );
};

export default projectView;

export const getServerSideProps = async (context) => {
  const db = await importDb();
  const project = await db.get('select * from project where id = ?', [
    context.params.id,
  ]);
  return { props: { project } };
};
