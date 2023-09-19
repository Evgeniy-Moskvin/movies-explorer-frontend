import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="user-form">
      <Link to="/" className="user-form__logo link-animate">
        <img src={logo} alt="Лого" className="logo"/>
      </Link>

      <h1 className="user-form__title">Рады видеть!</h1>

      <form className="user-form__form">
        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">E-mail</span>
            <input name="email" type="email" placeholder="E-mail" className="user-form__input" required/>
          </label>
        </div>

        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">Пароль</span>
            <input name="password" type="password" placeholder="Пароль" className="user-form__input" required/>
          </label>
        </div>

        <div className="user-form__bottom user-form__bottom_offset-top_large">
          <button type="submit" className="form-button user-form__button button-animate">Войти</button>
          <p className="user-form__text">Ещё не зарегистрированы? <Link to="/signup" className="user-form__link link-animate">Регистрация</Link></p>
        </div>
      </form>
    </main>
  );
};

export default Login;
