import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import cards from '../../utils/cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import api from '../../utils/MoviesApi.js';

export default function Movies() {
  const [cards, setCards] = React.useState([]);
  const [initialCards, setInitialCards] = React.useState([]);

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

  return (
    <>
    <Header/>
    <main className="movies">
      <SearchForm onSubmit={handleSearch} />
      <MoviesCardList cards={cards} />
    </main>
    <Footer/>
    </>
  );
}
