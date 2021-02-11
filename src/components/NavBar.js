import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink exact className="menu__item" activeClassName="menu__item_active" to="/users">Пользователи</NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="menu__item" activeClassName="menu__item_active" to="/posts">Посты</NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="menu__item" activeClassName="menu__item_active" to="/albums">Альбомы</NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;