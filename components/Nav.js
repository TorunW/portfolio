// import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    setNavbar(true);
  }, []);

  return (
    <nav className={navbar === true ? styles.nav : styles.navActive}>
      <ul className={styles.menuLeft}>
        <li>
          <a
            onClick={() =>
              document
                .getElementById('about')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              document
                .getElementById('projects')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            My Projects
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact
          </a>
        </li>
      </ul>
      <ul className={styles.menuRight}>
        <li>
          <a
            className={styles.firstbtn}
            href='https://www.linkedin.com/in/torun-alenius-wikström-a77011220'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a className={styles.btn} href='https://github.com/TorunW'>
            <i className='fab fa-github'></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
