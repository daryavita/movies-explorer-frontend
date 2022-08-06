import { useState } from "react";
import useCurrentWidth from "../../hooks/useCurrentWidth";
import MoviesCard from "../MoviesCard/MoviesCard";
import { getInitialMovies, getLoadMovies } from "../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList({
  isSaved,
  movies,
  saveMovie,
  deleteSaveMovie,
  savedMovies,
}) {
  const width = useCurrentWidth();

  const [visibleMoviesCount, setVisibleMoviesCount] = useState(
    getInitialMovies(width)
  );

  const handleLoadMore = () => {
    setVisibleMoviesCount((prevCount) => prevCount + getLoadMovies(width));
  };

  return (
    <>
      <section className="cards-list">
        <ul className="cards-list__container">
          {movies.slice(0, visibleMoviesCount).map((movie) => (
            <MoviesCard
              key={isSaved ? movie._id : movie.id}
              movie={movie}
              isSaved={isSaved}
              deleteSaveMovie={deleteSaveMovie}
              saveMovie={saveMovie}
              savedMovies={savedMovies}
            />
          ))}
        </ul>
        {visibleMoviesCount < movies.length && (
          <button className="cards-list__btn" onClick={handleLoadMore}>
            Еще
          </button>
        )}
      </section>
    </>
  );
}

export default MoviesCardList;
