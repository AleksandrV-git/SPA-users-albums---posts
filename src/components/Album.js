import React from 'react';
import { Link } from 'react-router-dom';


function Album ({album}) {
  
  return (
    <Link to={`/albums/${album.id}`}>
      <li className="albums-item">
        <h2 className="albums-item__title">{album.ownerName}</h2>
        <p className="albums-item__description">{album.title}</p>
      </li>
    </Link>
  )
}

export default Album; 