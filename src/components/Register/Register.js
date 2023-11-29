import React from 'react';
import Auth from '../Auth/Auth';

export default function Register() {
  const [userName, setUserName] = React.useState('');

  function handleName(e) {
    setUserName(e.target.value);
  }

  return (
    <section class="register">
      <Auth
    title="Добро пожаловать!"
    buttonText="Зарегестрироваться"
    postGreyText="Уже зарегистрированы?"
    postBlueText="Войти"
    children={
      <>
      <label for="userNameInput" className="auth__input_label">Имя</label>
          <input
          onChange={handleName}
          className="auth__input"
          type="text"
          minlength="2"
          maxlength="40"
          name="userName"
          id="userNameInput"
          value={userName}/>
          <span className="error" id="userNameInput-error"></span>
      </>}
      />
    </section>
  );
}
