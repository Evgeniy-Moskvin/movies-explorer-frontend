import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <div className="movies-card-list">
      <div className="container">
        <ul className="movies-card-list__grid">
          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={true}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>

          <li className="movies-card-list__item">
            <MoviesCard isLike={false}/>
          </li>
        </ul>

        <button type="button" className="movies-card-list__button-more button-animate">Ещё</button>
      </div>
    </div>
  );
};

export default MoviesCardList;
