import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ isSave }) => {

  return (
    <>
      <SearchForm/>
      <MoviesCardList isSave={isSave}/>
    </>
  );
};

export default Movies;
