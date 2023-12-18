import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext/CurrentUserContext';

export default function Profile({
  onUpdateUser,
  onLogout,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [emailValue, setEmailValue] = React.useState(currentUser.email);
  const [nameValue, setNameValue] = React.useState(currentUser.name);

  const [error, setError] = React.useState('');

  function handleChangeName(e) {
    const x = e.target.value;
    if (x.length < 2) {
      setError('Нельзя меньше двух символов');
    }
    setNameValue(e.target.value);
    console.log(e.target.value);
  }

  function handleChangeEmail(e) {
    const x = e.target.value;
    if (x.length < 2) {
      setError('Нельзя меньше двух символов');
    }
    setEmailValue(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    onUpdateUser({
      name: nameValue || currentUser.name,
      email: emailValue || currentUser.email,
    });
    setIsEdit(false);
    setError('Успешно изменено');
  }

  function isDisabled() {
    if (
      nameValue === currentUser.inputName
      && emailValue === currentUser.inputEmail) {
      return true;
    } return false;
  }

  function handleLogout() {
    onLogout();
  }

  return (
    <>
    <Header/>
    <main>
      <section className="profile">
          <form className="profile__form" id='editProfile__form' onSubmit={handleSubmit}>
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile__input-container">
            <p className="profile__label">Имя</p>
            <input
            disabled={!isEdit}
            onChange={handleChangeName}
            name='name'
            className="profile__input"
            id="inputName"
            type="text"
            minLength="2"
            maxLength="40"
            value={isEdit ? nameValue : currentUser.name || ''}
            required
              />
          </div>
          <div className="profile__input-container">
            <p className="profile__label">E-mail</p>
            <input
            disabled={!isEdit}
            onChange={handleChangeEmail}
            name='email'
            className="profile__input"
            id="inputEmail"
            type='text'
            value={isEdit ? emailValue : currentUser.email || ''}
            required
            />
            <span id="nameInput-error" className="error">{error}</span>
          </div>
          {isEdit ? (
        <button
        disabled={isDisabled() || error}
        type='submit'
        className={`auth__button-save auth__button auth__button_long ${isDisabled() || error ? 'auth__disabled-button' : ''}`}
        >Сохранить</button>
          ) : (
        <>
        <button className="profile__button" id="editButton" type="button" onClick={() => setIsEdit(true)}>Редактировать</button>
        <NavLink onClick={handleLogout} className="profile__button profile__button-text" to='/'>Выйти из аккаунта</NavLink>
        </>
          )
        }
        </form>
      </section>
    </main>
    </>
  );
}
