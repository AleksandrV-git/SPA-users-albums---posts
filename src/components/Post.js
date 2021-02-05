import React from 'react';
//import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Post = React.memo((props) => {
 // const currentUser = React.useContext(CurrentUserContext);
  const post = props.post; 
//   const isOwn = card.owner._id === currentUser._id;
//   const cardDeleteButtonStyle = isOwn ? "block" : 'none';
//   const isLiked = card.likes.some(i => i._id === currentUser._id);
//   const cardLikeButtonClassName = (
//     `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`
//   ); 

  return (
    <>
    <div className="list-item">
    {/* если не задано ownerName используется заданное через форму имя в userName */}
      <h2>{post.ownerName || post.userName}</h2>
      <div className=""></div>
      <div className="">{post.title}</div>
      <div className="">{post.body}</div>
    </div>
    </>
  )
})

export default Post; 

// {
//     "userId": 10,
//     "id": 100,
//     "title": "at nam consequatur ea labore ea harum",
//     "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
//   }