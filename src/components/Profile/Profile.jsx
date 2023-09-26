import React, {useContext, useEffect, useState} from 'react';
import './Profile.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useForm} from "react-hook-form";

const Profile = ({handleUpdateUser, handleLogOut}) => {
  const currentUser = useContext(CurrentUserContext);

  const [isEdit, setIsEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    reset({
      userName: currentUser.name,
      userEmail: currentUser.email,
    });
  }, [currentUser]);


  const {
    register,
    formState: {errors, isSubmitting, isValid, isDirty},
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userName: currentUser.name,
      userEmail: currentUser.email,
    },
  });

  const onSubmit = (data) => {
    handleUpdateUser(data)
      .then(() => {
        alert('Профиль успешно обновлён');
        setErrorMessage('');
        setIsEdit(false);
      })
      .catch((err) => {
        setErrorMessage('Что-то пошло не так...');
        if (err === 'Ошибка: 409') {
          setErrorMessage('Пользователь с данным E-mail уже зарегистрирован!');
        }
        console.error(err);
      });
  }

  const doEdit = (evt) => {
    evt.preventDefault();
    setIsEdit(true);
  }

  const logOut = () => {
    handleLogOut();
  }

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}</h1>

      <form name="profile" className="profile__form user-form" onSubmit={handleSubmit(onSubmit)}>
        <ul className="profile__info">
          <li className="profile__row">
            <label className="profile__group user-form__group">
              <span className="profile__name">Имя</span>
              <input id="userName" type="text" name="name"
                     className={`profile__input ${errors?.userName ? 'profile__input_error' : ''}`}
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
                     disabled={(!isEdit || isSubmitting) ? 'disabled' : false}
              />
              {errors?.userName && (
                <span className="user-form__error-message">{errors?.userName.message || 'Что-то пошло не так...'}</span>
              )}
            </label>
          </li>

          <li className="profile__row">
            <label className="profile__group user-form__group">
              <span className="profile__name">E-mail</span>
              <input id="userEmail" type="text" name="email"
                     className={`profile__input ${errors?.userEmail ? 'profile__input_error' : ''}`}
                     {...register('userEmail', {
                       required: 'Пожалуйста, укажите E-mail',
                       pattern: {
                         value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                         message: 'E-mail введен некорректно',
                       }
                     })}
                     disabled={(!isEdit || isSubmitting) ? 'disabled' : false}
              />
              {errors?.userEmail && (
                <span
                  className="user-form__error-message">{errors?.userEmail.message || 'Что-то пошло не так...'}</span>
              )}
            </label>
          </li>
        </ul>

        <ul className="profile__controls">
          {!isEdit ?
            <>
              <li className="profile__controls-item">
                <button type="button" className="profile__controls-button button-animate"
                        onClick={doEdit}
                >Редактировать
                </button>
              </li>
              <li className="profile__controls-item">
                <button type="button"
                        className="profile__controls-button profile__controls-button_logout button-animate"
                        onClick={logOut}>Выйти из аккаунта
                </button>
              </li>
            </>
            :
            <li className="profile__controls-item">
              {errorMessage && (
                <span className="profile__error-message">{errorMessage}</span>
              )}
              <button
                type="submit"
                className={`form-button button-animate ${(!isDirty || !isValid || isSubmitting) ? 'form-button_disabled' : ''}`}
                disabled={(!isDirty || !isValid || isSubmitting) ? 'disabled' : false}
              >{isSubmitting ? 'Подождите' : 'Сохранить'}</button>
            </li>
          }

        </ul>
      </form>
    </main>
  );
};

export default Profile;
