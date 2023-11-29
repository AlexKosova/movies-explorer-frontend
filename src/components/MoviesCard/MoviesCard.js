import React from 'react';

export default function MoviesCard({ card }) {
  function getTime(data) {
    const time = Number(data);
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours ? `${hours}ч` : ''} ${minutes}м`.trim();
  }

  return (
    <li className="moviesCard">
      <img src={card.image} className="moviesCard__image" alt="превью"/>
    <h6 className="moviesCard__title">{card.title}</h6>
    <button onClick={card.saved} className={card.saved ? 'moviesCard__button moviesCard__button_active' : 'moviesCard__button'} type="button"></button>
    <p className="moviesCard__time">{getTime(card.time)}</p>
    </li>
  );
}
