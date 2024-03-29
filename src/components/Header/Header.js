import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ loggedIn, main }) {
  const headerClassName = `header ${main ? "header_theme_gray" : ""}`;

  return (
    <>
      <header className={headerClassName}>
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <Navigation loggedIn={loggedIn} />
      </header>
    </>
  );
}

export default Header;
