import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ promo, loggedIn }) => {
  return (
    <header className={`header ${promo && 'header_bg-color_blue'}`}>
      <div className="container">
        <div className="header__row">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Лого" className="header__logo-image"/>
          </Link>

          <Navigation promo={promo} loggedIn={loggedIn}/>
        </div>
      </div>
    </header>
  );
};

export default Header;