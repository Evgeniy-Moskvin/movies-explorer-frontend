import { useEffect, useState } from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Preloader from "../Preloader/Preloader";

const Movies = ({ isSave, handleMovies }) => {

    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSearch = () => {
        return handleMovies()
            .then((res) => {
                console.log(res);
                setAllMovies(res);
            })
            .catch((err) => {
                setErrorMessage(err);
                console.error(err);
            })
    }

    //handleSearch();

  return (
    <main>
      <SearchForm/>
      {/*<MoviesCardList isSave={isSave}/>*/}
    </main>
  );
};

export default Movies;
