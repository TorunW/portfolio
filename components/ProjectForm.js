import { useState } from 'react/cjs/react.development';
import { getServerSideProps } from '../pages/admin';
import ImageUploader from './ImageUploader';
import { server } from '../config/server';
import EditStyles from '../styles/EditProject.module.css';
import Link from 'next/link';

const ProjectForm = (props) => {
  const project = props.project;
  const [title, setTitle] = useState(project ? project.title : '');
  const [about, setAbout] = useState(project ? project.about : '');
  const [mobileImage, setMobileImage] = useState(
    project ? project.mobileImage : ''
  );
  const [tabletImage, setTabletImage] = useState(
    project ? project.tabletImage : ''
  );
  const [desktopImage, setDesktopImage] = useState(
    project ? project.desktopImage : ''
  );
  const [websiteLink, setWebsiteLink] = useState(
    project ? project.websiteLink : ''
  );
  const [gitLink, setGitLink] = useState(project ? project.gitLink : '');

  async function onSubmit() {
    let newProject = {
      title,
      about,
      mobile_image: mobileImage,
      tablet_image: tabletImage,
      desktop_image: desktopImage,
      website_link: websiteLink,
      git_link: gitLink,
    };

    let url = `${server}/api/projects`,
      method = 'POST';
    if (props.type === 'edit') {
      url = `${server}/api/project/${project.id}`;
      method = 'PUT';
    }
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });
    const res = await response.json();

    props.onSubmit(res);
  }

  return (
    <projectform className={EditStyles.projectform}>
      <h2 className={EditStyles.h2}>Add a new project to portfolio:</h2>
      <div className={EditStyles.container}>
        <div className={EditStyles.title}>title</div>
        <input
          className={EditStyles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={EditStyles.title}>Description</div>
        <input
          className={EditStyles.input}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <div className={EditStyles.title}>Mobile</div>
        <ImageUploader
          className={EditStyles.imageUploader}
          image={mobileImage}
          onSetImage={setMobileImage}
        />
        {/* <div>Tablet</div>
        <ImageUploader image={tabletImage} onSetImage={setTabletImage} /> */}
        <div className={EditStyles.title}>Desktop</div>
        <ImageUploader
          className={EditStyles.imageUploader}
          image={desktopImage}
          onSetImage={setDesktopImage}
        />
        <div className={EditStyles.title}>Link to Website</div>
        <input
          className={EditStyles.input}
          value={websiteLink}
          onChange={(e) => setWebsiteLink(e.target.value)}
        />
        <div className={EditStyles.title}>Link to Github</div>
        <input
          className={EditStyles.input}
          value={gitLink}
          onChange={(e) => setGitLink(e.target.value)}
        />
        <div className={EditStyles.buttonContainer}>
          <a className={EditStyles.button} onClick={onSubmit}>
            {props.type === 'edit' ? 'Edit' : 'Add'}
          </a>
          <a className={EditStyles.button} href='/admin'>
            Back to admin panel
          </a>
        </div>
      </div>
    </projectform>
  );
};

export default ProjectForm;
