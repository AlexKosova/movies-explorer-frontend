import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  cards,
  onAddCard,
  checkStatus,
  handleDeleteMovie,
}) {
  const [numToShow, setNumToShow] = useState(16);
  const [nowShowing, setNowShowing] = useState(numToShow);
  const [list, setList] = useState(cards.slice(0, numToShow));

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 1280 && width > 767) {
      setNumToShow(8);
      setNowShowing(8);
    }
    if (width < 768) {
      setNumToShow(5);
      setNowShowing(5);
    }
    setList(cards.slice(0, numToShow));
  }, [cards]);

  function showMore() {
    setNumToShow(list.length);
    setList(cards.slice(0, nowShowing + numToShow));
    return setNowShowing(nowShowing + numToShow);
  }

  return (
    <>
      <ul className="moviesCardList">
      {list.map((data) => <MoviesCard
      key={window.location.pathname === '/movies' ? data.id : data.movieId}
      checkStatus={checkStatus}
      card={data}
      onAddCard={onAddCard}
      onDelete={handleDeleteMovie}
      />)}
      </ul>
      {cards.length === 0 ? <label className='label__font'>Ничего не найдено</label> : ''}
      {cards.length > nowShowing ? <button type='button' onClick={showMore} className="movies__moreButton">Ещё</button> : ''}
    </>
  );
}
