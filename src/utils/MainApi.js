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

  deleteMovie(id) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  getMovies() {
    return this._request(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  patchUserInfo(inputValue) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(inputValue),
    });
  }

  postLikedMovie(data) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.movies-explorer.alexk.nomoredomainsrocks.ru',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});

export default api;
