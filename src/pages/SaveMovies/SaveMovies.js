import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./SaveMovies.css";

function SaveMovies({
  loggedIn,
  savedMovies,
  error,
  searchSaveMovies,
  deleteSaveMovie,
  isLoading,
  toggleCheckbox,
  isChecked,
  disabled
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="page__content">
        <SearchForm
          searchMovies={searchSaveMovies}
          isSaved={true}
          toggleCheckbox={toggleCheckbox}
          isChecked={isChecked}
          disabled={disabled}
        />
        <p className="movies__error">{error}</p>
        <MoviesCardList
          isSaved={true}
          movies={savedMovies}
          deleteSaveMovie={deleteSaveMovie}
        />
        {isLoading ? <Preloader /> : ""}
      </main>
      <Footer />
    </>
  );
}

export default SaveMovies;
