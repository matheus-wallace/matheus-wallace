import photo from '../../assets/img/Photo.png';
import Subtitle from '../utils/Subtitle';
import '../../css/styles/bio.css';
import { useEffect, useState } from 'react';
import updateAge from '../../toolBox/updateAge';

const Bio = () => {
  const [age, setAge] = useState(23);

  useEffect(() => {
    setAge(updateAge());
  }, [age]);

  return (
    <main className="bio default-padding">
      <Subtitle title="Sobre mim" />
      <div className="bio__avatar">
        <img src={photo} alt="matheus pereira" />
      </div>
      <h2 className="bio__name font_1_l-m title">Matheus Wallace da Silva Pereira</h2>
      <p className="bio__description regular-text font_1_s">
        Olá, meu nome é <span className="text-decoration ">Matheus</span>, tenho {age} anos e em 2018 conheci o mundo da{' '}
        <span className="text-decoration ">engenharia de software</span>, por conta disso decidi começar uma carreira
        com <span className="text-decoration">desenvolvimento front-end.</span> Atualmente estou no último semestre do
        curso de <span className="text-decoration">análise e desenvolvimento de sistemas</span> e trabalhando com{' '}
        <span className="text-decoration">react native</span>
      </p>
    </main>
  );
};

export default Bio;
