import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Евгений!</h1>

      <form className="profile__form">
        <ul className="profile__info">
          <li className="profile__row">
            <span className="profile__name">Имя</span>
            <input type="text" name="name" value="Виталий" className="profile__input"/>
          </li>

          <li className="profile__row">
            <span className="profile__name">E-mail</span>
            <input type="text" name="name" value="pochta@yandex.ru" className="profile__input"/>
          </li>
        </ul>

        <ul className="profile__controls">
          <li className="profile__controls-item">
            <button type="submit" className="profile__controls-button button-animate">Редактировать</button>
          </li>
          <li className="profile__controls-item">
            <Link to="/signin" className="profile__controls-button profile__controls-button_logout button-animate">Выйти из аккаунта</Link>
          </li>
        </ul>
      </form>
    </main>
  );
};

export default Profile;
