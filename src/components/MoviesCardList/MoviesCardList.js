import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ isSaved }) {
  return (
    <>
      <section className="cards-list">
        <ul className="cards-list__container">
          <MoviesCard isSaved={isSaved} />
          <MoviesCard isSaved={isSaved} />
          <MoviesCard isSaved={isSaved} />
        </ul>
        <button className="cards-list__btn"> Еще</button>
      </section>
    </>
  );
}

export default MoviesCardList;
