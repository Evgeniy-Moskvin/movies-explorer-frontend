import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <section id="techs" className="tech">
      <div className="container">
        <h2 className="section-title section-title_theme_sm-dark-line tech__title">Технологии</h2>

        <p className="tech__heading">7 технологий</p>
        <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <ul className="tech__list">
          <li className="tech__item">HTML</li>
          <li className="tech__item">CSS</li>
          <li className="tech__item">JS</li>
          <li className="tech__item">React</li>
          <li className="tech__item">Git</li>
          <li className="tech__item">Express.js</li>
          <li className="tech__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
