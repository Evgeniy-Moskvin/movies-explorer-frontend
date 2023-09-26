import { useEffect, useState } from 'react';
import './MoviesCard.css';


const MoviesCard = ({isSave, movie, isLike, savedMovie = {isSaved: false, id: null}}) => {

    const [isUserMovie, setIsUserMovie] = useState(savedMovie.isSaved);

    const durationHours = () => {
        return Math.floor(Number(movie.duration) / 60);
    }

    const durationMinutes = () => {
        return Number(movie.duration) % 60;
    }

    const handleLike = () => {

    }

    useEffect(() => {
        console.log(savedMovie.isSaved);

        setIsUserMovie(savedMovie.isSaved);
    }, [savedMovie]);

    return (
        <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="movies-card">
            <figure className="movies-card__inner">
                <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className="movies-card__image"/>
                <figcaption className="movies-card__body">
                    <div className="movies-card__row">
                        <h2 className="movies-card__name">{movie.nameRU}</h2>
                        {isSave ?
                            <button type="button" className="movies-card__button-delete button-animate"></button>
                            : <button type="button"
                                className={`movies-card__button-like button-animate ${isLike && 'movies-card__button-like_active'}`}

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
