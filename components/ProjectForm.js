import { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import { server } from '../config/server';
import styles from '../styles/EditProject.module.css';
import TextEditor from './textEditor';

const ProjectForm = (props) => {
  const project = props.project;
  const [title, setTitle] = useState(project ? project.title : '');
  const [about, setAbout] = useState(project ? project.about : '');
  const [desktopImage, setDesktopImage] = useState(
    project ? project.desktop_image : ''
  );
  const [websiteLink, setWebsiteLink] = useState(
    project ? project.website_link : ''
  );
  const [gitLink, setGitLink] = useState(project ? project.git_link : '');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update === true) {
      setTimeout(() => {
        setUpdate(false);
        window.location.reload();
      }, 3000);
    }
  }, [update]);

  async function onSubmit() {
    let newProject = {
      title,
      about,
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
    setUpdate(true);
  }

  return (
    <projectform className={styles.projectform}>
      <h2 className={styles.h2}>Add a new project to portfolio:</h2>
      <div className={styles.container}>
        <div className={styles.title}>title</div>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.title}>Description</div>

        <TextEditor content={about} onUpdate={setAbout} />
        <div className={styles.title}>Desktop</div>
        <ImageUploader
          className={styles.imageUploader}
          image={desktopImage}
          value={desktopImage}
          onSetImage={setDesktopImage}
        />
        <div className={styles.title}>Link to Website</div>
        <input
          className={styles.input}
          value={websiteLink}
          type='text'
          onChange={(e) => setWebsiteLink(e.target.value)}
        />
        <div className={styles.title}>Link to Github</div>
        <input
          className={styles.input}
          value={gitLink}
          onChange={(e) => setGitLink(e.target.value)}
        />
        <div className={styles.buttonContainer}>
          <a className={styles.button} onClick={onSubmit}>
            {props.type === 'edit' ? 'Edit' : 'Add'}
          </a>
          <a className={styles.button} href='/admin'>
            Back to admin panel
          </a>
        </div>
      </div>
    </projectform>
  );
};

export default ProjectForm;
