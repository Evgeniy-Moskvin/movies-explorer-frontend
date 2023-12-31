import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer page__footer">
      <div className="container container_block_footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2023</p>

          <ul className="footer__links">
            <li className="footer__links-item">
              <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link link-animate">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a href="https://github.com/Evgeniy-Moskvin" target="_blank" rel="noreferrer" className="footer__link link-animate">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
