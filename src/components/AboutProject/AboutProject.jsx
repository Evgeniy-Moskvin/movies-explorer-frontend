import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section id="about-project" className="about-project">
      <div className="container">
        <h2 className="section-title about-project__title">О проекте</h2>

        <div className="about-project__row">
          <div className="about-project__col">
            <p className="about-project__heading">Дипломный проект включал 5 этапов</p>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.</p>
          </div>

          <div className="about-project__col">
            <p className="about-project__heading">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <div className="about-project__time-line">
          <div className="about-project__time-col">
            <div className="about-project__time-block about-project__time-block_theme_primary">1 неделя</div>
            <p className="about-project__time-caption">Back-end</p>
          </div>
          <div className="about-project__time-col">
            <div className="about-project__time-block about-project__time-block_theme_secondary">4 недели</div>
            <p className="about-project__time-caption">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
