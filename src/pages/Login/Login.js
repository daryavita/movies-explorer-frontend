import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/Validation";
import "./Login.css";

function Login({ handleLogin }) {
  // const [userData, setUserData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!userData.email || !userData.password) {
  //     console.log("пустые поля");
  //     return;
  //   }

  //   handleLogin(userData.email, userData.password).catch((err) => {
  //     setUserData((prev) => ({
  //       ...prev,
  //       message: err,
  //     }));
  //   });
  // };

  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values.email, values.password).catch((err) =>
      setErrorText(err)
    );
  };

  return (
    <div className="auth-form">
      <div className="auth-form__header">
        <Link to="/" className="auth-form__logo">
          <img src={logo} alt="logo" />
        </Link>
        <h3 className="auth-form__title">Рады видеть!</h3>
      </div>
      <form
        className="auth-form__form"
        name="sign-in"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="auth-form__fieldset">
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
            placeholder="Ваш пароль"
            onChange={handleChange}
            value={values.password || ""}
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
            aria-label="Отправить"
            disabled={!isValid}
          >
            Войти
          </button>
        </div>
      </form>
      <span className="auth-form__hint">
        Еще не зарегистрированы?{" "}
        <Link to="/signup" className="auth-form__link">
          Регистрация
        </Link>
      </span>
    </div>
  );
}

export default Login;
