import Title from "../Title/Title";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <Title title="Студент" />
      <div className="about-me__container">
        <div className="about-me__info">
          <p className="about-me__title">Дарья</p>
          <p className="about-me__subtitle">Фронтенд-разработчица, 24 года</p>
          <p className="about-me__description">
            Я живу в Санкт-Петербурге и закончила тут Политех Петра по
            экономической специальности. Сначала работала в сфере SEO, но
            поняла, что это не для меня и теперь погружаюсь в мир
            веб-разработки. Люблю удобные приятные интерфейсы и своего кота.{" "}
          </p>
        </div>
        <div className="about-me__photo"></div>
      </div>

      <ul className="about-me__social-links">
        <li>
          <a
            className="about-me__social-link"
            href="https://www.facebook.com/dashkapv"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            className="about-me__social-link"
            href="https://github.com/daryavita"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
