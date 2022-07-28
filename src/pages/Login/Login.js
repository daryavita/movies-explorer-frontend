import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login({ handleLogin }) {
  const [userData, setUserData] = useState({
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
    if (!userData.email || !userData.password) {
      console.log("пустые поля");
      return;
    }

    handleLogin(userData.email, userData.password).catch((err) => {
      setUserData((prev) => ({
        ...prev,
        message: err,
      }));
    });
  };

  return (
    <div className="auth-form">
      <Link to="/" className="auth-form__logo">
        <img src={logo} alt="logo" />
      </Link>
      <h3 className="auth-form__title">Рады видеть!</h3>
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
            value={userData.email}
          />
          <InputForm
            caption="Пароль"
            type="password"
            name="password"
            minLength="8"
            placeholder="Ваш пароль"
            onChange={handleChange}
            value={userData.password}
          />
        </fieldset>
        <button
          type="submit"
          className="auth-form__btn-submit"
          aria-label="Сохранить"
        >
          Войти
        </button>
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
