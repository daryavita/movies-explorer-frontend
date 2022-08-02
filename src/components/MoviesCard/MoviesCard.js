import { useState } from "react";
import { MOVIES_API_BASE_URL } from "../../utils/MoviesApi";
import "./MoviesCard.css";

function MoviesCard({ isSaved, movie }) {
  const [isLiked, setIsLiked] = useState(false);
  const saveBtnClassName = `movies-card__save-btn ${
    isLiked ? "movies-card__save-btn_on" : "movies-card__save-btn_off"
  }`;

  const handleSaveBtn = () => {
    setIsLiked(!isLiked);
  };

  // console.log('movie', movie)

  const durationMovie = Math.trunc(movie.duration/60) + 'ч ' + movie.duration % 60 + 'м'

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <div>
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <p className="movies-card__duration">{durationMovie}</p>
        </div>
        <button
          className={isSaved ? "no-display" : saveBtnClassName}
          onClick={handleSaveBtn}
        ></button>
        <button
          className={isSaved ? "movies-card__delete-btn" : "no-display"}
        ></button>
      </div>
      <img className="movies-card__img" src={MOVIES_API_BASE_URL + movie.image.url} alt={movie.nameRU.toLowerCase()}></img>
    </article>
  );
}

export default MoviesCard;
