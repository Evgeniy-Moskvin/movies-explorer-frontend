import React from 'react';
import './MoviesCard.css';
import image from '../../images/movie-image.jpg';

const MoviesCard = ({ isLike, isSave }) => {
  return (
    <figure className="movies-card">
      <img src={image} alt="33 слова о дизайне" className="movies-card__image"/>
      <figcaption className="movies-card__body">
        <div className="movies-card__row">
          <p className="movies-card__name">33 слова о дизайне</p>
          {isSave ?
            <button type="button" className="movies-card__button-delete button-animate"></button>
            : <button type="button" className={`movies-card__button-like button-animate ${isLike && 'movies-card__button-like_active'}`}></button>
          }
        </div>
        <span className="movies-card__duration">1ч 47м</span>
      </figcaption>
    </figure>
  );
};

export default MoviesCard;
