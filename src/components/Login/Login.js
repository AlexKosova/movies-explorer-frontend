import React from 'react';
import Auth from '../Auth/Auth';

export default function Login() {
  return (
    <main>
      <section className="login">
        <Auth
        title="Рады видеть!"
        buttonText="Войти"
        postGreyText="Ещё не зарегистрированы?"
        postBlueText="Регистрация"
        />
      </section>
    </main>
  );
}
