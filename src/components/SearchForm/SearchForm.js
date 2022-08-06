import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useEffect, useState } from "react";
import { useFormWithValidation } from "../../utils/Validation";

function SearchForm({ searchMovies, isSaved, isChecked, toggleCheckbox, disabled }) {
  const { values, handleChange, isValid } = useFormWithValidation();
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (!isSaved) {
      const localKeyWord = localStorage.getItem("keyWord");

      if (localKeyWord) {
        try {
          const parsedKeyWord = JSON.parse(localKeyWord);
          values.keyWord = parsedKeyWord;
        } catch (err) {
          localStorage.removeItem("keyWord");
        }
      }
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      const keyword = values.keyWord.toLowerCase();
      searchMovies(keyword)
    } else {
      setErrorText("Нужно ввести ключевое слово");
    }
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

        toggleCheckbox={toggleCheckbox}
        isChecked={isChecked}
        disabled={disabled}
      />
      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;
