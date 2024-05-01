import { useState } from 'react';
import HumburguerMenu from 'assets/icons/humburger.svg';

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu(!menu);
    menu ? console.log('menu fechado') : console.log('menu aberto');
  };

  return <img src={HumburguerMenu} alt="menu" className="header__menu" onClick={toogleMenu} />;
};

export default Menu;
