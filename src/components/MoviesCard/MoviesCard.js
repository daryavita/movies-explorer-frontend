import { MOVIES_API_BASE_URL } from "../../utils/MoviesApi";
import "./MoviesCard.css";
import { defaultImg } from "../../utils/constants";

function MoviesCard({
  isSaved,
  movie,
  saveMovie,
  deleteSaveMovie,
  savedMovies,
}) {
  const durationMovie =
    Math.trunc(movie.duration / 60) + "ч " + (movie.duration % 60) + "м";
  const isSavedMovies =
    movie.id && savedMovies.some((m) => m.movieId === movie.id);
  const saveBtnClassName = `movies-card__save-btn ${
    isSavedMovies ? "movies-card__save-btn_on" : "movies-card__save-btn_off"
  }`;

  const toggleSaveBtn = () => {
    if (isSavedMovies) {
      deleteSaveMovie(savedMovies.find((m) => m.movieId === movie.id)._id);
    } else {
      handleSaveBtn();
    }
  };

  const handleSaveBtn = () => {
    const image = MOVIES_API_BASE_URL + movie.image.url || defaultImg;
    const thumbnail =
      MOVIES_API_BASE_URL + movie.image.formats.thumbnail.url || defaultImg;
    const nameEN = movie.nameEN === null ? "Нет" : movie.nameEN;
    const trailerLink =
      movie.trailerLink === null ? defaultImg : movie.trailerLink;

    const dataMovie = {
      country: movie.country || "Нет",
      director: movie.director || "Нет",
      duration: movie.duration || 0,
      year: movie.year || "Нет",
      description: movie.description || "Нет",
      image: image,
      trailerLink: trailerLink,
      nameRU: movie.nameRU || "Названия пока нет",
      nameEN: nameEN,
      thumbnail: thumbnail,
      movieId: movie.id,
    };
    saveMovie(dataMovie);
  };

  const handleDelete = () => {
    deleteSaveMovie(movie._id);
  };

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <div>
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <p className="movies-card__duration">{durationMovie}</p>
        </div>
        <button
          className={isSaved ? "no-display" : saveBtnClassName}
          onClick={toggleSaveBtn}
        ></button>
        <button
          className={isSaved ? "movies-card__delete-btn" : "no-display"}
          onClick={handleDelete}
        ></button>
      </div>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__img"
          src={isSaved ? movie.image : MOVIES_API_BASE_URL + movie.image.url}
          alt={movie.nameRU.toLowerCase()}
        ></img>
      </a>
    </article>
  );
}

export default MoviesCard;
