import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import SaveMovies from "../../pages/SaveMovies/SaveMovies";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import * as api from "../../utils/MoviesApi";
import * as auth from "../../utils/MainApi";
import { useState } from "react";
import { useEffect } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  const handleRegister = (name, email, password) => {
    return auth
      .register(name, email, password)
      .then((res) => {
        history.push("/signin");
      })
      .catch((err) => console.log("err", err.message));
  };

  const handleLogin = (email, password) => {
    return auth
      .authorize(email, password)
      .then((data) => {
        if (!data.token) {
          return;
        }
        localStorage.setItem("jwt", data.token);
        tokenCheck();
        history.push("/movies");
      })
      .catch((err) => console.log("err.message", err.message));
  };

  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      let jwt = localStorage.getItem("jwt");

      auth
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setUserData({
              email: res.email,
              password: res.password,
            });
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log(`Ошибка ${err}`));
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/signup">
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path="/signin">
            <Login handleLogin={handleLogin} />
          </Route>

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SaveMovies />
          </ProtectedRoute>

          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies />
          </ProtectedRoute>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
