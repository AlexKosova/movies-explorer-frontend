import React, { useState } from 'react';
import accLogo from '../../images/header__account.svg';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={` ${showMenu ? 'navigation navigation_blur' : 'navigation'}`}>
      <button className={` ${showMenu ? 'navigation__button-close' : 'navigation__button'}`} onClick={handleToggleMenu}></button>
      <ul className={` ${showMenu ? 'navigation__container_visible' : 'navigation__container'}`} >
        <li><a href="/" className={` ${showMenu ? 'header__button_mobile' : 'header__button_hidden header__button'}`}>Главная</a></li>
        <li><a href="/movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Фильмы</a></li>
        <li><a href="/saved-movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Сохранённые фильмы</a></li>
        <li>
          <a href="/profile" className="header__profile-button">
            <p className="header__text-button">Аккаунт</p>
            <img
          className="header__profile-pic header__profile-pic_black"
          src={accLogo}
          alt="аккаунт"/>
            </a>
        </li>
      </ul>
    </nav>
  );
}
