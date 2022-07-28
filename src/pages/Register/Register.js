import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/Validation";

import "./Register.css";

function Register({ handleRegister }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, password } = userData;
    handleRegister(name, email, password)
    .catch((err) => {
      setUserData((prev) => ({
        ...prev,
        message: err,
      }));
    });
    console.log('userData',userData)
  };

  return (
    <div className="auth-form">
      <Link to="/" className="auth-form__logo">
        <img src={logo} alt="logo" />
      </Link>
      <h3 className="auth-form__title">Добро пожаловать!</h3>
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
            value={userData.name}
          />
          <InputForm
            caption="E-mail"
            type="email"
            name="email"
            minLength="2"
            placeholder="pochta@ya.ru"
            onChange={handleChange}
            value={userData.email}
          />
          <InputForm
            caption="Пароль"
            type="password"
            name="password"
            minLength="8"
            placeholder="Больше 8 знаков"
            onChange={handleChange}
            value={userData.password}
          />
        </fieldset>
        <button
          type="submit"
          className="auth-form__btn-submit"
          aria-label="Сохранить"
        >
          Зарегистрироваться
        </button>
      </form>
      <span className="auth-form__hint">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="auth-form__link">
          Войти
        </Link>
      </span>
    </div>
  );
}

export default Register;
