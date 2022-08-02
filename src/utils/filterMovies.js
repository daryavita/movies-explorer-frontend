export const filterMovies = (movies, keyWord, isShortMovies) => {
  let filtredMoviesArr = getMoviesByKeyWord(movies, keyWord);
  if (isShortMovies) {
    return (filtredMoviesArr = getShortMovies(filtredMoviesArr));
  } else {
    return filtredMoviesArr;
  }
};

const getMoviesByKeyWord = (movies, keyWord) => {
  let moviesByKeyword = [];
  movies.filter((movie) => {
    if (movie.nameRU.toLowerCase().includes(keyWord)) {
      moviesByKeyword.push(movie);
    }
  });
  if (moviesByKeyword.length === 0) {
    return;
  }
  return moviesByKeyword;
};

const getShortMovies = (moviesByKeyword) => {
  let shortMovies = [];
  moviesByKeyword.map((movie) => {
    if (movie.duration <= 40) {
      shortMovies.push(movie);
    }
  });
  if (shortMovies.length === 0) {
    return;
  }
  return shortMovies;
};
