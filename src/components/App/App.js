import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import SaveMovies from "../../pages/SaveMovies/SaveMovies";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/saved-movies">
          <SaveMovies />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
