import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import usersArr from '../Data/users';
import postsArr from '../Data/posts';
import albumsArr from '../Data/albums';
import photosArr from '../Data/photos';
import api from '../utils/api';
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


  function getUsers() {
    //setUsers(usersArr);
    api.getUsers()
      .then((res) => { setUsers(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getPhotos() {
    //setPhotos(photosArr);
    api.getPhotos()
      .then((res) => { setPhotos(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getAlbums() {
    //setAlbums(albumsArr);
    api.getAlbums()
      .then((res) => { setAlbums(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getPosts() {
    //setPosts(postsArr);
    api.getPosts()
      .then((res) => { setPosts(res); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function handleAddPost(postData) {
    //setPosts([...posts, post]);
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
          <div className="logo">SinglePageApplication</div>
          <NavBar />
        </header>
        <Switch>
          <Route path="/users">
            <Users getUsers={getUsers} users={users} />
          </Route>
          <Route path="/posts">
            <PostForm onAddPost={handleAddPost} />
            <Posts getPostsData={getPostsData} setPostOwner={setPostOwner} posts={posts} />
          </Route>
          <Route exact path="/albums">
            <Albums getAlbumsData={getAlbumsData} setAlbumOwner={setAlbumOwner} albums={albums} />
          </Route>
          <Route exact path="/albums/:id">
            <AlbumPhotos getPhotos={getPhotos} photos={photos} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
