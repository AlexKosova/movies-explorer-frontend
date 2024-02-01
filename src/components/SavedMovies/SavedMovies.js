import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function SavedMovies({
  checkStatus,
  handleDeleteMovie,
  savedInitialCards,
  cards,
  setCards,
  setLoading,
}) {
  const [filteredSavedCards, setFilteredSavedCards] = React.useState(cards || []);
  const [savedDurationFilter, setSavedDurationFilter] = React.useState(localStorage.getItem('savedDurationToggle') || false);
  const [searchSavedHistoryValue, setSavedSearchHistoryValue] = React.useState('');

  // const moviesSearchHistory = localStorage.getItem('savedMoviesHistory');
  const durationHistory = JSON.parse(localStorage.getItem('savedDurationToggle'));

  React.useEffect(() => {
    const moviesList = localStorage.getItem('savedCards');
    if (moviesList) { setFilteredSavedCards(JSON.parse(moviesList)); }
    if (durationHistory) {
      setSavedDurationFilter(durationHistory);
      const filteredDurationList = localStorage.getItem('savedShortMovies');
      if (filteredDurationList) { setFilteredSavedCards(JSON.parse(filteredDurationList)); }
    }
  }, []);

  return (
    <>
    <Header/>
    <main className="movies">
      <SearchForm
      setLoading={setLoading}
      cards={cards}
      setFilteredCards={setFilteredSavedCards}
      setSearchHistoryValue = {setSavedSearchHistoryValue}
      searchHistoryValue = {searchSavedHistoryValue}
      durationFilter={savedDurationFilter}
      setDurationFilter={setSavedDurationFilter}
      setCards={setCards}
      initialCards={savedInitialCards}
      searchSavedHistoryValue={searchSavedHistoryValue}
      />
      <MoviesCardList
      cards={filteredSavedCards}
      checkStatus={checkStatus}
      handleDeleteMovie={handleDeleteMovie}
      />
    </main>
    <Footer/>
    </>
  );
}
