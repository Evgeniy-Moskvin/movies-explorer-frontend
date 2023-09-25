import {useEffect, useState, useContext} from "react";
import './SearchForm.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SearchForm = ({handleShorts, isShorts}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="container container_block_search">
      <div className="search-form">
        <form name="search" className="search-form__form">
          <div className="search-form__search">
            <input name="search" type="search" className="search-form__input" placeholder="Фильм" required/>
            <button type="submit" className="search-form__button button-animate"></button>
          </div>

          <label className="search-form__switcher">
            <input name="shorts" type="checkbox" className="search-form__checkbox"
              onChange={(evt) => {
                handleShorts(evt.target.checked);
              }}
            />
            <span className="search-form__custom-checkbox"></span>
            <span className="search-form__switcher-text">Короткометражки</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
