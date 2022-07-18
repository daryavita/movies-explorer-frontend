import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import SaveMovies from "../../pages/SaveMovies/SaveMovies";

function App() {
  return (
    <div className="page">
      <Switch>
      <Route path="/saved-movies">
          <Header />
          <main className="page__content">
            <SaveMovies />
          </main>
        </Route>

        <Route path="/movies">
          <Header />
          <main className="page__content">
            <Movies />
          </main>
        </Route>

        <Route exact path="/">
          <Header main={true}/>
          <main className="page__content">
            <Main />
          </main>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
