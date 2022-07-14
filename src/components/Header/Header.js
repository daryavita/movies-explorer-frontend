import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link, Route, Switch } from "react-router-dom";

function Header() {

  return (
    <>
      <Switch>
        <Route path="/movies">
          <header className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <Navigation />
          </header>
        </Route>

        <Route exaxt path="/">
          <header className="header header_theme_gray">
            <Link exaxt to="/">
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <Navigation />
          </header>
        </Route>
      </Switch>
    </>
  );
}

export default Header;
