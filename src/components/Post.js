import React from 'react';

import userIcon from '../images/user.png';

const Post = React.memo(({ post }) => {

  return (
    <li className="post-item">
      <div className="post-item__title-container" >
        <img className="post-item__user-icon" src={userIcon} ></img>
        {/* если не задано ownerName используется заданное через форму имя в userName */}
        <h2 className="post-item__title">{post.ownerName || post.userName || ''}</h2>
      </div>
      <p className="post-item__message-subject">{post.title}</p>
      <p className="post-item__text">{post.body}</p>
    </li>
  )
})

export default Post;