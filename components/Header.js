import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div>
        HELLO <br /> I'M <br />
        <b>
          TORUN<b className={headerStyles.dot}>.</b>
        </b>
      </div>
    </header>
  );
};

export default Header;
