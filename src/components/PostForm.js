import React from 'react';

function PopupForm({ onAddPost }) {

  const [name, setName] = React.useState('');
  const [messageText, setMessageText] = React.useState('');
  const [title, setTitle] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleMessageText(e) {
    setMessageText(e.target.value);
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // так как нет авторизации в id записано null, имя задается через форму и сохраняется в userName 
    onAddPost({
      userName: name,
      userId: null,
      //id: null,
      title: title,
      body: messageText,
    });
  }

  return (
    <>
      <form className="postform" onSubmit={handleSubmit} name='postForm'>
        <input value={name} onChange={handleName} id="name" type="text" name="name"
          className="" placeholder="Имя" required minLength="2" maxLength="30" />
        <input value={title} onChange={handleTitle} id="title" type="text" name="title"
          className="" placeholder="Тема сообщения" required minLength="2" maxLength="30" />
        <input value={messageText} onChange={handleMessageText} id="message" type="text" name="message"
          className="" placeholder="текст сообщения" required minLength="2" maxLength="100" />
        <button className="button">Сохранить</button>
      </form>
    </>
  );
}

export default PopupForm; 