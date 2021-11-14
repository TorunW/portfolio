import { importDb } from '../../../config/db';
import { useState } from 'react';
import { server } from '../../../config/server';
import Link from 'next/link';

const aboutinfoView = ({ aboutinfo }) => {
  const [title, setTitle] = useState(aboutinfo.title);
  const [infoText, setInfoText] = useState(aboutinfo.info_text);
  const [id, setId] = useState(aboutinfo.id);

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
  }

  return (
    <div>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={infoText} onChange={(e) => setInfoText(e.target.value)} />
        <button onClick={() => onSave(id)}>Save Changes</button>
        <Link href='/admin'>Back to admin panel</Link>
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
