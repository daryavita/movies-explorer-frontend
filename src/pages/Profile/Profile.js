import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";
import "./Profile.css";

function Profile({ handleUpdateUser, signOut, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { values, setValues, handleChange, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setDisabled(true);
      setStatusText("Нет изменений");
    } else {
      setDisabled(false);
      setStatusText("");
    }
  }, [values.name, values.email]);

  const editProfile = (evt) => {
    evt.preventDefault();
    handleUpdateUser({ name: values.name, email: values.email }).catch(
      (err) => {
        setStatusText(err);
        setDisabled(true);
      }
    );
    setTimeout(() => setIsEdit(false), 2000);
  };

  const handleEditBtn = () => {
    setIsEdit(true);
    setDisabled(true);
    setStatusText("");
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
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
                disabled={!isEdit}
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
                disabled={!isEdit}
              />
            </fieldset>
            {isEdit ? (
              <div className="auth-form__sbm-container">
                <span
                  className={!disabled ? "profile__success" : "profile__error"}
                >
                  {statusText}
                </span>
                <button
                  className={`profile__btn-submit ${
                    isValid && !disabled
                      ? "profile__btn-submit_active"
                      : "profile__btn-submit_disabled"
                  }`}
                  type="submit"
                  disabled={!isValid}
                >
                  Сохранить
                </button>
              </div>
            ) : (
              ""
            )}
          </form>
          {isEdit ? (
            ""
          ) : (
            <>
              <button
                className="profile__btn-edit"
                type="submit"
                onClick={handleEditBtn}
              >
                Редактировать
              </button>
              <button className="profile__signout" onClick={signOut}>
                Выйти из аккаунта
              </button>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
