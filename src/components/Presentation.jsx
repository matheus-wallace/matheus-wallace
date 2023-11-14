import React from 'react';
import '../css/styles/presentation.css';

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation__container">
        <ul className="presentation__menu">
          <li className="active font_1_s-b">Formação</li>
          <li className="font_1_s-b">Experiência</li>
          <li className="font_1_s-b">Projetos</li>
          <li className="font_1_s-b">Contato</li>
        </ul>
      </div>
    </section>
  );
};

export default Presentation;
