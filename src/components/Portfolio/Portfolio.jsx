import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__links-item">
            <a href="https://github.com/Evgeniy-Moskvin/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__link link-animate">Статичный сайт</a>
          </li>
          <li className="portfolio__links-item">
            <a href="https://evgeniy-moskvin.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link link-animate">Адаптивный сайт</a>
          </li>
          <li className="portfolio__links-item">
            <a href="https://evgeniy-moskvin.github.io/mesto/" target="_blank" rel="noreferrer" className="portfolio__link link-animate">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
