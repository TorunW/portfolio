import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <section className={styles.header}>
      <div>
        <p className={styles.b}>Frontend Developer</p>
        <p className={styles.a}>Torun Wikström</p> <br />
      </div>
    </section>
  );
};

export default Header;
