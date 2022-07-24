import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <>
      <Header />
      <main className="page__content">
        <SearchForm />
        <Preloader />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
