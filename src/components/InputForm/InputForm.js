import "./InputForm.css";

function InputForm({
  caption,
  type,
  name,
  minLength,
  placeholder,
  onChange,
  value,
  errorMessage,
  pattern,
  profile,
  disabled,
}) {
  return (
    <div className={profile ? "input__container_profile" : "input__container"}>
      <p className={profile ? "input__caption_profile" : "input__caption"}>
        {caption}
      </p>
      <input
        type={type}
        name={name}
        className={profile ? "input_profile" : "input"}
        required
        minLength={minLength}
        placeholder={placeholder}
        maxLength="40"
        onChange={onChange}
        value={value}
        pattern={pattern}
        disabled={disabled}
      />
      <span className={profile ? "input__error_profile" : "input__error"}>
        {errorMessage}
      </span>
    </div>
  );
}

export default InputForm;
