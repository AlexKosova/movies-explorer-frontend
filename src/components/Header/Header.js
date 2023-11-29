import logo from '../../images/header__logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className={ window.location.pathname === '/' ? 'header' : 'header header_black'}>
      <div className="header__container">
        <a href='/'><img className="header__logo" src={logo} alt="Логотип"/></a>
        { window.location.pathname === '/'
          ? <div className="header__guest">
          <a href="/sign-up" className="header__signup">Регистрация</a>
          <a href="/sign-in" className="header__signin">Войти</a>
        </div>
          : <Navigation />
        }
      </div>
    </header>
  );
}
