import React, { useContext, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext/CurrentUserContext';
import { VALID_EMAIL } from '../../utils/constants';

export default function Profile({
  onUpdateUser,
  onLogout,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [emailValue, setEmailValue] = React.useState(currentUser.email);
  const [nameValue, setNameValue] = React.useState(currentUser.name);
  const [error, setError] = React.useState('');
  const [isNameChanged, setNameChanged] = React.useState(false);
  const [isEmailChanged, setEmailChanged] = React.useState(false);

  // React.useEffect(() => {
  //   setNameValue(currentUser.name);
  //   setEmailValue(currentUser.email);
  //   console.log(currentUser);
  // }, []);

  function handleChangeName(e) {
    const x = e.target.value;
    if (x.length < 2) {
      setError('Нельзя меньше двух символов');
    }
    setNameValue(e.target.value);
    if (String(e.target.value) !== String(currentUser.name)) {
      return setNameChanged(true);
    }
    console.log(currentUser.name);
    console.log(e.target.value);
    return setNameChanged(false);
  }

  function handleChangeEmail(e) {
    const x = e.target.value;
    if (x.length < 2) {
      setError('Нельзя меньше двух символов');
    }
    setEmailValue(e.target.value);
    if (e.target.value !== currentUser.email) {
      return setEmailChanged(true);
    }
    console.log(e.target.value);
    if (!VALID_EMAIL.test(e.target.value.toLowerCase())) setError('пожалуйста, введите корректный email');
    return setEmailChanged(false);
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
      !isEmailChanged
      && !isNameChanged) {
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
        <button onClick={handleLogout} className="profile__button profile__button-text">Выйти из аккаунта</button>
        </>
          )
        }
        </form>
      </section>
    </main>
    </>
  );
}
