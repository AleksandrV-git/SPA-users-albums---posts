import React from 'react';

import User from './User';

const Users = React.memo(({ users, getUsers }) => {

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='user-list'>
      {users.map((user, i) => { return <User key={user.id} user={user} /> })}
    </div>
  )
})

export default Users; 