import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import * as api from "../../utils/MoviesApi";
import * as moviesApi from "../../utils/MoviesApi";
import { useState } from "react";
import { useEffect } from "react";
import "./Movies.css";
import { filterMovies } from "../../utils/filterMovies";

function Movies({ loggedIn, saveMovie, deleteSaveMovie, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const allMovies = localStorage.getItem("movies");
    const localMovies = localStorage.getItem("searchResult");

    if (allMovies) {
      try {
        const parsedMovies = JSON.parse(allMovies);
        setMovies(parsedMovies);
      } catch (err) {
        localStorage.removeItem("movies");
        fetchMovies();
      }
    } else {
      fetchMovies();
    }

    if (localMovies) {
      try {
        const searchResult = JSON.parse(localMovies);
        setFilteredMovies(searchResult);
      } catch (err) {
        localStorage.removeItem("searchResult");
      }
    } else {
      setError("Вы еще ничего не искали");
    }
  }, []);

  const fetchMovies = () => {
    moviesApi
      .getMovies()
      .then((res) => {
        setMovies(res);
        localStorage.setItem("movies", JSON.stringify(res));
      })
      .catch(() =>
        setError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        )
      );
  };

  const searchMovies = (keyWord, isShortMovies) => {
    setError("");
    setIsLoading(true);
    const searchResult = filterMovies(movies, keyWord, isShortMovies);
    if (searchResult) {
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
      localStorage.setItem("keyWord", JSON.stringify(keyWord));
      localStorage.setItem("isShortMovies", JSON.stringify(isShortMovies));
      setIsLoading(false);
      return setFilteredMovies(searchResult);
    }
    setIsLoading(false);
    setError("Ничего не найдено :(");
    setFilteredMovies([]);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="page__content">
        <SearchForm searchMovies={searchMovies} />
        {isLoading ? <Preloader /> : ""}
        <p className="movies__error">{error}</p>
        <MoviesCardList
          movies={filteredMovies}
          saveMovie={saveMovie}
          deleteSaveMovie={deleteSaveMovie}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
