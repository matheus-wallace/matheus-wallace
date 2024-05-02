import CardMobile from 'components/utils/CardMobile';
import Subtitle from 'components/utils/Subtitle';
import './index.css';

const Techs = () => {
  return (
    <section className="default-padding">
      <Subtitle title="Tecnologias" />
      <ul className="techs">
        <CardMobile path={'src/assets/icons/html-mobile.svg'} alt={'html icon'} tech={'HTML'} />
        <CardMobile path={'src/assets/icons/css-mobile.svg'} alt={'css icon'} tech={'CSS'} />
        <CardMobile path={'src/assets/icons/javascript-mobile.svg'} alt={'javascript icon'} tech={'Javascipt'} />
        <CardMobile path={'src/assets/icons/typescript-mobile.svg'} alt={'typescript icon'} tech={'Typescipt'} />
        <CardMobile path={'src/assets/icons/react-mobile.svg'} alt={'react icon'} tech={'React'} />
        <CardMobile path={'src/assets/icons/figma-mobile.svg'} alt={'figma icon'} tech={'Figma'} />
      </ul>
    </section>
  );
};

export default Techs;
