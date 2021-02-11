import React from 'react';

import Album from './Album';

const Albums = React.memo(({ albums, setAlbumOwner, getAlbumsData , onAlbumClick}) => {

  React.useEffect(() => {
    getAlbumsData();
  }, []);

  return (
    <ul className='album-list'>
      {albums.map((album, i) => {
        setAlbumOwner(album);
        return <Album onAlbumClick={onAlbumClick} key={album.id} album={album} />
      })}
    </ul>
  )
})

export default Albums; 