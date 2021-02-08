import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import usersArr from '../Data/users';
import postsArr from '../Data/posts';
import albumsArr from '../Data/albums';
import photosArr from '../Data/photos';
import User from './User';
import Posts from './Posts';
import Post from './Post';
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
    const arr = usersArr.slice();
    setUsers(arr);
    // api.getInitialCards()
    //   .then((res) => { const arr = res.slice(); setCards(arr) })
    //   .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getPosts() {
    setPosts([...postsArr]);
    // api.getInitialCards()
    //   .then((res) => { const arr = res.slice(); setCards(arr) })
    //   .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getAlbums() {
    setAlbums([...albumsArr]);
    console.log(albums);
    // api.getInitialCards()
    //   .then((res) => { const arr = res.slice(); setCards(arr) })
    //   .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getPhotos() {
    setPhotos([...photosArr]);
    console.log(photos);
    // api.getInitialCards()
    //   .then((res) => { const arr = res.slice(); setCards(arr) })
    //   .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function handleAddPost(post) {
    setPosts([...posts, post]);
  }

  function setAlbumOwner(album) {
    const owner = users.find((user) => { return user.id == album.userId });
    if (owner) { album.ownerName = owner.name }
    else { console.log('имя владельца альбома не найдено'); }
  }

  function setPostOwner(post) {
    const owner = users.find((user) => { return user.id == post.userId });
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

  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <BrowserRouter>
      <div className="root">
        <header className="">
          <NavBar />
        </header>
        <Switch>
          <Route path="/users">
            {users.map((user, i) => { return <User key={user.id} user={user} /> })}
          </Route>
          <Route path="/posts">
            <PostForm onAddPost={handleAddPost} />
            <Posts getPostsData={getPostsData} setPostOwner={setPostOwner} posts={posts} />
          </Route>
          <Route exact path="/albums">
            <Albums getAlbumsData={getAlbumsData} setAlbumOwner={setAlbumOwner} albums={albums} />
          </Route>
          <Route exact path="/albums/:id">
            <AlbumPhotos serverData={photos} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
