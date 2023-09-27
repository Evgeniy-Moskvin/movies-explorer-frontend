import React, {useState} from 'react';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const Login = ({handleLogin}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    formState: {errors, isSubmitting, isValid},
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    handleLogin(data.userEmail, data.userPassword)
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

      <h1 className="user-form__title">Рады видеть!</h1>

      <form name="login" onSubmit={handleSubmit(onSubmit)} className="user-form__form" noValidate>
        <div className="user-form__row">
          <label className="user-form__group">
            <span className="user-form__name">E-mail</span>
            <input id="userEmail" name="email" type="email" placeholder="E-mail"
                   className={`user-form__input ${errors?.userEmail ? 'user-form__input_error' : ''}`}
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
            <input id="userPassword" name="password" type="password" placeholder="Пароль"
                   className={`user-form__input ${errors?.userPassword ? 'user-form__input_error' : ''}`}
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
              <span
                className="user-form__error-message">{errors?.userPassword.message || 'Что-то пошло не так...'}</span>
            )}
          </label>
        </div>

        <div className="user-form__bottom user-form__bottom_offset-top_large">
          <button type="submit"
                  className={`form-button user-form__button button-animate ${(!isValid || isSubmitting) ? 'form-button_disabled' : ''}`}
                  disabled={(!isValid || isSubmitting) ? 'disabled' : false}
          >{isSubmitting ? 'Подождите' : 'Войти'}</button>
          {errorMessage ? (<p className="user-form__text_error">{errorMessage}</p>) : ''}
          <p className="user-form__text">Ещё не зарегистрированы? <Link to="/signup"
                                                                        className="user-form__link link-animate">Регистрация</Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
