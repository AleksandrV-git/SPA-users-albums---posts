import React from 'react';

const Photo = React.memo(({photo}) => {
  
  return (
    <li className="photo-item">
      <img className="photo-item__img" src={photo.url} alt='' />
      <p className="photo-item__description" >{photo.title}</p>
    </li>
  )
})

export default Photo; 

      // [{"albumId": 1,
      // "id": 2,
      // "title": "reprehenderit est deserunt velit ipsam",
      // "url": "https://via.placeholder.com/600/771796",
      // "thumbnailUrl": "https://via.placeholder.com/150/771796"}]