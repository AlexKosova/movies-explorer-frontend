class Api {
    constructor(config) {
        this._url = config.baseUrl;
        this._headers = config.headers;
      }
    
    _request(link, options) {
        return fetch(link, options)
          .then(res => {
          if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    getProfileInfo() {
        return this._request(`${this._url}/profile`, {
          headers: this._headers
        })
      }

    getProjectInfo() {
        return this._request(`${this._url}/`, {
          headers: this._headers
        })
    }

    getMovies() {
        return this._request(`${this._url}/movies`, {
          headers: this._headers
        })
    }

    getSavedMovies() {
        return this._request(`${this._url}/saved-movies`, {
          headers: this._headers
        })
    }
}

const api = new Api ({ baseUrl: "http://localhost:8080",
    headers: {
        authorization: "fb85a167-fa0c-4b77-b6c4-6e80ca894d63",
        "Content-Type": "application/json",
    },})
    
export default api