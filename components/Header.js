import styles from '../styles/Header.module.css';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FeedIcon from '@mui/icons-material/Feed';
import { Button } from '@mui/material';

const Header = ({ about }) => {
  return (
    <section id='header' className={styles.header}>
      <Image src='/key.jpg' objectFit='cover' layout='fill' />
      <div className={styles.wrapper}>
        <p className={styles.b}>Frontend Developer</p>
        <p className={styles.a}>Torun Wikström</p>
        <p className={styles.content}>
          {`A multilingual, creative, and solution-focused web developer with
          solid experience of practical programming, using JavaScript - Reactjs, 
          Next.js, Node.js with Typescript, MySQL, SQLite, Html, CSS and Figma 
          skilled at delivering professional, effective and responsive platforms 
          for a diverse range of clients.`}
          <br />
          {`A strong analytical and problem-solving mentality, with a
          collaborative work-style and a proactive attitude. The capacity to
          design, develop and deploy both front and back-end projects, create
          high-quality code, and consider both external UI/UX, and internal
          admin-interface.`}
          <br />
          {`Strong stakeholder management skills, ensuring a
          thorough understanding of client requirements, and managing projects
          efficiently from conception through to design, UAT and launch. Highly
          motivated and passionate about technology, comfortable juggling
          multiple priorities, and keen to develop positive and productive
          working relationships.`}
        </p>
        <div className={styles.buttonContainer}>
          <a href='mailto:torun.wikstrom@gmail.com'>
            <Button
              sx={{
                color: 'white',
                background: '#a33327',
                fontFamily: 'Montserrat',
                '&:hover': { background: '#c7493a' },
              }}
              variant='contained'
            >
              <EmailIcon sx={{ marginRight: 1 }} /> Email
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/torun-alenius-a77011220/'>
            <Button
              sx={{
                color: 'white',
                background: '#a33327',
                fontFamily: 'Montserrat',

                '&:hover': { background: '#c7493a' },
              }}
              variant='contained'
            >
              <LinkedInIcon sx={{ marginRight: 1 }} /> LinkedIn
            </Button>
          </a>
          <a href='https://github.com/TorunW'>
            <Button
              sx={{
                color: 'white',
                background: '#a33327',
                fontFamily: 'Montserrat',

                '&:hover': { background: '#c7493a' },
              }}
              variant='contained'
            >
              <GitHubIcon sx={{ marginRight: 1 }} /> Github
            </Button>
          </a>
          <a href='/resume.pdf'>
            <Button
              sx={{
                color: 'white',
                background: '#a33327',
                fontFamily: 'Montserrat',

                '&:hover': { background: '#c7493a' },
              }}
              variant='contained'
            >
              <FeedIcon sx={{ marginRight: 1 }} />
              Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
