import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
  return (
    <div className="auth-form">
      <Link to="/" className="auth-form__logo">
        <img src={logo} alt="logo" />
      </Link>
      <h3 className="auth-form__title">Рады видеть!</h3>
      <form className="auth-form__form" name="sign-in" noValidate>
        <fieldset className="auth-form__fieldset">
          <InputForm caption="E-mail" type="email" name="email" minLength="2" placeholder="pochta@ya.ru"/>
          <InputForm
            caption="Пароль"
            type="password"
            name="password"
            minLength="8"
            placeholder="Ваш пароль"
          />
        </fieldset>
      </form>
      <button
        type="submit"
        className="auth-form__btn-submit"
        aria-label="Сохранить"
      >
        Войти
      </button>
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
