import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import api from '../utils/api';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';
import Albums from './Albums';
import AlbumPhotos from './AlbumPhotos';
import PostForm from './PostForm';
import NavBar from './NavBar';

function App() {

  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  const [currentAlbumOwner, setCurrentAlbumOwner] = React.useState("");

  function getUsers() {
    api.getUsers()
      .then((res) => { setUsers(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getPhotos() {
    api.getPhotos()
      .then((res) => { setPhotos(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getAlbums() {
    api.getAlbums()
      .then((res) => { setAlbums(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getPosts() {
    api.getPosts()
      .then((res) => { setPosts(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function handleAddPost(postData) {
    api.postMessage(postData)
      .then((res) => { setPosts([...posts, res]); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function setAlbumOwner(album) {
    const owner = users.find((user) => { return user.id === album.userId });
    if (owner) { album.ownerName = owner.name }
    else { console.log('имя владельца альбома не найдено'); }
  }

  function setPostOwner(post) {
    const owner = users.find((user) => { return user.id === post.userId });
    if (owner) { post.ownerName = owner.name }
    else { console.log('имя владельца поста не найдено'); }
  }

  function getAlbumsData() {
    getUsers();
    getAlbums();
  }

  function getPostsData() {
    getUsers();
    getPosts();
  }

  return (
    <BrowserRouter>
      <div className="root">
        <header className="header">
          <Link className="logo" to="/SPA-users-albums-and-posts/">SinglePageApplication</Link>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/SPA-users-albums-and-posts/">
            <Home />
          </Route>
          <Route path="/SPA-users-albums-and-posts/users">
            <Users getUsers={getUsers} users={users} />
          </Route>
          <Route path="/SPA-users-albums-and-posts/posts">
            <PostForm onAddPost={handleAddPost} />
            <Posts getPostsData={getPostsData} setPostOwner={setPostOwner} posts={posts} />
          </Route>
          <Route exact path="/SPA-users-albums-and-posts/albums">
            <Albums onAlbumClick={setCurrentAlbumOwner} getAlbumsData={getAlbumsData} setAlbumOwner={setAlbumOwner} albums={albums} />
          </Route>
          <Route exact path="/SPA-users-albums-and-posts/albums/:id">
            <AlbumPhotos getPhotos={getPhotos} photos={photos} currentAlbumOwner={currentAlbumOwner} />
          </Route>
          <Route path="*">
            <p>Not Found</p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
