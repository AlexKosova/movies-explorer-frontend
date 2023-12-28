import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function SavedMovies({
  checkStatus,
  handleDeleteMovie,
  // savedInitialCards,
  cards,
  setCards,
  setLoading,
}) {
  const [filteredSavedCards, setFilteredSavedCards] = React.useState(cards || []);
  const [savedDurationFilter, setSavedDurationFilter] = React.useState(false);
  const [searchSavedHistoryValue, setSavedSearchHistoryValue] = React.useState('');

  // React.useEffect(() => {
  //   setFilteredSavedCards(localStorage.getItem('savedCards'));
  // });

  // const moviesSearchHistory = localStorage.getItem('savedMoviesHistory');
  // const durationHistory = JSON.parse(localStorage.getItem('savedDurationToggle'));

  React.useEffect(() => {
    const moviesList = localStorage.getItem('savedMoviesHistory');
    if (moviesList) { setFilteredSavedCards(JSON.parse(moviesList)); }
    // if (moviesSearchHistory) { setSavedSearchHistoryValue(moviesSearchHistory); }
    // if (durationHistory) {
    //   setSavedDurationFilter(durationHistory);
    // const filteredDurationList = localStorage.getItem('savedShortMovies');
    localStorage.setItem('savedShortMovies', false);
    localStorage.setItem('savedDurationToggle', false);
    localStorage.setItem('savedMoviesHistory', '');
    // if (filteredDurationList) { setFilteredSavedCards(JSON.parse(filteredDurationList)); }
    // }
  }, [cards]);

  return (
    <>
    <Header/>
    <main className="movies">
      <SearchForm
      setLoading={setLoading}
      setFilteredCards={setFilteredSavedCards}
      setSearchHistoryValue = {setSavedSearchHistoryValue}
      searchHistoryValue = {searchSavedHistoryValue}
      durationFilter={savedDurationFilter}
      setDurationFilter={setSavedDurationFilter}
      setCards={setCards}
      initialCards={cards}
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
