import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useEffect, useState } from "react";

function SearchForm({
  searchMovies,
  isSaved,
  isChecked,
  toggleCheckbox,
  disabled,
}) {
  const [keyWord, setKeyWord] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (!isSaved) {
      const localKeyWord = localStorage.getItem("keyWord");

      if (localKeyWord) {
        try {
          const parsedKeyWord = JSON.parse(localKeyWord);
          setKeyWord(parsedKeyWord);
        } catch (err) {
          localStorage.removeItem("keyWord");
        }
      }
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      searchMovies(keyWord.toLowerCase());
    } else {
      setErrorText("Нужно ввести ключевое слово");
    }
  };

  const handleChange = (evt) => {
    setKeyWord(evt.target.value);
    setIsValid(evt.target.checkValidity());
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
          value={keyWord || ""}
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
        toggleCheckbox={toggleCheckbox}
        isChecked={isChecked}
        disabled={disabled}
      />
      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;
