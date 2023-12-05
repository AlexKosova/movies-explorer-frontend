import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import api from '../../utils/MoviesApi.js';

export default function Movies() {
  const [cards, setCards] = React.useState([]);
  const [initialCards, setInitialCards] = React.useState([]);
  // const [shortMovies, setShortMovies] = React.useState(
  // JSON.parse(localStorage.getItem('shortMovies')) || false);
  // const [shortSavedMovies, setShortSavedMovies] = React.useState(
  // JSON.parse(localStorage.getItem('shortSavedMovies')) || false);

  function handleSearch(data) {
    const filteredCards = initialCards.filter(({ nameRU }) => {
      if (nameRU.toLowerCase().includes(data.toLowerCase())) return true;
      return false;
    });

    setCards(filteredCards);
    localStorage.setItem('cards', JSON.stringify(filteredCards));
    localStorage.setItem('searchHistoryValue', data);
  }

  React.useEffect(() => {
    api.getMovies()
      .then((res) => { setInitialCards(res); setCards(res); });
  }, []);

  function checkDuration(shortMovies) {
    let currentCards = cards;
    if (currentCards && shortMovies) {
      currentCards = currentCards.filter((card) => {
        if (card.duration < 60) return true;
        return false;
      });
    }
    currentCards = setCards;
    localStorage.setItem('shortMovie', JSON.stringify(shortMovies));
  }

  return (
    <>
    <Header/>
    <main className="movies">
      <SearchForm
      onSubmit={handleSearch}
      onChecked={checkDuration}/>
      <MoviesCardList cards={cards} />
    </main>
    <Footer/>
    </>
  );
}
