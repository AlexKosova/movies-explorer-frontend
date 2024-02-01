/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */
class AuthApi {
  constructor(config) {
    this._url = config.baseUrl;
  }

  _request(link, options) {
    return fetch(link, options)
      .then((res) => {
        if (res.ok) { return res.json(); }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  register(data) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  login(data) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  logout() {
    return this._request(`${this._url}/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}

const authApi = new AuthApi({
  baseUrl: 'https://api.movies-explorer.alexk.nomoredomainsrocks.ru',
});

export default authApi;

// https://api.movies-explorer.alexk.nomoredomainsrocks.ru
// http://127.0.0.1:3001
