// import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
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
    </nav>
  );
};

export default Nav;
