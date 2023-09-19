import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="user-form">
      <Link to="/" className="user-form__logo link-animate">
        <img src={logo} alt="Лого" className="logo"/>
      </Link>

      <p className="user-form__title">Добро пожаловать!</p>

      <form className="user-form__form">
        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">Имя</span>
            <input name="name" type="text" placeholder="Имя" className="user-form__input" required minLength="2" maxLength="30"/>
          </label>
        </div>

        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">E-mail</span>
            <input name="email" type="email" placeholder="E-mail" className="user-form__input" required/>
          </label>
        </div>

        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">Пароль</span>
            <input name="password" type="password" placeholder="Пароль" className="user-form__input user-form__input_error" required/>
            <span className="user-form__error-message">Что-то пошло не так...</span>
          </label>
        </div>

        <div className="user-form__bottom">
          <button type="submit" className="user-form__button button-animate">Зарегистрироваться</button>
          <p className="user-form__text">Уже зарегистрированы? <Link to="/signin" className="user-form__link link-animate">Войти</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
