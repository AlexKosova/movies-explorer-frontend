import React from 'react';
import Auth from '../Auth/Auth';

export default function Register({
  onSubmit,
}) {
  const [userName, setUserName] = React.useState('');

  function handleName(e) {
    setUserName(e.target.value);
  }
  const childrenValue = userName;

  return (
    <main className="register">
      <Auth
    title="Добро пожаловать!"
    buttonText="Зарегестрироваться"
    postGreyText="Уже зарегистрированы?"
    postBlueText="Войти"
    onSubmit={onSubmit}
    childrenValue={childrenValue}
    children={
      <>
      <label className="auth__input-label">Имя</label>
          <input
          onChange={handleName}
          className="auth__input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          name="userName"
          id="userNameInput"
          placeholder='Имя'
          value={userName}
          />
          <span className="error" id="userNameInput-error"></span>
      </>}
      />
    </main>
  );
}
