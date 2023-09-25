class Auth {
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

  signUp(userName, userEmail, userPassword) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        name: userName,
        password: userPassword,
        email: userEmail,
      })
    }).then(this._gerResponseJson);
  }


  signIn(userEmail, userPassword) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        password: userPassword,
        email: userEmail,
      })
    }).then(this._gerResponseJson);
  }

  signOut() {
    return fetch( `${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
    });
  }

  tokenCheck(token) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._gerResponseJson);
  }

}

export const auth = new Auth({
  baseUrl: 'https://api.movies.emoskvin.nomoredomainsicu.ru',
  headers: {
    'Content-Type': 'application/json'
  }
});
