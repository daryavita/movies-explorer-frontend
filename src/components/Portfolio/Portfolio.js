import Title from "../Title/Title";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <Title title="Студент" />
      <div className="portfolio__container">
        <div className="portfolio__info">
          <p className="portfolio__title">Дарья</p>
          <p className="portfolio__subtitle">Фронтенд-разработчица, 24 года</p>
          <p className="portfolio__description">
            Я живу в Санкт-Петербурге и закончила тут Политех Петра по
            экономической специальности. Сначала работала в сфере SEO, но
            поняла, что это не для меня и теперь погружаюсь в мир
            веб-разработки. Люблю удобные приятные интерфейсы и своего кота.{" "}
          </p>
        </div>
        <div className="portfolio__photo"></div>
      </div>

      <ul className="portfolio__social-links">
        <li>
          <a
            className="portfolio__social-link"
            href="https://www.facebook.com/dashkapv"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            className="portfolio__social-link"
            href="https://github.com/daryavita"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
      <p className="portfolio__sub">Портфолио</p>
      <ul className="portfolio__project-links">
        <li className="portfolio__project-link">
          <a
            className="portfolio__link"
            href="https://github.com/daryavita/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__project-link">
          <a
            className="portfolio__link"
            href="https://github.com/daryavita/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__project-link">
          <a
            className="portfolio__link"
            href="https://github.com/daryavita/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
