import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav-tab">
      <div className="container">
        <ul className="nav-tab__list">
          <li className="nav-tab__item">
            <a href="#about-project" className="nav-tab__link link-animate">О проекте</a>
          </li>
          <li className="nav-tab__item">
            <a href="#techs" className="nav-tab__link link-animate">Технологии</a>
          </li>
          <li className="nav-tab__item">
            <a href="#about-me" className="nav-tab__link link-animate">Студент</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavTab;
