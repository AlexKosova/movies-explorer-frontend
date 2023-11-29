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
        <img className="header__logo header__logo_auth" src={logo} alt="лого"/>
        <h1 className="auth_title">{title}</h1>
        <form className="auth__form">
          {children}
          <label for="userEmailInput" className="auth__input_label">E-mail</label>
          <input
          className="auth__input"
          onChange={handleEmail}
          type="email"
          minlength="2"
          maxlength="40"
          value={email}
          id="userEmailInput"/>
          <span className="error" id="userEmailInput-error"></span>
          <label for="userPassInput" className="auth__input_label">Пароль</label>
          <input
          onChange={handlePass}
          className={ window.location.pathname === '/sign-up' ? 'auth__input' : 'auth__input auth__input__signin'}
          type="password"
          minlength="2"
          maxlength="40"
          value={pass}
          id="userPassInput"/>
          <span className="error" id="userPassInput-error"></span>
          <button type='submit' className="auth__button auth__button_short">{buttonText}</button>
        </form>
        <p className="auth__postscriptLink">{postGreyText}<a className="auth__postscriptLink_blue" href={window.location.pathname === '/sign-up' ? '/sign-in' : '/sign-up'}>{postBlueText}</a></p>
      </div>
    </section>
  );
}
