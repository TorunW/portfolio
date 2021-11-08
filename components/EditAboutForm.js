import { useState } from 'react/cjs/react.development';

const EditAboutForm = (props) => {
  const [title, setTitle] = useState('');
  const [infoText, setInfoText] = useState('');

  function onSubmit() {
    let newAboutInfo = {
      title,
      info_text: infoText,
    };

    props.onSubmit(newAboutInfo);
  }

  return (
    <newaboutform>
      <h2>Edit About</h2>

      {infos.map((aboutinfo, index) => (
        <div key={index} aboutinfo={aboutinfo}>
          <input>{aboutinfo.title}</input>
          <input>{aboutinfo.info_text}</input>
        </div>
      ))}
      <div>title</div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>text</div>
      <input value={infoText} onChange={(e) => setInfoText(e.target.value)} />
      <a onClick={onSubmit}>Add +</a>
    </newaboutform>
  );
};

export default EditAboutForm;
