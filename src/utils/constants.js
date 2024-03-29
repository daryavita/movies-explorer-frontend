export const getInitialMovies = (width) => {
  if (width >= 1280) {
    return 12;
  }
  if (width >= 768) {
    return 8;
  }
  return 5;
};

export const getLoadMovies = (width) => {
  if (width >= 1280) {
    return 3;
  }
  return 2;
};

export const defaultImg = "https://webstockreview.net/images/cinema-clipart-movie-maker-8.png"