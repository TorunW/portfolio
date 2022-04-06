import aboutStyles from '../styles/About.module.css';

const About = ({ about }) => {
  return (
    <about className={aboutStyles.about} id='about'>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
        integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
        crossOrigin='anonymous'
        referrerpolicy='no-referrer'
      />
      <div className={aboutStyles.contentContainer}>
        {about.map((a, i) => (
          <div key={i} a={a} className={aboutStyles.content}>
            <h1 className={aboutStyles.h2}>{a.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: a.info_text }}></div>
            <div className={aboutStyles.buttonContainer}>
              <a
                className={aboutStyles.firstbtn}
                href='mailto:torun.wikstrom@gmail.com'
              >
                <i className='fas fa-envelope'></i>
                Email
              </a>
              <a
                className={aboutStyles.firstbtn}
                href='https://www.linkedin.com/in/torun-alenius-a77011220/'
              >
                <i className='fab fa-linkedin'></i>LinkedIn
              </a>
              <a className={aboutStyles.btn} href='https://github.com/TorunW'>
                <i className='fab fa-github'></i>github
              </a>
              <a className={aboutStyles.btn} href='/resume.pdf'>
                <i class='fas fa-file-alt'></i>Resume
              </a>
            </div>
          </div>
        ))}
      </div>
    </about>
  );
};

export default About;
