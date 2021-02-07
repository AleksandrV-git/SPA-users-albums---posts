import React from 'react';

import Album from './Album';

const Albums = React.memo(({ albums, users, getAlbumsData }) => {

  React.useEffect(() => {
    getAlbumsData();
  }, []);

  return (
    <div className='post-list'>
      {albums.map((album, i) => {
        users.forEach(user => { if (user.id == album.userId) { album.ownerName = user.name } })
        return <Album key={album.id} album={album} />
      })}
    </div>
  )
})

export default Albums; 