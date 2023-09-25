class MoviesApi {
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

    getMovies() {
        return fetch(`${this.url}`, {
            headers: this.headers,
        })
            .then(res => this._gerResponseJson(res));
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
    headers: {
        'Content-Type': 'application/json'
    }
});

