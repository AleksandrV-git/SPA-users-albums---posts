import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import usersArr from '../Data/users';
import postsArr from '../Data/posts';
import albumsArr from '../Data/albums';
import photosArr from '../Data/photos';
import User from './User';
import Post from './Post';
import Album from './Album';
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

  React.useEffect(() => {
    getUsers();
    getPosts();
    getAlbums();
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
            <div className='post-list'>
              <PostForm onAddPost={handleAddPost} />
              {posts.map((post, i) => {
                users.forEach(user => { if (user.id == post.userId) { post.ownerName = user.name } })
                return <Post key={post.id} post={post} />
              })}
            </div>
          </Route>
          <Route exact path="/albums">
            <div className='post-list'>
              {albums.map((album, i) => {
                users.forEach(user => { if (user.id == album.userId) { album.ownerName = user.name } })
                return <Album key={album.id} album={album} />
              })}
            </div>
          </Route>
          <Route exact path="/albums/:id">
            <AlbumPhotos serverData={photos}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
