import Title from "../Title/Title";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      {/* <h2 className="about-project__title">О проекте</h2>
      <hr className="about-project__line"/> */}
      <Title title="О проекте"/>
      <div className="about-project__content">
        <div>
          <p className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <p className="about-project__subtitle">
          На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
        <div className="about-project__track">
            <div>
                <p className="about-project__backend-time">1 неделя</p>
                <p className="about-project__track-sub">Back-end</p>
            </div>
            <div>
                <p className="about-project__frontend-time">4 недели</p>
                <p className="about-project__track-sub">Front-end</p>
            </div>
        </div>

    </section>
  );
}

export default AboutProject;
