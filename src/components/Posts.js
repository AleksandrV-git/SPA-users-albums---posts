import React from 'react';

import Post from './Post';

const Posts = React.memo(({ posts, setPostOwner, getPostsData }) => {

  React.useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className='post-list'>
      {posts.map((post, i) => {
        setPostOwner(post);
        return <Post key={post.id} post={post} />
      })}
    </div>
  )
})

export default Posts; 