import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import * as moviesApi from "../../utils/MoviesApi";
import { useState } from "react";
import { useEffect } from "react";
import "./Movies.css";
import { filterMovies, getShortMovies } from "../../utils/filterMovies";

function Movies({ loggedIn, saveMovie, deleteSaveMovie, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (loggedIn) {
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
          setError("");
        } catch (err) {
          localStorage.removeItem("searchResult");
        }
      } else {
        setError("Вы еще ничего не искали");
      }
    }
  }, []);

  useEffect(() => {
    const localCheckbox = localStorage.getItem("isShortMovies");

    if (localCheckbox) {
      try {
        const parsedCheckbox = JSON.parse(localCheckbox);
        setIsChecked(parsedCheckbox);
      } catch (err) {
        localStorage.removeItem("isShortMovies");
        setIsChecked(false);
      }
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

  const searchMovies = (keyWord) => {
    if (movies) {
      setError("");
      setIsLoading(true);
      const searchResult = filterMovies(movies, keyWord, isChecked);
      if (searchResult) {
        localStorage.setItem("searchResult", JSON.stringify(searchResult));
        localStorage.setItem("keyWord", JSON.stringify(keyWord));
        localStorage.setItem("isShortMovies", JSON.stringify(isChecked));
        setIsLoading(false);
        return setFilteredMovies(searchResult);
      }
      setIsLoading(false);
      setError("Ничего не найдено :(");
      setFilteredMovies([]);
    }
  };

  const toggleCheckbox = () => {
    if (isChecked) {
      if (JSON.parse(localStorage.getItem("searchResult")) === null) {
        setError("Вы еще ничего не искали");
        setIsChecked(!isChecked);
        return;
      }
      setFilteredMovies(JSON.parse(localStorage.getItem("searchResult")));
      setIsChecked(!isChecked);
      setError("");
    } else {
      const shortMovies = getShortMovies(filteredMovies);
      if (shortMovies) {
        setFilteredMovies(shortMovies);
        setIsChecked(!isChecked);
        setError("");
      }
      setError("Ничего не найдено :(");
      setFilteredMovies([]);
      setIsChecked(!isChecked);
    }
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="page__content">
        <SearchForm
          searchMovies={searchMovies}
          toggleCheckbox={toggleCheckbox}
          isChecked={isChecked}
        />
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
