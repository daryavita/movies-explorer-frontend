import { useState } from "react";
import "./FilterCheckbox.css";


function FilterCheckbox() {

    const [checked, setChecked] = useState(true);

    const checkboxClassName = `checkbox__slider ${
        checked ? "checkbox__slider_on" : "checkbox__slider_off"
      }`;

    const handleCheckbox = () => {
        setChecked(!checked)
    }

  return (
      <label className="checkbox">
        <input type="checkbox" className="checkbox__input" checked={checked} onChange={handleCheckbox}/>
        <div className={checkboxClassName}></div>
        <p className="checkbox__title">Короткометражки</p>
      </label>
  );
}

export default FilterCheckbox;
