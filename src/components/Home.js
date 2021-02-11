import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-container__title">Приложение для просмотра постов, альбомов и информации о пользователях</h1>
      <Link className="button home-container__button" to="/users">Пользователи</Link>
      <Link className="button home-container__button" to="/posts">Посты</Link>
      <Link className="button home-container__button" to="/albums">Альбомы</Link>
    </div>
  );
}

export default Home;