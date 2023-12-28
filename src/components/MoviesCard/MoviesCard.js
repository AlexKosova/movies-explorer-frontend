import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MoviesCard({
  card,
  onAddCard,
  onDelete,
  checkStatus,
}) {
  function getTime(data) {
    const time = Number(data);
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours ? `${hours}ч` : ''} ${minutes}м`.trim();
  }

  function location() {
    if (window.location.pathname === '/movies') {
      return 'moviesCard__button moviesCard__button_active';
    }
    return 'moviesCard__button moviesCard__button_savedActive';
  }

  // function handleCheck() {
  //   return checkStatus(card);
  // }

  // const buttonToggle = checkStatus(card);

  function handleAddCard() {
    onAddCard(card);
  }

  function handleDelete() {
    onDelete(card);
  }

  return (
    <li className="moviesCard">
      <NavLink to={card.trailerLink}>
        <img
        src={ window.location.pathname === '/movies' ? `https://api.nomoreparties.co/${card.image.url}` : `${card.image}` } className="moviesCard__image"
        alt={card.nameRu}/>
        </NavLink>
    <h2 className="moviesCard__title">{card.nameRU}</h2>
    <button
    type="button"
    onClick={checkStatus(card) ? handleDelete : handleAddCard}
    className={checkStatus(card) ? location() : 'moviesCard__button'} ></button>
    <p className="moviesCard__time">{getTime(card.duration)}</p>
    </li>
  );
}
