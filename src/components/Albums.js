import React from 'react';

import Album from './Album';

const Albums = React.memo(({ albums, setAlbumOwner, getAlbumsData }) => {

  React.useEffect(() => {
    getAlbumsData();
  }, []);

  return (
    <ul className='album-list'>
      {albums.map((album, i) => {
        setAlbumOwner(album);
        return <Album key={album.id} album={album} />
      })}
    </ul>
  )
})

export default Albums; 