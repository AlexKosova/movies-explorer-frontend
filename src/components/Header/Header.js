import { NavLink } from 'react-router-dom';
import logo from '../../images/header__logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ isLoggedIn }) {
  return (
    <header className={ window.location.pathname === '/' ? 'header' : 'header header_color'}>
      <div className="header__container">
        <NavLink to='/'><img className="logo" src={logo} alt="Логотип"/></NavLink>
        {isLoggedIn === false
          ? <nav className="header__guest">
          <NavLink to="/signup" className="header__signup">Регистрация</NavLink>
          <NavLink to="/signin" className="header__signin">Войти</NavLink>
          </nav>
          : <Navigation />}
      </div>
    </header>
  );
}
