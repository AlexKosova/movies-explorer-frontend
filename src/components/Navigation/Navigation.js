import React, { useEffect, useState } from 'react';
import accLogo from '../../images/header__account.svg';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  // const [profileButton, setProfileButton] = useState('header__profile-button_hidden');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
      setTimeout(() => {
        setWidth(e.target.innerWidth);
      }, 1000);
      // if (width > '1279' || showMenu) {
      //   setProfileButton('header__profile-button');
      // }
    };

    window.addEventListener('resize', handleResize);
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={` ${showMenu ? 'navigation navigation_blur' : 'navigation'}`}>
      <button type='menu' className={` ${showMenu ? 'navigation__button-close' : 'navigation__button'}`} onClick={handleToggleMenu}></button>
      <ul className={` ${showMenu ? 'navigation__container_visible' : 'navigation__container'}`}>
        <a href="/" className={` ${showMenu ? 'header__button_mobile' : 'header__button_hidden header__button'}`}>Главная</a>
        <a href="/movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Фильмы</a>
        <a href="/saved-movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Сохранённые фильмы</a>
        <a href="/profile" className={`${showMenu ? 'header__profile-button' : 'header__profile-button_hidden'}`}>
          <p className="header__text-button">Аккаунт</p>
          <img
          className="header__profile-pic header__profile-pic_black"
          src={accLogo}
          alt="аккаунт"/>
        </a>
      </ul>
      <a href="/profile" className={`${width > '1279' ? 'header__profile-button' : 'header__profile-button_hidden'}`}>
          <p className="header__text-button">Аккаунт</p>
          <img
          className="header__profile-pic header__profile-pic_black"
          src={accLogo}
          alt="аккаунт"/>
      </a>
    </nav>
  );
}
