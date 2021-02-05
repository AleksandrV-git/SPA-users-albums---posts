import React from 'react';
import usersArr from './users';
import postsArr from './posts';
import User from './User';
import Post from './Post';
import PostForm from './PostForm';

function App() {

  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  function getUsers() {
    const arr = usersArr.slice();
    setUsers(arr);
    // api.getInitialCards()
    //   .then((res) => { const arr = res.slice(); setCards(arr) })
    //   .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getPosts() {
    const arr = postsArr.slice();
    setPosts(arr);
    // api.getInitialCards()
    //   .then((res) => { const arr = res.slice(); setCards(arr) })
    //   .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function handleAddPost(post) {
    setPosts([...posts, post]);
  }

  React.useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return (
    <div className="root">
      <header className="">
      </header>
      {/* {users.map((user, i) => {
          return <User key={user.id} user={user}/>
      })} */}
      <div className='post-list'>
        <PostForm onAddPost={handleAddPost}/>
        {posts.map((post, i) => {
          users.forEach(user => { if (user.id == post.userId) { post.ownerName = user.name } })
          return <Post key={post.id} post={post} />
        })}
      </div>

    </div>
  );
}

export default App;
