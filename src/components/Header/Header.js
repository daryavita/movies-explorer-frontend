import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link, Route, Switch } from "react-router-dom";

function Header({main}) {

  const headerClassName = `header ${ main ? "header_theme_gray" : ""}`

  return (
    <>
      <header className={headerClassName}>
            <img className="header__logo" src={logo} alt="logo" />
            <Navigation main={main} />
      </header>
    </>
  );
}

export default Header;
