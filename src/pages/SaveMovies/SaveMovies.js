import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./SaveMovies.css";

function SaveMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList isSaved={true}/>
      <Preloader />
    </>
  );
}

export default SaveMovies;
