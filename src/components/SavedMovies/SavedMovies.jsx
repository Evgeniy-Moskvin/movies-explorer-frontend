import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import {SHORT_DURATION} from "../../utils/config";

const SavedMovies = ({isSave, userMovies}) => {

  const [search, setSearch] = useState();
  const [isShort, setIsShort] = useState(false);
  const [moviesFiltered, setMoviesFiltered] = useState(userMovies);
  const [isEmpty, setIsEmpty] = useState(false);

  const filter = (movies, search = '', isShorts) => {
    const result = movies.filter((item) => {
      const movieRu = String(item.nameRU).toLowerCase().trim();
      const movieEn = String(item.nameEN).toLowerCase().trim();
      const query = search.toLowerCase().trim();
      return movieRu.indexOf(query) !== -1 || movieEn.indexOf(query) !== -1;
    });
    return result;
  }

  const filterShorts = (movies) => {
    return movies.filter((item) => item.duration < SHORT_DURATION);
  }

  const handleSearch = (search) => {
    setSearch(search);
  }

  const handleShorts = () => {
    setIsShort(!isShort);
  }

  useEffect(() => {
    const movies = filter(userMovies, search);
    setMoviesFiltered(
      isShort ? filterShorts(movies) : movies
    );
  }, [isShort, search, userMovies]);

  useEffect(() => {
    if (moviesFiltered.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [moviesFiltered]);

  return (
    <main>
      <SearchForm handleSearch={handleSearch} handleShorts={handleShorts} isSave={isSave}/>

      {isEmpty ? <p className="text-empty">Ничего не найдено</p> : (
        <MoviesCardList movies={moviesFiltered} userMovies={userMovies} isSave={isSave}/>
      )}
    </main>
  );
};

export default SavedMovies;
