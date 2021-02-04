import React from 'react';
import usersArr from './users';
import User from './User';

function App() {

  const [users, setUsers] = React.useState([]);

  function getUsers() {
    const arr = usersArr.slice();
    setUsers(arr);
    // api.getInitialCards()
    //   .then((res) => { const arr = res.slice(); setCards(arr) })
    //   .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  React.useEffect(() => {
    getUsers()
  }, []);
  
  return (
    <div className="root">
      <header className="App-header">
      </header>
      {users.map((user, i) => {
          return <User key={user.id} user={user}/>
      })}
    </div>
  );
}

export default App;
