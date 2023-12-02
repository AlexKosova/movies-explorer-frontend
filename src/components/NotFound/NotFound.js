import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="notFound">
        <h1 className="notFound__title">404</h1>
        <p className="notFound__subtitle">Страница не найдена</p>
      <button onClick={() => navigate(-1)} className="notFound__button">Назад</button>
    </section>
    </main>

  );
}
