import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      <button type='button' className={` ${showMenu ? 'navigation__button-close' : 'navigation__button'}`} onClick={handleToggleMenu}></button>
      <div className={` ${showMenu ? 'navigation__container_visible' : 'navigation__container'}`}>
        <NavLink to="/" className={` ${showMenu ? 'header__button_mobile' : 'header__button_hidden header__button'}`}>Главная</NavLink>
        <NavLink to="/movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={` ${showMenu ? 'header__button_mobile' : 'header__button'}`}>Сохранённые фильмы</NavLink>
        <NavLink to="/profile" className={`${showMenu ? 'header__profile-button' : 'header__profile-hideButton'}`}>
          <p className="header__text-button">Аккаунт</p>
          <img
          className="header__profile-pic header__profile-pic_black"
          src={accLogo}
          alt="аккаунт"/>
        </NavLink>
      </div>
      <NavLink href="/profile" className={`${width > '1279' ? 'header__profile-button' : 'header__profile-hideButton'}`}>
          <p className="header__text-button">Аккаунт</p>
          <img
          className="header__profile-pic header__profile-pic_black"
          src={accLogo}
          alt="аккаунт"/>
      </NavLink>
    </nav>
  );
}
