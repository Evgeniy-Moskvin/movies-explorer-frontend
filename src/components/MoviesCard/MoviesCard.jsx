import {useEffect, useState} from 'react';
import './MoviesCard.css';
import login from "../Login/Login";


const MoviesCard = ({isSave, movie, handleLike, handleDislike, userMovie = {isSaved: false, id: null}}) => {

  const [isUserMovie, setIsUserMovie] = useState(userMovie.isSaved);

  const durationHours = () => {
    return Math.floor(Number(movie.duration) / 60);
  }

  const durationMinutes = () => {
    return Number(movie.duration) % 60;
  }

  const setLike = (movie) => {
    if (isUserMovie) {
      unsetLike(userMovie.id);
      return;
    }
    handleLike(movie)
      .then((res) => {
        if (res) {
          setIsUserMovie(true);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleSetLike = (evt) => {
    evt.preventDefault();
    setLike(movie);
  }

  const unsetLike = (id) => {
    handleDislike(id)
      .then((res) => {
        if(res) {
          setIsUserMovie(false);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    unsetLike(movie._id);
  }

  useEffect(() => {
    setIsUserMovie(userMovie.isSaved);
  }, [userMovie]);

  return (
    <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="movies-card">
      <figure className="movies-card__inner">
        <img src={isSave ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className="movies-card__image"/>
        <figcaption className="movies-card__body">
          <div className="movies-card__row">
            <h2 className="movies-card__name">{movie.nameRU}</h2>
            {isSave ?
              <button type="button" className="movies-card__button-delete button-animate"
                      onClick={handleDelete}
              ></button>
              : <button type="button"
                        className={`movies-card__button-like button-animate ${isUserMovie ? 'movies-card__button-like_active' : ''}`}
                        onClick={handleSetLike}
              ></button>
            }
          </div>
          <span className="movies-card__duration">{
            durationHours() >= 1 ? `${durationHours()}ч ${durationMinutes()}м` : `${durationMinutes()}м`
          }</span>
        </figcaption>
      </figure>
    </a>
  );
};

export default MoviesCard;
