/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */
class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  _request(link, options) {
    return fetch(link, options)
      .then((res) => {
        if (res.ok) { return res.json(); }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getSavedMovie() {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    });
  }

  deleteMovie(id) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    });
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    });
  }

  patchUserInfo() {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
    });
  }

  postLikedMovie(data) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    });
  }
}

const api = new Api({
  baseUrl: 'https://localhost3000',
  headers: {
    // authorization: 'fb85a167-fa0c-4b77-b6c4-6e80ca894d63',
    'Content-Type': 'application/json',
  },
});

export default api;
