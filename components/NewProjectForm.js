import { useState } from 'react/cjs/react.development';
import { getServerSideProps } from '../pages/admin';

const NewProjectForm = (props) => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [mobileImage, setMobileImage] = useState('');
  const [tabletImage, setTabletImage] = useState('');
  const [desktopImage, setDesktopImage] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [gitLink, setGitLink] = useState('');

  function onSubmit() {
    let newProject = {
      title,
      about,
      mobile_image: mobileImage,
      tablet_image: tabletImage,
      desktop_image: desktopImage,
      website_link: websiteLink,
      git_link: gitLink,
    };

    props.onSubmit(newProject);
  }

  return (
    <newprojectform>
      <h2>Add a new project to portfolio:</h2>
      <div>title</div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>Description</div>
      <input value={about} onChange={(e) => setAbout(e.target.value)} />
      <div>
        Images
        <div>Mobile</div>
        <input
          value={mobileImage}
          onChange={(e) => setMobileImage(e.target.value)}
        />
        <div>Tablet</div>
        <input
          value={tabletImage}
          onChange={(e) => setTabletImage(e.target.value)}
        />
        <div>Desktop</div>
        <input
          value={desktopImage}
          onChange={(e) => setDesktopImage(e.target.value)}
        />
      </div>
      <div>Link to Website</div>
      <input
        value={websiteLink}
        onChange={(e) => setWebsiteLink(e.target.value)}
      />
      <div>Link to Github</div>
      <input value={gitLink} onChange={(e) => setGitLink(e.target.value)} />
      <a onClick={onSubmit}>Add +</a>
    </newprojectform>
  );
};

export default NewProjectForm;
