import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/cards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Movies() {
  return (
    <>
    <Header/>
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
    <Footer/>
    </>
  );
}
