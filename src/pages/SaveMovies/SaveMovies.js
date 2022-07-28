import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./SaveMovies.css";

function SaveMovies() {
  return (
    <>
      <Header />
      <main className="page__content">
        <SearchForm />
        <MoviesCardList isSaved={true} />
        <Preloader />
      </main>
      <Footer />
    </>
  );
}

export default SaveMovies;
