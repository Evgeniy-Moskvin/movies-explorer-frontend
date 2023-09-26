import {useEffect, useState, useContext} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {SHORT_DURATION} from "../../utils/config";

import Preloader from "../Preloader/Preloader";

const Movies = ({isSave, handleMovies}) => {
  const currentUser = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]); // Все фильмы
  const [moviesInit, setMoviesInit] = useState([]); // Загруженные фильмы
  const [isShorts, setIsShorts] = useState(null); // Checkbox короткометражек
  const [moviesFiltered, setMoviesFiltered] = useState([]); // Отфильтрованные фильмы


  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);


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
    console.log('do filterShorts');
    /*return movies.filter((item) => item.duration < SHORT_DURATION);*/
  }


  const handleShorts = (isShorts) => {
    console.log('handleShorts', isShorts);
    setIsShorts(isShorts);
    localStorage.setItem('isShorts', isShorts);

    if (isShorts) {
      setMoviesFiltered(filterShorts(moviesInit));
      console.log('SHORTS moviesFiltered', moviesFiltered);
    } else {
      setMoviesFiltered(moviesFiltered);
      console.log('FULL moviesFiltered', moviesFiltered);
    }
  }

  const handleFilter = (movies, search, isShorts) => {
    const result = filter(movies, search, isShorts);
    console.log('MOVIES | filter', result);

    setMoviesInit(result);
    setMoviesFiltered(isShorts ? filterShorts(result) : result);
    localStorage.setItem('movies', JSON.stringify(result));
  }

  const handleSearch = (search, isShorts) => {
    console.log('MOVIES | handleSearch');

    localStorage.setItem('search', search);
    localStorage.setItem('isShorts', isShorts);

    if (movies.length === 0) {
      setIsLoading(true);
      return handleMovies()
        .then((movies) => {
          setMovies(movies);
          handleFilter(movies, search, isShorts);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      handleFilter(movies, search, isShorts);
    }
  }


  useEffect(() => {
    localStorage.getItem('isShorts') === 'true' ? setIsShorts(true) : setIsShorts(false);

    if (localStorage.getItem('movies')) {
      const movies = localStorage.getItem('movies');
      setMoviesInit(JSON.parse(movies));
      localStorage.getItem('isShorts') === 'true' ? setMoviesFiltered(filterShorts(movies)) : setMoviesFiltered(movies);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('search')) {

    }
  }, [moviesFiltered]);

  return (
    <main>
      <SearchForm handleSearch={handleSearch} handleShorts={handleShorts} isShorts={isShorts} isSave={isSave}/>

      {isLoading ? (
          <Preloader/>
      ) : (
          <MoviesCardList movies={movies} isShorts={isShorts} isSave={isSave}/>
      )}
    </main>
  );
};

export default Movies;
