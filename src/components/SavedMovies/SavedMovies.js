import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function SavedMovies() {
  const savedCards = cards.filter((card) => card.saved === true);

  return (
    <>
    <Header/>
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={savedCards}/>
    </main>
    <Footer/>
    </>
  );
}
