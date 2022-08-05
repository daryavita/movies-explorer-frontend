import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { filterMovies } from "../../utils/filterMovies";
import * as mainApi from "../../utils/MainApi";
import "./SaveMovies.css";

function SaveMovies({ loggedIn, savedMovies, error, searchSaveMovies, deleteSaveMovie }) {
  // const currentUser = useContext(CurrentUserContext);
  // console.log('currentUser', currentUser)
  // const [savedMovies, setSavedMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([])
  // const [error, setError] = useState("");
  console.log("res savedMovies", savedMovies);

  // useEffect(() => {
  //   if (localStorage.getItem("jwt")) {
  //     const jwt = localStorage.getItem("jwt");
  //     mainApi
  //       .getSavedMovies(jwt)
  //       .then((res) => {
  //         if (res.length === 0) {
  //           setError("Вы еще ничего не сохраняли");
  //           return
  //         }
  //         setSavedMovies(res);
  //       })
  //       .catch((err) => console.log("errrr", err));
  //   }
  // }, []);

  // const searchSaveMovies = (keyWord, isShortMovies) => {
  //   setError("");
  //   const searchResult = filterMovies(savedMovies, keyWord, isShortMovies);
  //   if (searchResult) {
  //     return setSavedMovies(searchResult);
  //   }
  //   setError("Ничего не найдено :(");
  //   setSavedMovies([]);
  // };

  // const deleteSaveMovie = (movieId) => {
  //   if (localStorage.getItem("jwt")) {
  //     const jwt = localStorage.getItem("jwt");
  //     mainApi.deleteMovie(jwt, movieId)
  //     .then((res) => {
  //       const updateSaveMovie = savedMovies.filter((deletedMovie) => {return deletedMovie._id !== movieId})
  //       setSavedMovies(updateSaveMovie);
  //     })
  //       .catch((err) => console.log("err", err));
  //   }
  // }

  // const onSaveMovie = (dataMovie) => {
  //   console.log("dataMovie", dataMovie);
  //   // if (localStorage.getItem("jwt")) {
  //   //   const jwt = localStorage.getItem("jwt");
  //   //   mainApi
  //   //     .addSaveMovie(jwt, dataMovie)
  //   //     .then((savedMovie) => {
  //   //       console.log("savedMovie", savedMovie);
  //   //     })
  //   //     .catch((err) => console.log("err", err));
  //   // }
  // }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="page__content">
        <SearchForm searchMovies={searchSaveMovies} isSaved={true} />
        <p className="movies__error">{error}</p>
        <MoviesCardList
          isSaved={true}
          movies={savedMovies}
          deleteSaveMovie={deleteSaveMovie}
        />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  );
}

export default SaveMovies;
