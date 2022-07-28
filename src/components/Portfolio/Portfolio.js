import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
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
