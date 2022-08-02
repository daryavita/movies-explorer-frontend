import { useEffect } from "react";
import { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ handleShortMovies, isShortMovies }) {
  const checkboxClassName = `checkbox__slider ${
    isShortMovies ? "checkbox__slider_on" : "checkbox__slider_off"
  }`;

  const handleCheckbox = () => {
    handleShortMovies();
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isShortMovies}
        onChange={handleCheckbox}
      />
      <div className={checkboxClassName}></div>
      <p className="checkbox__title">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
