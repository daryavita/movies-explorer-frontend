import AboutProject from '../../components/AboutProject/AboutProject'
import Portfolio from '../../components/Portfolio/Portfolio'
import Promo from '../../components/Promo/Promo'
import Techs from '../../components/Techs/Techs'
import './Main.css'


function Main() {
    return(
        <><Promo />
        <AboutProject />
        <Techs/>
        <Portfolio/>
        </>
    )
}

export default Main