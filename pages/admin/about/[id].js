import { importDb } from '../../../config/db';
import { useState } from 'react';
import { server } from '../../../config/server';
import { useEffect } from 'react/cjs/react.development';
import AdminStyles from '../../../styles/Admin.module.css';

const aboutinfoView = ({ aboutinfo }) => {
  const [title, setTitle] = useState(aboutinfo.title);
  const [infoText, setInfoText] = useState(aboutinfo.info_text);
  const [id, setId] = useState(aboutinfo.id);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update === true) {
      setTimeout(() => {
        setUpdate(false);
        window.location.href = '/admin';
      }, 3000);
    }
  }, [update]);

  async function onSave() {
    let newAboutinfo = {
      title,
      info_text: infoText,
    };

    const response = await fetch(`${server}/api/about/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAboutinfo),
    });

    setUpdate(true);
  }

  return (
    <div>
      <div className={AdminStyles.editAbout}>
        <div>title</div>
        <input
          className={AdminStyles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>description</div>
        <textarea
          className={AdminStyles.input}
          value={infoText}
          onChange={(e) => setInfoText(e.target.value)}
        />
        <div className={AdminStyles.buttonContainer}>
          <button className={AdminStyles.button} onClick={() => onSave(id)}>
            Save Changes
          </button>
          <a className={AdminStyles.button} href='/admin'>
            Back to admin panel
          </a>
        </div>
      </div>
    </div>
  );
};

export default aboutinfoView;

export const getServerSideProps = async (context) => {
  const db = await importDb();
  const aboutinfo = await db.get('select * from aboutinfo where id = ?', [
    context.params.id,
  ]);
  return { props: { aboutinfo } };
};
