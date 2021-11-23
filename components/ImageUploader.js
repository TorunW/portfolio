import { useState } from 'react';
import { server } from '../config/server';
import EditStyles from '../styles/EditProject.module.css';

export default function ImageUploader(props) {
  const [image, setImage] = useState(props.image);
  const [createObjectURL, setCreatedObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreatedObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append('file', image);
    const response = await fetch('/api/file', {
      method: 'POST',
      body,
    });
    const res = await response.json();
    setImage(res.pathname);
    props.onSetImage(res.pathname);
  };

  let imageDisplay;
  if (createObjectURL !== null) {
    imageDisplay = (
      <img
        className={EditStyles.img}
        src={createObjectURL !== null ? createObjectURL : server + '/' + image}
      />
    );
  } else {
    imageDisplay = <h4>Select Image</h4>;
  }
  return (
    <imageuploader>
      <div className={EditStyles.imageUploader}>
        {imageDisplay}

        <input
          className={EditStyles.button}
          type='file'
          name='myImage'
          onChange={uploadToClient}
        />
      </div>
      <div className={EditStyles.buttonContainer}>
        <a
          className={EditStyles.uploadbtn}
          type='submit'
          onClick={uploadToServer}
        >
          Upload image
        </a>
      </div>
    </imageuploader>
  );
}
