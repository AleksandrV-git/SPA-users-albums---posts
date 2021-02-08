import React from 'react';
import { useParams } from 'react-router-dom';

import Photo from './Photo';

const AlbumPhotos = React.memo(({photos, getPhotos}) => {
  
  let { id } = useParams();

  const albumPhotos = photos.filter(photo => photo.albumId == id);

  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {albumPhotos.map((photo, i) => <Photo key={photo.id} photo={photo}/> )}
    </>
  )
})

export default AlbumPhotos; 