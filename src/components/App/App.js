import "./App.css";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
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
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [jwt, setJwt] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  const location = useLocation();

  useEffect(() => {
    if (loggedIn) {
      auth
        .getUser(jwt)
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
            id: res._id,
          });
        })
        .catch((err) => console.log(`Ошибка ${err}`));
    }
  }, [loggedIn, jwt]);

  useEffect(() => {
    tokenCheck();
  }, [location]);

  const handleRegister = (name, email, password) => {
    return auth.register(name, email, password).then((res) => {
      console.log("res auth", res);
      history.push("/signin");
    });
    // .catch((err) => console.log("errReg", err.message));
  };

  const handleLogin = (email, password) => {
    return auth.authorize(email, password).then((data) => {
      if (!data.token) {
        return;
      }
      localStorage.setItem("jwt", data.token);
      tokenCheck();
      history.push("/movies");
    });
    // .catch((err) => console.log("err.message", err.message));
  };

  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      setJwt(localStorage.getItem("jwt"));
      console.log('jwt', localStorage.getItem("jwt"))
      auth
        .getUser(jwt)
        .then((userData) => {
          console.log('userData', userData)
          if (userData) {
            setCurrentUser({
              name: userData.name,
              email: userData.email,
              id: userData._id,
            });
            setLoggedIn(true);
            console.log('loggedIn', loggedIn)
          }
        })
        .catch((err) => console.log(`Ошибка ${err}`));
    }
  };

  const signOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false)
    history.push("/signin");
  }

  const handleUpdateUser = (currentUser) => {
    auth
      .updateUserData(jwt, currentUser.name, currentUser.email)
      .then((res) => {
        console.log('user res', res)
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/signup">
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path="/signin">
              <Login handleLogin={handleLogin}/>
          </Route>

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile handleUpdateUser={handleUpdateUser} signOut={signOut} loggedIn={loggedIn}/>
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SaveMovies loggedIn={loggedIn}/>
          </ProtectedRoute>

          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies loggedIn={loggedIn}/>
          </ProtectedRoute>

          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
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
