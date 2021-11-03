import LinksStyles from '../styles/Links.module.css';
import Link from 'next/link';

const Links = () => {
  return (
    <links className={LinksStyles.links}>
      <i className='fas fa-envelope'></i>
      <div>torun.wikstrom@gmail.com</div>
      <i className='fab fa-github'></i>
      <Link href='https://github.com/TorunW'>
        <a>My git</a>
      </Link>
      <i className='fab fa-linkedin'></i>
    </links>
  );
};

export default Links;
