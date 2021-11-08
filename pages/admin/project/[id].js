import { importDb } from '../../../config/db';
import { useState } from 'react';
import { server } from '../../../config/server';

const projectView = ({ project }) => {
  const [title, setTitle] = useState(project.title);
  const [about, setAbout] = useState(project.about);
  const [mobileImage, setMobileImage] = useState(project.mobile_image);
  const [tabletImage, setTabletImage] = useState(project.tablet_image);
  const [desktopImage, setDesktopImage] = useState(project.desktop_image);
  const [websiteLink, setWebsiteLink] = useState(project.website_link);
  const [gitLink, setGitLink] = useState(project.git_link);
  const [id, setId] = useState(project.id);

  async function onSave() {
    let newProject = {
      title,
      about,
      mobile_image: mobileImage,
      tablet_image: tabletImage,
      desktop_image: desktopImage,
      website_link: websiteLink,
      git_link: gitLink,
    };

    const response = await fetch(`${server}/api/project/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });
  }

  return (
    <div>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={about} onChange={(e) => setAbout(e.target.value)} />
        <input
          value={mobileImage}
          onChange={(e) => setMobileImage(e.target.value)}
        />
        <input
          value={tabletImage}
          onChange={(e) => setTabletImage(e.target.value)}
        />
        <input
          value={desktopImage}
          onChange={(e) => setDesktopImage(e.target.value)}
        />
        <input
          value={websiteLink}
          onChange={(e) => setWebsiteLink(e.target.value)}
        />
        <input value={gitLink} onChange={(e) => setGitLink(e.target.value)} />
        <button onClick={() => onSave(id)}>Save Changes</button>
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
