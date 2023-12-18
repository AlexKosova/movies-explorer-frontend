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

  getMovies() {
    return this._request(`${this._url}`, {
      headers: this._headers,
    });
  }
}

const movieApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default movieApi;
