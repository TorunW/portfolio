import LinksStyles from '../styles/Links.module.css';
import Link from 'next/link';

const Links = () => {
  return (
    <links className={LinksStyles.links}>
      <i className='fas fa-envelope'>
        <div>torun.wikstrom@gmail.com</div>
      </i>

      <i className='fab fa-github'>
        <Link href='https://github.com/TorunW'>
          <a>My git</a>
        </Link>
      </i>

      <i className='fab fa-linkedin'></i>
    </links>
  );
};

export default Links;
