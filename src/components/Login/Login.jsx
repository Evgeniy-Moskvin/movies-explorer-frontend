import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="user-form">
      <Link to="/" className="user-form__logo">
        <img src={logo} alt="Лого" className="logo"/>
      </Link>

      <p className="user-form__title">Рады видеть!</p>

      <form className="user-form__form">
        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">Имя</span>
            <input type="text" className="user-form__input"/>
          </label>
        </div>

        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">E-mail</span>
            <input type="email" className="user-form__input"/>
          </label>
        </div>

        <div className="user-form__bottom user-form__bottom_offset-top_large">
          <button type="submit" className="user-form__button button-animate">Войти</button>
          <p className="user-form__text">Ещё не зарегистрированы? <Link to="/signup" className="user-form__link link-animate">Регистрация</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
