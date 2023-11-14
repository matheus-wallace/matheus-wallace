import React from 'react';
import photo from '../img/Photo.png';
import Subtitle from './Subtitle';
import '../css/styles/bio.css';

const Bio = () => {
  return (
    <main className="bio default-padding">
      <Subtitle title="Sobre mim" />
      <div className="bio__avatar">
        <img src={photo} alt="matheus pereira" />
      </div>
      <h2 className="bio__name font_1_l-m title">Matheus Wallace da Silva Pereira</h2>
      <p className="bio__description regular-text font_1_s">
        Olá, meu nome é <span className="text-decoration ">Matheus</span> e tenho 22 anos, em 2018 conheci o mundo da{' '}
        <span className="text-decoration ">engenharia de software</span> e atualmente estou cursando
        <span className="text-decoration "> análise e desenvolvimento de sistemas</span>. Meu objetivo é realizar a
        transição de carreira me tornar um desenvolvedor <span className="text-decoration ">fron-end</span>.
      </p>
    </main>
  );
};

export default Bio;
