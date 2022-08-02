import { useState } from "react";
import useCurrentWidth from "../../hooks/useCurrentWidth";
import MoviesCard from "../MoviesCard/MoviesCard";
import { getInitialMovies, getLoadMovies } from "../../utils/constants";
import "./MoviesCardList.css";
import { useEffect } from "react";

function MoviesCardList({ isSaved, filteredMovies }) {
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
          {filteredMovies.slice(0, visibleMoviesCount).map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              // cardClick={onCardClick}
              // onCardLike={onCardLike}
              // onCardDelete={onCardDelete}
            />
          ))}
          {/* <MoviesCard isSaved={isSaved} />
          <MoviesCard isSaved={isSaved} />
          <MoviesCard isSaved={isSaved} /> */}
        </ul>
        {visibleMoviesCount < filteredMovies.length && (
          <button className="cards-list__btn" onClick={handleLoadMore}>
            Еще
          </button>
        )}
      </section>
    </>
  );
}

export default MoviesCardList;
