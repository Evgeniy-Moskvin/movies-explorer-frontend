import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = ({ promo, loggedIn }) => {
  return (
    <nav className="navigation">
      { !promo &&
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/movies" className="navigation__link link-animate">Фильмы</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/saved-movies" className="navigation__link link-animate">Сохранённые фильмы</NavLink>
          </li>
        </ul>
      }

      { loggedIn ?
        <ul className="navigation__list navigation__list_user">
          <li className="navigation__item">
            <NavLink to="/profile" className="navigation__link navigation__link_profile link-animate">Аккаунт</NavLink>
          </li>
        </ul>
        :
        <ul className="navigation__list navigation__list_user">
          <li className="navigation__item">
            <NavLink to="/signup" className="navigation__link link-animate">Регистрация</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/signin" className="navigation__button button-animate">Войти</NavLink>
          </li>
        </ul>
      }
    </nav>
  );
};

export default Navigation;
