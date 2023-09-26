import './MoviesCardList.css';

import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import MoviesCard from '../MoviesCard/MoviesCard';
import {MOVIES_ON_SIZES} from "../../utils/config";
import savedMovies from "../SavedMovies/SavedMovies";
import login from "../Login/Login";


const MoviesCardList = ({ movies, isShorts, isSave}) => {

  const size = useWindowSize();
  const [isMount, setIsMount] = useState(true);
  const [showMovieList, setShowMovieList] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState({
    INIT_COUNT_RENDER: 12,
    INIT_COUNT_ROW: 4,
  });
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  const initCountRender = showMovieList.length;
  const lastCountRender = initCountRender + moviesDetails.INIT_COUNT_ROW;
  const moreCount = movies.length - initCountRender;

  const handleMore = () => {
    if (moreCount > 0) {
      const moreMovies = movies.slice(initCountRender, lastCountRender);
      setShowMovieList([...showMovieList, ...moreMovies]);
    }
    (moreCount ? setIsEmptySearch(false) : setIsEmptySearch(true));
  }

  useEffect(() => {
    if (!isSave) {
      if (size.width >= MOVIES_ON_SIZES.MD.WIDTH) {
        setMoviesDetails(MOVIES_ON_SIZES.LG);
      } else if (size.width >= MOVIES_ON_SIZES.SM.WIDTH && size.width < MOVIES_ON_SIZES.MD.WIDTH) {
        setMoviesDetails(MOVIES_ON_SIZES.MD);
      } else {
        setMoviesDetails(MOVIES_ON_SIZES.SM);
      }

      return () => setIsMount(false);
    }
  }, [size.width, isMount]);

  useEffect(() => {
    if (isSave) {
      setShowMovieList(movies);
      return;
    }
    if (movies.length) {
      const result = movies.filter((item, i) =>
        i < moviesDetails.INIT_COUNT_RENDER
      );
      setShowMovieList(result);
    }
    (moreCount ? setIsEmptySearch(false) : setIsEmptySearch(true))
  }, [movies, moviesDetails.INIT_COUNT_RENDER]);

  return (
    <>
      {!isSave ?
        <div className={`movies-card-list`}>
          <div className="container container_block_films">
            <ul className="movies-card-list__grid">
              {showMovieList.map((movie) => (
                  <li key={movie.id} className="movies-card-list__item">
                    <MoviesCard
                      isSave={isSave}
                      movie={movie}
                      isLike={false}
                    />
                  </li>
              ))}
            </ul>
            {
              !isSave &&
              showMovieList.length >= MOVIES_ON_SIZES.SM.INIT_COUNT_ROW && showMovieList.length < movies.length && (
                    <button type="button" className="movies-card-list__button-more button-animate" onClick={handleMore}>Ещё</button>
                )
            }
          </div>
        </div>
        :
        <div className="movies-card-list movies-card-list_theme_saved-films">
          <div className="container">
            {/*<ul className="movies-card-list__grid">
              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={true}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={true}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={true}/>
              </li>
            </ul>*/}
          </div>
        </div>
      }
    </>

  );
};

export default MoviesCardList;
