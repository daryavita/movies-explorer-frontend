import "./InputForm.css";

function InputForm({ caption, type, name, minLength, placeholder }) {
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
      />
      <span className="input__error">Что-то пошло не так...</span>
    </div>
  );
}

export default InputForm;
