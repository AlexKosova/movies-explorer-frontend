import React from 'react';
import logo from '../../images/header__logo.svg';

export default function Auth({
  title,
  buttonText,
  postGreyText,
  postBlueText,
  children,
}) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  function handlePass(e) {
    setPass(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="auth">
      <div className="auth__container">
        <a href='/'><img className="logo logo_auth" src={logo} alt="лого"/></a>
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form">
            {children}
          <label for="userEmailInput" className="auth__input-label">E-mail</label>
          <input
            className="auth__input"
            placeholder='Email'
            onChange={handleEmail}
            type="email"
            minlength="2"
            maxlength="40"
            required
            value={email}
            id="userEmailInput"/>
          <span className="error" id="userEmailInput-error"></span>
          <label for="userPassInput" className="auth__input-label">Пароль</label>
          <input
            onChange={handlePass}
            placeholder='Пароль'
            className={ window.location.pathname === '/signup' ? 'auth__input' : 'auth__input auth__input-signin'}
            type="password"
            minlength="2"
            maxlength="40"
            required
            value={pass}
            id="userPassInput"/>
          <span className="error" id="userPassInput-error"></span>
          <button type='submit' className={`${window.location.pathname === '/signup' ? 'auth__button auth__button_short' : 'auth__button auth__button_short auth__button-mobile'}  `}>{buttonText}</button>
        </form>
        <p className="auth__postscriptLink">{postGreyText}<a className="auth__postscriptLink-blue" href={window.location.pathname === '/signup' ? '/signin' : '/signup'}>{postBlueText}</a></p>
      </div>
    </section>
  );
}
