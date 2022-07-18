import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Preloader from '../../components/Preloader/Preloader'
import SearchForm from '../../components/SearchForm/SearchForm'
import './Movies.css'

function Movies() {
    return(
        <>
            <SearchForm />
            <Preloader />
            <MoviesCardList/>
        </>

    )

}

export default Movies