import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/Validation";
import "./Register.css";

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values.name, values.email, values.password).catch((err) =>
      setErrorText(err)
    );
  };

  return (
    <section className="auth-form">
      <div className="auth-form__header">
        <Link to="/" className="auth-form__logo">
          <img src={logo} alt="logo" />
        </Link>
        <h3 className="auth-form__title">Добро пожаловать!</h3>
      </div>
      <form
        className="auth-form__form"
        name="sign-up"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="auth-form__fieldset">
          <InputForm
            caption="Имя"
            type="text"
            name="name"
            minLength="2"
            placeholder="Дарья"
            onChange={handleChange}
            value={values.name || ""}
            pattern="[a-zA-Zа-яА-ЯёЁ\- ]{2,}"
            errorMessage={errors.name}
          />
          <InputForm
            caption="E-mail"
            type="email"
            name="email"
            minLength="2"
            placeholder="pochta@ya.ru"
            onChange={handleChange}
            value={values.email || ""}
            pattern="\S+@\S+\.\S+"
            errorMessage={errors.email}
          />
          <InputForm
            caption="Пароль"
            type="password"
            name="password"
            minLength="8"
            placeholder="Больше 8 знаков"
            onChange={handleChange}
            value={values.password || ""}
            errorMessage={errors.password}
          />
        </fieldset>
        <div className="auth-form__sbm-container">
          <span className="auth-form__error">{errorText}</span>
          <button
            type="submit"
            className={`auth-form__btn-submit ${
              isValid
                ? "auth-form__btn-submit_active"
                : "auth-form__btn-submit_disabled"
            }`}
            aria-label="Сохранить"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <span className="auth-form__hint">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="auth-form__link">
          Войти
        </Link>
      </span>
    </section>
  );
}

export default Register;
