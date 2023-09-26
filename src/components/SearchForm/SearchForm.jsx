import React, {useEffect, useState, useContext} from "react";
import './SearchForm.css';
import {set, useForm} from "react-hook-form";

const SearchForm = ({handleSearch, handleShorts, isShorts, isSave}) => {

  const {
    register,
    setValue,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  })

  const onSubmit = (data) => {
    console.log('onSubmit',data);
    return new Promise((resolve) => {
      const result = handleSearch(data.search, data.toggleShorts);
        console.log(result);
        resolve(result);
    });
  };

  const changeShorts = (evt) => {
    handleShorts(evt.target.checked);
  }

  useEffect(() => {
    const search = localStorage.getItem('search') || '';
    const isShorts = localStorage.getItem('isShorts');

    (!isSave && isShorts === 'true') && setValue('toggleShorts', true);

    (!isSave && search) && setValue('search', search);
  }, []);

  return (
    <div className="container container_block_search">
      <div className="search-form">
        <form name="search" className="search-form__form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="search-form__search">
              <label className="search-form__group">
                  <input id="search" name="search" type="search" className="search-form__input" placeholder="Фильм"
                     {...register('search', {
                         required: 'Нужно ввести ключевое слово',
                     })}
                  />
                  {errors?.search && (
                      <span className="search-form__error-message">{errors?.search.message || 'Что-то пошло не так...'}</span>
                  )}
              </label>
            <button type="submit" className="search-form__button button-animate" disabled={(!isValid || isSubmitting) ? 'disabled' : false}></button>
          </div>

          <label className="search-form__switcher">
            <input id="toggleShorts" name="shorts" type="checkbox" className="search-form__checkbox"
                {...register('toggleShorts')}
                onChange={changeShorts}
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
