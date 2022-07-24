import AboutMe from "../../components/AboutMe/AboutMe";
import AboutProject from "../../components/AboutProject/AboutProject";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Portfolio from "../../components/Portfolio/Portfolio";
import Promo from "../../components/Promo/Promo";
import Techs from "../../components/Techs/Techs";
import "./Main.css";

function Main() {
  return (
    <>
      <Header main={true} />
      <main className="page__content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
