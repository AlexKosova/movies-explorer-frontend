import React, { useState } from 'react';
import Header from '../Header/Header';

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  function handleChangeInfo(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
  }

  return (
    <>
    <Header/>
    <main>
      <section className="profile">
          <form className="profile__form" id='editProfile__form' onSubmit={handleSubmit}>
        <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>
          <div className="profile__input-container">
            <p for="inputName" className="profile__label">Имя</p>
            <input disabled={!isEdit} onChange={handleChangeInfo} name='name' className="profile__input" id="inputName" type="text" value={user.name}/>
          </div>
          <div className="profile__input-container">
            <p for="inputEmail" className="profile__label">E-mail</p>
            <input disabled={!isEdit} onChange={handleChangeInfo} name='email' className="profile__input" id="inputEmail" type="text" value={user.email}/>
          </div>
          {isEdit ? (
        <button type='submit' className="auth__button auth__button_long">Сохранить</button>
          ) : (
        <>
        <button className="profile__button" id="editButton" type="button" onClick={() => setIsEdit(true)}>Редактировать</button>

        <button type='button' className="profile__button" id="logoutButton"><a className="profile__button-text" href='/'>Выйти из аккаунта</a></button>
        </>
          )
        }
        </form>
      </section>
    </main>
    </>
  );
}
