import { useState, useEffect } from "react";
import './Navigation.css';
import { useLocation, NavLink } from "react-router-dom";

const Navigation = ({ promo, loggedIn }) => {

  const [isOpen, setOpen] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="navigation">

      { loggedIn ?
        <>
          <ul className="navigation__list navigation__list_device_desktop">
            <li className="navigation__item">
              <NavLink to="/movies" className="navigation__link link-animate">Фильмы</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/saved-movies" className="navigation__link link-animate">Сохранённые фильмы</NavLink>
            </li>
          </ul>

          <ul className="navigation__list navigation__list_user navigation__list_device_desktop">
            <li className="navigation__item">
              <NavLink to="/profile" className={`navigation__link-profile link-animate ${promo ? 'navigation__link-profile_theme_blue' : ''}`}>Аккаунт</NavLink>
            </li>
          </ul>

          <button type="button" className="navigation__button-menu" onClick={() => {setOpen(!isOpen)}}></button>
        </>
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

      <div className={`navigation__mobile ${isOpen ? 'navigation__mobile_active' : ''}`}>
        <button type="button" className="navigation__button-close" onClick={() => {setOpen(!isOpen)}}></button>

        <ul className="navigation__mobile-list">
          <li className="navigation__mobile-item">
            <NavLink to="/" className={({isActive}) => `navigation__mobile-link link-animate ${isActive ? 'navigation__mobile-link_active' : ''}`}>Главная</NavLink>
          </li>
          <li className="navigation__mobile-item">
            <NavLink to="/movies" className={({isActive}) => `navigation__mobile-link link-animate ${isActive ? 'navigation__mobile-link_active' : ''}`}>Фильмы</NavLink>
          </li>
          <li className="navigation__mobile-item">
            <NavLink to="/saved-movies" className={({isActive}) => `navigation__mobile-link link-animate ${isActive ? 'navigation__mobile-link_active' : ''}`}>Сохранённые фильмы</NavLink>
          </li>
          <li className="navigation__mobile-item">
            <NavLink to="/profile" className="navigation__link-profile link-animate">Аккаунт</NavLink>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navigation;
