import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ cards }) {
  const numToShow = 16;
  const [nowShowing, setNowShowing] = useState(numToShow);
  const [list, setList] = useState(cards.slice(0, numToShow));

  useEffect(() => {
    setList(cards.slice(0, numToShow));
  }, [cards]);

  function showMore() {
    setList(cards.slice(0, nowShowing + numToShow));
    return setNowShowing(nowShowing + numToShow);
  }

  return (
    <>
      <ul className="moviesCardList">
      {list.map((data) => <MoviesCard card={data} />)}
      </ul>
      {cards.length > nowShowing ? <button onClick={showMore} class="moviesCard__moreButton">Ещё</button> : ''}
    </>
  );
}
