import React from 'react';
import './AboutMe.css';
import photo from '../../images/evgeniy-moskvin.jpg';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="container container_block_about-me">
        <h2 className="section-title about-me__title">Студент</h2>

        <div className="about-me__row">
          <div className="about-me__text-wrap">
            <p className="about-me__name">Евгений</p>
            <p className="about-me__position">Фронтенд-разработчик, 29 лет</p>
            <p className="about-me__text">
              Я родился и живу во Владимире, закончил факультет информационных систем и технологий ВлГУ в 2015 году. Я
              люблю слушать музыку, а ещё увлекаюсь велопрогулками. С 2016 года занимаюсь разработкой сайтов. Благодаря
              курсу я освоил новые для себя технологии и подходы к разработке сайтов и веб-приложений.
            </p>
            <a href="https://github.com/Evgeniy-Moskvin" target="_blank" rel="noreferrer"
               className="about-me__link link-animate">Github</a>
          </div>

          <img src={photo} alt="Евгений Москвин - фронтенд-разработчик" className="about-me__photo"/>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
