import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ main }) => {
  return (
    <header className={`header ${main && 'header_bg-color_blue'}`}>
      <div className="container">
        <div className="header__row">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Лого" className="header__logo-image"/>
          </Link>

          <Navigation/>
        </div>
      </div>
    </header>
  );
};

export default Header;
