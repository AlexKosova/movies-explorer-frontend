import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import movieApi from '../../utils/MoviesApi';
// import api from '../../utils/MainApi';

export default function Movies() {
  const [cards, setCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [initialCards, setInitialCards] = React.useState([]);
  const [shortMovieToggle, setShortMovieToggle] = React.useState(false);

  // currentCards = setShortMovies;
  //   localStorage.setItem('shortMovies', JSON.stringify(shortMovies));

  function handleSearch(data) {
    let filteredItems = initialCards.filter(({ nameRU, nameEN }) => {
      if (nameRU.toLowerCase().includes(data.toLowerCase())) return true;
      if (nameEN.toLowerCase().includes(data.toLowerCase())) return true;
      return false;
    });
    setCards(filteredItems);
    localStorage.setItem('cards', JSON.stringify(filteredItems));

    if (shortMovieToggle) {
      filteredItems = filteredItems.filter((card) => {
        if (Number(card.duration) < 40) return true;
        return false;
      });
    }

    localStorage.setItem('shortMovies', JSON.stringify(filteredItems));
    return setFilteredCards(filteredItems);
  }

  const checkDuration = (shortMovies) => {
    let filteredCardList = cards;
    setShortMovieToggle(shortMovies);
    if (shortMovieToggle) {
      filteredCardList = filteredCardList.filter((card) => Number(card.duration) < 40);
    }
    console.log(filteredCardList);
    localStorage.setItem('shortMovies', JSON.stringify(filteredCardList));

    return setFilteredCards(filteredCardList);
  };

  React.useEffect(() => {
    movieApi.getMovies()
      .then((res) => { setInitialCards(res); setCards(res); });
  }, []);

  return (
    <>
    <Header/>
    <main className="movies">
      <SearchForm
      onSubmit={handleSearch}
      onChecked={checkDuration}/>
      <MoviesCardList cards={filteredCards} />
    </main>
    <Footer/>
    </>
  );
}
