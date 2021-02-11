import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-container__title">Приожение для просмотра постов, льбомов и информации о пользователях</h1>
      <Link className="button home-container__button" to="/SPA-users-albums-and-posts/users">Пользователи</Link>
      <Link className="button home-container__button" to="/SPA-users-albums-and-posts/posts">Посты</Link>
      <Link className="button home-container__button" to="/SPA-users-albums-and-posts/albums">Альбомы</Link>
    </div>
  );
}

export default Home;