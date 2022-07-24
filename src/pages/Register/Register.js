import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import logo from "../../images/logo.svg";

import "./Register.css";

function Register() {
  return (
    <div className="auth-form">
      <Link to="/" className="auth-form__logo">
        <img src={logo} alt="logo" />
      </Link>
      <h3 className="auth-form__title">Добро пожаловать!</h3>
      <form className="auth-form__form" name="sign-up" noValidate>
        <fieldset className="auth-form__fieldset">
          <InputForm caption="Имя" type="text" name="name" minLength="2" placeholder="Дарья"/>
          <InputForm caption="E-mail" type="email" name="email" minLength="2" placeholder="pochta@ya.ru"/>
          <InputForm
            caption="Пароль"
            type="password"
            name="password"
            minLength="8"
            placeholder="Больше 8 знаков"
          />
        </fieldset>
      </form>
      <button
        type="submit"
        className="auth-form__btn-submit"
        aria-label="Сохранить"
      >
        Зарегистрироваться
      </button>
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
