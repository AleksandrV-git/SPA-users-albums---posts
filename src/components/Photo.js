import React from 'react';

const Photo = React.memo(({photo}) => {
  
  return (
    <div className="list-item">
      <h2>{photo.title}</h2>
      <img className='' src={photo.thumbnailUrl} alt='' />
    </div>
  )
})

export default Photo; 

      // [{"albumId": 1,
      // "id": 2,
      // "title": "reprehenderit est deserunt velit ipsam",
      // "url": "https://via.placeholder.com/600/771796",
      // "thumbnailUrl": "https://via.placeholder.com/150/771796"}]