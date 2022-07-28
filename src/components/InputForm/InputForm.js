import { useState } from "react";
import "./InputForm.css";

function InputForm({ caption, type, name, minLength, placeholder, onChange, value, errorMessage, pattern }) {

  return (
    <div className="input__container">
      <p className="input__caption">{caption}</p>
      <input
        type={type}
        name={name}
        className="input"
        required
        minLength={minLength}
        placeholder={placeholder}
        maxLength="40"
        onChange={onChange}
        value={value}
        pattern={pattern}
      />
      <span className="input__error">{errorMessage}</span>
    </div>
  );
}

export default InputForm;
