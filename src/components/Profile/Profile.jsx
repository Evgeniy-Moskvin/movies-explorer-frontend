import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEdit, setIsEdit] = useState();
  const [err, setErr] = useState();

  const name = 'Евгений';
  const email = 'pochta@yandex.ru';

  useEffect(() => {
    setIsEdit(false);
    setErr(false);
  }, []);

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Евгений!</h1>

      <form className="profile__form">
        <ul className="profile__info">
          <li className="profile__row">
            <span className="profile__name">Имя</span>
            <input type="text" name="name" value={name} className="profile__input" disabled={!isEdit ? 'disabled' : ''}/>
          </li>

          <li className="profile__row">
            <span className="profile__name">E-mail</span>
            <input type="text" name="name" value={email} className="profile__input" disabled={!isEdit ? 'disabled' : ''}/>
          </li>
        </ul>

        <ul className="profile__controls">
          {!isEdit ?
            <>
              <li className="profile__controls-item">
                <button type="button" className="profile__controls-button button-animate" onClick={(e) => {setIsEdit(true)}}>Редактировать</button>
              </li>
              <li className="profile__controls-item">
                <Link to="/signin" className="profile__controls-button profile__controls-button_logout button-animate">Выйти из аккаунта</Link>
              </li>
            </>
            :
              <li className="profile__controls-item">
                <span className="profile__error-message">При обновлении профиля произошла ошибка.</span>
                <button
                  type="button"
                  className={`form-button button-animate ${err ? 'form-button_disabled' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setErr(true);
                  }}
                  disabled={err ? 'disabled' : ''}
                >Сохранить</button>
              </li>
            }

        </ul>
      </form>
    </main>
  );
};

export default Profile;
