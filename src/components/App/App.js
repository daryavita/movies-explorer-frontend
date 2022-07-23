import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import SaveMovies from "../../pages/SaveMovies/SaveMovies";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/signup">
          <main className="page__content">
            <Register />
          </main>
        </Route>

        <Route path="/signin">
          <main className="page__content">
            <Login />
          </main>
        </Route>

        <Route path="/profile">
          <Header />
          <main className="page__content">
            <Profile />
          </main>
        </Route>

        <Route path="/saved-movies">
          <Header />
          <main className="page__content">
            <SaveMovies />
          </main>
          <Footer />
        </Route>

        <Route path="/movies">
          <Header />
          <main className="page__content">
            <Movies />
          </main>
          <Footer />
        </Route>

        <Route exact path="/">
          <Header main={true} />
          <main className="page__content">
            <Main />
          </main>
          <Footer />
        </Route>

        <Route path="*"><main className="page__content"><NotFoundPage/></main></Route>
      </Switch>
    </div>
  );
}

export default App;
