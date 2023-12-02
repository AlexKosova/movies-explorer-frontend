import React, { useState } from 'react';
import accLogo from '../../images/header__account.svg';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [button, setButton] = useState('header__profile-button_hidden');
  const handleResize = () => {
    if (window.screen.width > '1279') {
      setButton('header__profile-button');
    }
  };

  window.addEventListener('resize', handleResize);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={` ${showMenu ? 'navigation navigation_blur' : 'navigation'}`}>
      <button type='menu' className={` ${showMenu ? 'navigation__button-close' : 'navigation__button'}`} onClick={handleToggleMenu}></button>
      <ul className={` ${showMenu ? 'navigation__container_visible' : 'navigation__container'}`} >
        <li><a href="/" className={` ${showMenu ? 'header__button_mobile' : 'header__button_hidden header__button'}`}>Главная</a></li>
        <li><a href="/movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Фильмы</a></li>
        <li><a href="/saved-movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Сохранённые фильмы</a></li>
      </ul>
      <a href="/profile" className={` ${showMenu ? 'header__profile-button' : button}`}>
          <p className="header__text-button">Аккаунт</p>
          <img
          className="header__profile-pic header__profile-pic_black"
          src={accLogo}
          alt="аккаунт"/>
      </a>
    </nav>
  );
}
