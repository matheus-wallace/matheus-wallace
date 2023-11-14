import '../css/styles/header.css';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="header background-dark default-padding">
      <div className="header__container">
        <a href="/">
          <p className="header__logo font_1_xl-b text-decoration">
            MW<span className="font_1_xl-b white">SP</span>
          </p>
        </a>
        <div className="header__menu">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
