import aboutStyles from '../styles/About.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <about className={aboutStyles.about} id='about'>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
        integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      />
      <div className={aboutStyles.container}>
        <div className={aboutStyles.custom}>
          <svg
            className={aboutStyles.svg}
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
              className={aboutStyles.shape}
            ></path>
          </svg>
        </div>
      </div>
      <div className={aboutStyles.contentContainer}>
        <div className={aboutStyles.content}>
          <h1 className={aboutStyles.h2}>About</h1>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </div>
    </about>
  );
};

export default About;
