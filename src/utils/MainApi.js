class MainApi {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
  }

  _gerResponseJson(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  updateUserInfo({userName, userEmail}) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    })
      .then(res => this._gerResponseJson(res));
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }

  setLike(movie) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.id,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      })
    })
      .then(res => this._gerResponseJson(res));
  }

  removeLike(id) {
    return fetch(`${this.url}/movies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }

  getMovies() {
    return fetch(`${this.url}/movies`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.movies.emoskvin.nomoredomainsicu.ru',
  headers: {
    'Content-Type': 'application/json'
  }
});
