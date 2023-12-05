postLikedMovie(movieData) {
  return fetch(`${this._baseUrl}/movies`, {
    method: 'POST',
    headers: this._headers,
    credentials: 'include',
    body: JSON.stringify({
      country: movieData.country,
      director: movieData.director,
      duration: movieData.duration,
      year: movieData.year,
      description: movieData.description,
      image: `https://api.nomoreparties.co/${movieData.image.url}`,
      trailerLink: movieData.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movieData.image.formats.thumbnail.url}`,
      movieId: movieData.id,
      nameRU: movieData.nameRU,
      nameEN: movieData.nameEN,
    }),
  })
  .then(this._checkResponse)
};