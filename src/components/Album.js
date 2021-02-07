import React from 'react';
import { Link } from 'react-router-dom';


function Album (props) {
  
  const album = props.album;

  return (
    <Link to={`/albums/${album.id}`}>
      <div className="list-item">
        <h2>{album.ownerName}</h2>
        <div className="">{album.title}</div>
      </div>
    </Link>
  )
}

export default Album; 