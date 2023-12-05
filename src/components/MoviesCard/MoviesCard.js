import React from 'react';

export default function MoviesCard({ card }) {
  function getTime(data) {
    const time = Number(data);
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours ? `${hours}ч` : ''} ${minutes}м`.trim();
  }

  // function handleLikeMovies (e) {
  //   e.preventDefault();
  // }
  return (
    <li className="moviesCard">
    <img src={ `https://api.nomoreparties.co/${card.image.url}` } className="moviesCard__image" alt={card.nameRu}/>
    <h2 className="moviesCard__title">{card.nameRU}</h2>
    <button type="button" onClick={card.saved} className={card.saved ? 'moviesCard__button moviesCard__button_active' : 'moviesCard__button'} ></button>
    <p className="moviesCard__time">{getTime(card.duration)}</p>
    </li>
  );
}
