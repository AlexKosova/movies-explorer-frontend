import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Movies({
  checkStatus,
  handleAddCard,
  cards,
  setCards,
  initialCards,
  handleDeleteMovie,
  setLoading,
}) {
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [searchHistoryValue, setSearchHistoryValue] = React.useState('');
  const [durationFilter, setDurationFilter] = React.useState(false);
  // localStorage.removeItem('savedCards')
  React.useEffect(() => {
    const moviesList = localStorage.getItem('cards');
    const moviesSearchHistory = localStorage.getItem('moviesHistory');
    const durationHistory = localStorage.getItem('durationToggle');
    if (moviesList) { setFilteredCards(JSON.parse(moviesList)); }
    if (moviesSearchHistory) { setSearchHistoryValue(moviesSearchHistory); }
    if (durationHistory) { setDurationFilter(durationHistory); }
    const filteredDurationList = localStorage.getItem('shortMovies');
    if (filteredDurationList) {
      setFilteredCards(JSON.parse(filteredDurationList));
    }
  }, []);

  return (<>
    <Header/>
    <main className="movies">
      <SearchForm
      setLoading={setLoading}
      setFilteredCards={setFilteredCards}
      cards={cards}
      initialCards={initialCards}
      filteredCards={filteredCards}
      setCards={setCards}
      setSearchHistoryValue = {setSearchHistoryValue}
      searchHistoryValue = {searchHistoryValue}
      durationFilter={Boolean(durationFilter)}
      setDurationFilter={setDurationFilter}
    />
      <MoviesCardList
      handleDeleteMovie={handleDeleteMovie}
      checkStatus={checkStatus}
      cards={filteredCards}
      onAddCard={handleAddCard}
      />
    </main>
    <Footer/>
    </>
  );
}
