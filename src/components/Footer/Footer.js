import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__subtitle">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <hr className="footer__line"></hr>
      <div className="footer__container">
        <p className="footer__author">&copy; 2022</p>
        <nav className="footer__links">
          <li>
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://www.facebook.com/dashkapv"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/daryavita"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
