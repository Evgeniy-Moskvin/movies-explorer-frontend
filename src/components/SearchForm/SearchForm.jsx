import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="container container_block_search">
      <div className="search-form">
        <form className="search-form__form">
          <div className="search-form__search">
            <input type="search" className="search-form__input" placeholder="Фильм"/>
            <button type="submit" className="search-form__button button-animate"></button>
          </div>

          <label className="search-form__switcher">
            <input type="checkbox" className="search-form__checkbox"/>
            <span className="search-form__custom-checkbox"></span>
            <span className="search-form__switcher-text">Короткометражки</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
