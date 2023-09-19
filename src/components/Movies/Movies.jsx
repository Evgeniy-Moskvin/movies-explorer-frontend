import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ isSave }) => {

  return (
    <main>
      <SearchForm/>
      <MoviesCardList isSave={isSave}/>
    </main>
  );
};

export default Movies;
