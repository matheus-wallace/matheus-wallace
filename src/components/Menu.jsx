import React, { useState } from 'react';
import HumburguerMenu from '../icons/humburger.svg';

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu(!menu);
    console.log('menu aberto');
  };

  return (
    <div className="menu">
      <img src={HumburguerMenu} alt="menu" className="header__menu" />
    </div>
  );
};

export default Menu;
