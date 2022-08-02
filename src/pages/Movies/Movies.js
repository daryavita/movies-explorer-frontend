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

function Movies({ loggedIn }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();
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
    setIsLoading(true);
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
      )
      .finally(setIsLoading(false));
  };

  const searchMovies = (keyWord, isShortMovies) => {
    setError("");
    const searchResult = filterMovies(movies, keyWord, isShortMovies);

    if (searchResult) {
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
      return setFilteredMovies(searchResult);
    }
    setError("Ничего не найдено :(");
    setFilteredMovies([]);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="page__content">
        <SearchForm searchMovies={searchMovies} />
        {isLoading ? (
          <Preloader disable={false} />
        ) : (
          <Preloader disable={true} />
        )}
        <p className="movies__error">{error}</p>
        <MoviesCardList filteredMovies={filteredMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
