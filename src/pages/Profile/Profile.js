import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";
import "./Profile.css";

function Profile({ handleUpdateUser, signOut, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  console.log("currentUser", currentUser);


  const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  const editProfile = (evt) => {
    evt.preventDefault();
    handleUpdateUser({ name: values.name, email: values.email })
  };

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className="page__content">
        <section className="profile">
          <h3 className="profile__title">Привет, {currentUser.name}!</h3>
          <form
            className="profile__form"
            name="profile"
            onSubmit={editProfile}
            noValidate
          >
            <fieldset className="profile__form-fieldset">
              <InputForm
                caption="Имя"
                type="text"
                name="name"
                minLength="2"
                profile={true}
                placeholder={currentUser.name}
                onChange={handleChange}
                value={values.name || ""}
                pattern="[a-zA-Zа-яА-ЯёЁ\- ]{2,}"
                errorMessage={errors.name}
              />
              <hr className="profile__line"></hr>
              <InputForm
                caption="E-mail"
                type="email"
                name="email"
                minLength="2"
                profile={true}
                placeholder={currentUser.email}
                onChange={handleChange}
                value={values.email || ""}
                pattern="\S+@\S+\.\S+"
                errorMessage={errors.email}
              />
            </fieldset>
            <button
              className={`profile__btn-edit ${
                isValid
                  ? "profile__btn-edit_active"
                  : "profile__btn-edit_disabled"
              }`}
              type="submit"
              disabled={!isValid}
            >
              Редактировать
            </button>
          </form>
          <button className="profile__signout" onClick={signOut}>
            Выйти из аккаунта
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
