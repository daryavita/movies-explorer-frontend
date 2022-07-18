import "./Navigation.css";
import { Link, NavLink} from "react-router-dom";
import { useState } from "react";

function Navigation({ main }) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const openBurgerMenu = () => {
    setBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <>
      <nav className={main ? "navigation navigation_type_main" : "no-display"}>
        <Link
          to="/signup"
          className="navigation__link navigation__link_hover navigation__link_active"
        >
          Регистрация
        </Link>
        <Link to="signin" className="navigation__link navigation__link_hover">
          <button className="navigation__btn navigation__btn_type_main">
            Войти
          </button>
        </Link>
      </nav>

        <nav className={main ? "no-display" : "navigation navigation_type_all"}>
          <NavLink
            to="/movies"
            activeClassName="navigation__link_active"
            className="navigation__link navigation__link_hover"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            activeClassName="navigation__link_active"
            className="navigation__link navigation__link_hover"
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            to="/profile"
            activeClassName="navigation__link_active"
            className="navigation__link navigation__link_type__acc navigation__link_hover"
          >
            Аккаунт
            <button className="navigation__btn"></button>
          </NavLink>
        </nav>

        <button
          className={main ? "no-display" : "navigation__menu-btn"}
          onClick={openBurgerMenu}
        ></button>

      <div
        className={
          burgerMenu
            ? "navigation__burger-menu navigation__burger-menu_open"
            : "navigation__burger-menu"
        }
      >
        <div className="navigation__burger-menu-container">
          <button
            className="navigation__close-btn"
            onClick={closeBurgerMenu}
          ></button>
          <nav className="navigation__burger-menu-links">
            <NavLink
              exact
              to="/"
              activeClassName="navigation__link_type_burger-menu_active"
              className="navigation__link navigation__link_type_burger-menu navigation__link_hover"
            >
              Главная
            </NavLink>
            <NavLink
              exact
              to="/movies"
              activeClassName="navigation__link_type_burger-menu_active"
              className="navigation__link navigation__link_type_burger-menu navigation__link_hover"
            >
              Фильмы
            </NavLink>
            <NavLink
              exact
              to="/saved-movies"
              activeClassName="navigation__link_type_burger-menu_active"
              className="navigation__link navigation__link_type_burger-menu navigation__link_hover"
            >
              Сохраненные фильмы
            </NavLink>
          </nav>
          <nav className="navigation__burger-menu-acc">
            <NavLink
              exact
              to="/profile"
              activeClassName="navigation__link_type_burger-menu_active"
              className="navigation__link navigation__link_type_burger-menu navigation__link_hover"
            >
              Аккаунт
              <button className="navigation__btn"></button>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navigation;
