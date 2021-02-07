import React from 'react';
import { useParams } from 'react-router-dom';

import Photo from './Photo';

const AlbumPhotos = React.memo((props) => {
  
  let { id } = useParams();

  const photosData = props.serverData;
  const photos = photosData.filter(photo => photo.albumId == id);

  return (
    <>
      {photos.map((photo, i) => <Photo key={photo.id} photo={photo}/> )}
    </>
  )
})

export default AlbumPhotos; 