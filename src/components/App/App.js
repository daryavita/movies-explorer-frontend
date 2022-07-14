import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages/Main/Main";

function App() {
  return (
    <div className="app__container">
      <Switch>
      <Route path="/movies">
          <Header />
        </Route>

        <Route exact path="/">
          <Header />
          <Main/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
