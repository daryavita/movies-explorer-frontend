export const MOVIES_API_BASE_URL = 'https://api.nomoreparties.co'

export const getMovies = () => {
    return fetch(`${MOVIES_API_BASE_URL}/beatfilm-movies`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };