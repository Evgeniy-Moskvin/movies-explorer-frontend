import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <p className="profile__title">Привет, Евгений!</p>

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
            <button type="button" className="profile__controls-button profile__controls-button_logout button-animate">Выйти из аккаунта</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Profile;
