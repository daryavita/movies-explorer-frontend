import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import * as api from "../../utils/MoviesApi";
import "./SearchForm.css";
import { useEffect, useState } from "react";
import { useFormWithValidation } from "../../utils/Validation";

function SearchForm({ searchMovies, isSaved }) {
  const { values, handleChange, isValid } = useFormWithValidation();
  const [errorText, setErrorText] = useState("");
  const [isShortMovies, setIsShortMovies] = useState(false);

  useEffect(() => {
    if(!isSaved) {
      const localKeyWord = localStorage.getItem("keyWord");
      const localCheckbox = localStorage.getItem("isShortMovies");
  
      if (localKeyWord && localCheckbox) {
        try {
          const parsedKeyWord = JSON.parse(localKeyWord);
          const parsedCheckbox = JSON.parse(localCheckbox);
          values.keyWord = parsedKeyWord;
          setIsShortMovies(parsedCheckbox);
        } catch (err) {
          localStorage.removeItem("keyWord");
          localStorage.removeItem("isShortMovies");
        }
      }
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const keyword = values.keyWord.toLowerCase();
    searchMovies(keyword, isShortMovies);
    setErrorText("Нужно ввести ключевое слово");
  };

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          className="search__input"
          name="keyWord"
          placeholder="Фильм"
          type="text"
          onChange={handleChange}
          value={values.keyWord || ""}
          required
        ></input>
        <span
          className={`search__error ${isValid ? "" : "search__error_visible"}`}
        >
          {errorText}
        </span>
        <button
          className="search__btn"
          type="submit"
          aria-label="Искать"
        ></button>
      </form>
      <FilterCheckbox
        handleShortMovies={handleShortMovies}
        isShortMovies={isShortMovies}
      />
      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;
