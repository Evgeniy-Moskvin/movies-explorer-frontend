import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({isSave}) => {
  return (
    <>
      {!isSave ?
        <div className="movies-card-list">
          <div className="container container_block_films">
            <ul className="movies-card-list__grid">
              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={false}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={true} isSave={false}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={false}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={false}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={false}/>
              </li>
            </ul>

            <button type="button" className="movies-card-list__button-more button-animate">Ещё</button>
          </div>
        </div>
        :
        <div className="movies-card-list movies-card-list_theme_saved-films">
          <div className="container">
            <ul className="movies-card-list__grid">
              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={true}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={true}/>
              </li>

              <li className="movies-card-list__item">
                <MoviesCard isLike={false} isSave={true}/>
              </li>
            </ul>
          </div>
        </div>
      }
    </>

  );
};

export default MoviesCardList;
