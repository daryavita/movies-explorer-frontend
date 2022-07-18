import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" placeholder="Фильм"></input>
        <button className="search__btn"></button>
      </form>
      <FilterCheckbox />
      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;
