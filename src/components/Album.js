import React from 'react';
import { Link } from 'react-router-dom';

import userIcon from '../images/user.png';

function Album({ album }) {

  return (
    <Link className="albums-item__link" to={`/albums/${album.id}`}>
      <li className="albums-item">
        <div className="albums-item__title-container" >
          <img className="albums-item__user-icon" src={userIcon} ></img>
          <h2 className="albums-item__title">{album.ownerName}</h2>
        </div>
        <p className="albums-item__description">{album.title}</p>
      </li>
    </Link>
  )
}

export default Album; 