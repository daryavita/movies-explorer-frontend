import "./Navigation.css";
import { Link, NavLink, Route, Switch } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Switch>
        <Route path="/movies">
          <nav className="navigation">
            <div className="navigation__container">
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
                Сохраненные Фильмы
              </NavLink>
            </div>
            <div className="navigation__container">
              <NavLink
                to="/profile"
                activeClassName="navigation__link_active"
                className="navigation__link navigation__link_hover"
              >
                Аккаунт
              </NavLink>
              <NavLink
                to="/profile"
                className="navigation__link navigation__link_hover"
              >
                <button className="navigation__btn"></button>
              </NavLink>
            </div>
          </nav>
        </Route>
        <Route exact path="/">
          <nav className="navigation navigation_type_main">
            <Link
              to="/signup"
              className="navigation__link navigation__link_hover navigation__link_active"
            >
              Регистрация
            </Link>
            <Link
              to="signin"
              className="navigation__link navigation__link_hover"
            >
              <button className="navigation__btn navigation__btn_type_main">
                Войти
              </button>
            </Link>
          </nav>
        </Route>
      </Switch>
    </>
  );
}
export default Navigation;
