export const MAIN_API_BASE_URL = 'https://api.explore.movies.nomoredomains.sbs'

const checkResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
  
    return response.json().then((res) => {
        console.log('err-api', res.message)
        throw res.message;
    });
  };
  
  export const register = (name, email, password) => {
    return fetch(`${MAIN_API_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(checkResponse);
  };
  
  export const authorize = (email, password) => {
    return fetch(`${MAIN_API_BASE_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResponse);
  };
  
  export const getUser = (token) => {
    return fetch(`${MAIN_API_BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  };

  export const updateUserData = (token, name, email) => {
    return fetch(`${MAIN_API_BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email }),
    }).then(checkResponse);
  }