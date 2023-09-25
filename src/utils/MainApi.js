class Api {
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

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => this._gerResponseJson(res));
  }

  updateUserAvatar({ image }) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar: image
      })
    })
      .then(res => this._gerResponseJson(res));
  }

  addCard({ name, link }) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => this._gerResponseJson(res));
  }

  removeCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }

  setLike(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }

  removeLike(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._gerResponseJson(res));
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this.url}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this.headers,
        credentials: 'include',
      })
        .then(res => this._gerResponseJson(res));
    } else {
      return fetch(`${this.url}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this.headers,
        credentials: 'include',
      })
        .then(res => this._gerResponseJson(res));
    }
  }
}

export const api = new Api({
  baseUrl: 'https://api.movies.emoskvin.nomoredomainsicu.ru/',
  headers: {
    'Content-Type': 'application/json'
  }
});