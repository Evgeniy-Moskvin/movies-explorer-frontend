import React from 'react';
import logo from '../../images/logo.svg';

import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useForm } from "react-hook-form";

const Register = ({ handleRegister }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    handleRegister(data.userName, data.userEmail, data.userPassword)
      .then(() => {
        setErrorMessage('');
        reset();
      })
      .catch((err) => {
        setErrorMessage('Что-то пошло не так...');
        if (err === 'Ошибка: 409') {
          setErrorMessage('Пользователь с данным E-mail уже зарегистрирован!');
        }
          console.error(err);
      });
  }


  return (
    <main className="user-form">
      <Link to="/" className="user-form__logo link-animate">
        <img src={logo} alt="Лого" className="logo"/>
      </Link>

      <h1 className="user-form__title">Добро пожаловать!</h1>

      <form name="register" onSubmit={handleSubmit(onSubmit)} className="user-form__form" noValidate>
        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">Имя</span>
            <input id="userName" name="name" type="text" placeholder="Имя" className={`user-form__input ${errors?.userName ? 'user-form__input_error' : ''}`}
               {...register('userName', {
                 required: 'Пожалуйста, укажите имя',
                 minLength: {
                   value: 2,
                   message: 'Имя должно состоять минимум из 2 букв',
                 },
                 maxLength: {
                   value: 30,
                   message: 'Имя не может содержать более 30 букв',
                 },
                 pattern: {
                   value: /^[A-zА-яё ]{2,30}$/,
                   message: 'Имя должно состоять только из букв и пробела',
                 }
               })}
               disabled={(isSubmitting) ? 'disabled' : false}
            />
            {errors?.userName && (
              <span className="user-form__error-message">{errors?.userName.message || 'Что-то пошло не так...'}</span>
            )}
          </label>
        </div>

        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">E-mail</span>
            <input id="userEmail" name="email" type="email" placeholder="E-mail" className={`user-form__input ${errors?.userEmail ? 'user-form__input_error' : ''}`}
               {...register('userEmail', {
                 required: 'Пожалуйста, укажите E-mail',
                 pattern: {
                   value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                   message: 'E-mail введен некорректно',
                 }
               })}
                   disabled={(isSubmitting) ? 'disabled' : false}
            />
            {errors?.userEmail && (
              <span className="user-form__error-message">{errors?.userEmail.message || 'Что-то пошло не так...'}</span>
            )}
          </label>
        </div>

        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">Пароль</span>
            <input id="userPassword" name="password" type="password" placeholder="Пароль" className={`user-form__input ${errors?.userPassword ? 'user-form__input_error' : ''}`}
               {...register('userPassword', {
                 required: 'Пожалуйста, задайте пароль',
                 minLength: {
                   value: 6,
                   message: 'Пароль должен состоять минимум из 6 символов',
                 },
               })}
                   disabled={(isSubmitting) ? 'disabled' : false}
            />
            {errors?.userPassword && (
              <span className="user-form__error-message">{errors?.userPassword.message || 'Что-то пошло не так...'}</span>
            )}
          </label>
        </div>

        <div className="user-form__bottom">
          <button type="submit" className={`form-button button-animate ${(!isValid || isSubmitting) ? 'form-button_disabled' : ''}`}
            disabled={(!isValid || isSubmitting) ? 'disabled' : false}
          >{isSubmitting ? 'Подождите' : 'Зарегистрироваться'}</button>
          {errorMessage ? (<p className="user-form__text_error">{errorMessage}</p>) : ''}
          <p className="user-form__text">Уже зарегистрированы? <Link to="/signin" className="user-form__link link-animate">Войти</Link></p>
        </div>
      </form>
    </main>
  );
};

export default Register;
