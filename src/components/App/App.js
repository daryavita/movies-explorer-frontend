import "./App.css";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import SaveMovies from "../../pages/SaveMovies/SaveMovies";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import * as mainApi from "../../utils/MainApi";
import { useState } from "react";
import { useEffect } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { filterMovies, getShortMovies } from "../../utils/filterMovies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [openedPopup, setOpenedPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const localSavedMovies = JSON.parse(localStorage.getItem("savedMovies"));
  const history = useHistory();
  const location = useLocation();
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      mainApi
        .getSavedMovies(jwt)
        .then((res) => {
          if (res.length === 0) {
            return;
          }
          setError("");
          setSavedMovies(res);
          setDisabled(false);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => console.log(`Ошибка ${err}`))
        .finally(setIsLoading(false));
    }

    if (savedMovies.length === 0 || !savedMovies) {
      return setDisabled(true);
    }
  }, [location]);

  const handleRegister = (name, email, password) => {
    return mainApi.register(name, email, password).then((res) => {
      handleLogin(email, password);
    });
  };

  const handleLogin = (email, password) => {
    return mainApi.authorize(email, password).then((data) => {
      if (!data.token) {
        return;
      }
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("loggedIn", "true");
      tokenCheck();
      history.push("/movies");
    });
  };

  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      mainApi
        .getUser(jwt)
        .then((userData) => {
          if (userData) {
            setCurrentUser({
              name: userData.name,
              email: userData.email,
              id: userData._id,
            });
            localStorage.setItem("loggedIn", "true");
            history.push(location.pathname);
          }
        })
        .catch((err) => console.log(`Ошибка ${err}`));
    }
  };

  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchResult");
    localStorage.removeItem("keyWord");
    localStorage.removeItem("isShortMovies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("loggedIn");
    history.push("/signin");
  };

  const handleUpdateUser = (currentUser) => {
    const jwt = localStorage.getItem("jwt");
    return mainApi
      .updateUserData(jwt, currentUser.name, currentUser.email)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
        setStatusText("Информация обновлена");
        setOpenedPopup(true);
      });
  };

  const searchSaveMovies = (keyWord, isShortMovies) => {
    setIsLoading(true);
    setError("");
    const searchResult = filterMovies(localSavedMovies, keyWord, isShortMovies);
    if (searchResult) {
      setIsLoading(false);
      return setSavedMovies(searchResult);
    }
    setIsLoading(false);
    setError("Ничего не найдено :(");
    setSavedMovies([]);
  };

  const toggleCheckboxSaveMovies = () => {
    setError("");
    setDisabled(false);
    if (isChecked) {
      if (localSavedMovies === null || localSavedMovies.length === 0) {
        setIsChecked(!isChecked);
        return;
      }
      setSavedMovies(localSavedMovies);
      setIsChecked(!isChecked);
      setError("");
    } else {
      const shortMovies = getShortMovies(savedMovies);
      if (shortMovies) {
        setSavedMovies(shortMovies);
        setIsChecked(!isChecked);
        setError("");
        return;
      }
      setError("Ничего не найдено :(");
      setSavedMovies([]);
      setIsChecked(!isChecked);
    }
  };

  const saveMovie = (dataMovie) => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      mainApi
        .addSaveMovie(jwt, dataMovie)
        .then((savedMovie) => {
          setSavedMovies([...savedMovies, savedMovie]);
          localStorage.setItem(
            "savedMovies",
            JSON.stringify([...savedMovies, savedMovie])
          );
        })
        .catch((err) => console.log(`Ошибка ${err}`));
    }
  };

  const deleteSaveMovie = (movieId) => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      mainApi
        .deleteMovie(jwt, movieId)
        .then((res) => {
          const updateSaveMovie = savedMovies.filter((deletedMovie) => {
            return deletedMovie._id !== movieId;
          });
          setSavedMovies(updateSaveMovie);
          localStorage.setItem("savedMovies", JSON.stringify(updateSaveMovie));
        })
        .catch((err) => console.log(`Ошибка ${err}`));
    }
  };

  const handleClosePopup = () => {
    setOpenedPopup(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/signup">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register handleRegister={handleRegister} />
            )}
          </Route>

          <Route path="/signin">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login handleLogin={handleLogin} />
            )}
          </Route>

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              handleUpdateUser={handleUpdateUser}
              signOut={signOut}
              loggedIn={loggedIn}
              error={error}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SaveMovies
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              error={error}
              searchSaveMovies={searchSaveMovies}
              deleteSaveMovie={deleteSaveMovie}
              isLoading={isLoading}
              toggleCheckbox={toggleCheckboxSaveMovies}
              isChecked={isChecked}
              disabled={disabled}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies
              loggedIn={loggedIn}
              saveMovie={saveMovie}
              deleteSaveMovie={deleteSaveMovie}
              savedMovies={savedMovies}
            />
          </ProtectedRoute>

          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>

        <InfoTooltip
          text={statusText}
          opened={openedPopup}
          close={handleClosePopup}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
