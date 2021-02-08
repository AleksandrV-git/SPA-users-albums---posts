import React from 'react';

import Album from './Album';

const Albums = React.memo(({ albums, setAlbumOwner, getAlbumsData }) => {

  React.useEffect(() => {
    getAlbumsData();
  }, []);

  return (
    <div className='post-list'>
      {albums.map((album, i) => {
        setAlbumOwner(album);
        return <Album key={album.id} album={album} />
      })}
    </div>
  )
})

export default Albums; 