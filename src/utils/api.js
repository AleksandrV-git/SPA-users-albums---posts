class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUsers = () => {

    return fetch(this.baseUrl + "/users", { headers: this.headers })
      .then(res => {
        if (res.ok) { return res.json(); }
        return Promise.reject(res.status);
      })
  }

  getAlbums = () => {

    return fetch(this.baseUrl + "/albums", { headers: this.headers })
      .then(res => {
        if (res.ok) { return res.json(); }
        return Promise.reject(res.status);
      })
  }

  getPhotos = () => {

    return fetch(this.baseUrl + "/photos", { headers: this.headers })
      .then(res => {
        if (res.ok) { return res.json(); }
        return Promise.reject(res.status);
      })
  }

  getPosts = () => {

    return fetch(this.baseUrl + "/posts", { headers: this.headers })
      .then(res => {
        if (res.ok) { return res.json(); }
        return Promise.reject(res.status);
      })
  }

  postMessage = ({userName, userId, title, body}) => {

    return fetch(this.baseUrl + "/posts", {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({userName, userId, title, body})
    })
      .then(res => {
        if (res.ok) { return res.json(); }
        return Promise.reject(res.status);
      })
  }
}

const userApiOptions = {
  baseUrl: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Content-Type': 'application/json'
  }
};

//экземпляр класса
const api = new Api(userApiOptions);

export default api;