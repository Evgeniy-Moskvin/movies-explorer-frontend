import {useEffect, useState, useContext} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Preloader from "../Preloader/Preloader";

const Movies = ({isSave, handleMovies}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isShorts, setIsShorts] = useState(null);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleShorts = (isShorts) => {
    console.log('do shorts', isShorts);
    setIsShorts(isShorts);

  }

  const handleSearch = () => {
    return handleMovies()
      .then((res) => {
        setAllMovies(res);
      })
      .catch((err) => {
        setErrorMessage(err);
      })
  }

  return (
    <main>
      <SearchForm handleShorts={handleShorts}/>
      <MoviesCardList isSave={isSave} allMovies={handleSearch} isShorts={isShorts}/>
    </main>
  );
};

export default Movies;
