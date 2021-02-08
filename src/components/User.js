import React from 'react';

const User = React.memo(({user}) => {

  return (
    <>
      <div className="list-item">
        <div className="">Имя: {user.name}</div>
        <div className="">Ник: {user.username}</div>
        <div className="">E-mail: {user.email}</div>
        <div className="">Адрес: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</div>
        <div className="">Номер телефона: {user.phone}</div>
        <div className="">Веб-сайт: {user.website}</div>
        <div className="">Компания: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</div>
      </div>
    </>
  )
})

export default User; 

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },