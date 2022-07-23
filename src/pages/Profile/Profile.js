import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <>
      <section className="profile">
        <h3 className="profile__title">Привет, Виталий!</h3>
        <form className="profile__form" name="profile" noValidate>
          <fieldset className="profile__form-fieldset">
            <div className="profile__input-container">
              <p className="profile__input-name">Имя</p>
              <input
                className="profile__input"
                type="text"
                placeholder="Виталий"
                minLength="2"
              ></input>
            </div>
            <hr className="profile__line"></hr>
            <div className="profile__input-container">
              <p className="profile__input-name">E-mail</p>
              <input
                className="profile__input"
                type="e-mail"
                placeholder="pochta@ya.ru"
              ></input>
            </div>
          </fieldset>
        </form>
        <button className="profile__btn-edit">Редактировать</button>
        <Link to="/" className="profile__signout">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
