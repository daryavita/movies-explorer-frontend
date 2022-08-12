import "./FilterCheckbox.css";

function FilterCheckbox({ toggleCheckbox, isChecked, disabled }) {
  const checkboxClassName = `checkbox__slider ${
    isChecked ? "checkbox__slider_on" : "checkbox__slider_off"
  }`;

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isChecked}
        onChange={toggleCheckbox}
        disabled={disabled}
      />
      <div className={checkboxClassName}></div>
      <p className="checkbox__title">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
