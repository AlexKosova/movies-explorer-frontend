import React from 'react';
import logo from '../../images/header__logo.svg';

export default function Auth({
  title,
  buttonText,
  postGreyText,
  postBlueText,
  children,
  onSubmit,
  childrenValue,
}) {
  const [emailValue, setEmailValue] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState('');

  function handlePass(e) {
    const x = e.target.value;
    if (x.length < 2) {
      setError('Нельзя меньше двух символов');
    }
    if (x.length > 2) setError('');
    setPass(e.target.value);
  }

  function handleEmail(e) {
    const x = e.target.value;
    if (x.length < 2) {
      setError('Нельзя меньше двух символов');
    }
    if (x.length > 2) setError('');
    setEmailValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let value = { email: emailValue, password: pass };
    if (childrenValue) value = { email: emailValue, password: pass, name: childrenValue };
    onSubmit(value);
  }

  function isDisabled() {
    if (error !== '') {
      return true;
    }
    return false;
  }

  return (
    <section className="auth">
      <div className="auth__container">
        <a href='/'><img className="logo logo_auth" src={logo} alt="лого"/></a>
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
            {children}
          <label className="auth__input-label">E-mail</label>
          <input
            className="auth__input"
            placeholder='Email'
            onChange={handleEmail}
            type="email"
            minLength="2"
            maxLength="40"
            required
            value={emailValue}
            id="userEmailInput"/>
          <label className="auth__input-label">Пароль</label>
          <input
            onChange={handlePass}
            placeholder='Пароль'
            className={ window.location.pathname === '/signup' ? 'auth__input' : 'auth__input auth__input-signin'}
            type="password"
            minLength="2"
            maxLength="40"
            required
            value={pass}
            id="userPassInput"/>
            <span id="nameInput-error" className="error-Auth">{error}</span>
          <button disabled={isDisabled() || error} type='submit' className={`${window.location.pathname === '/signup' ? 'auth__button auth__button_short' : 'auth__button auth__button_short auth__button-mobile'} ${isDisabled() || error ? 'auth__disabled-button' : ''}`} >{buttonText}</button>
        </form>
        <p className="auth__postscriptLink">{postGreyText}<a className="auth__postscriptLink-blue" href={window.location.pathname === '/signup' ? '/signin' : '/signup'}>{postBlueText}</a></p>
      </div>
    </section>
  );
}
