import React from 'react';

export default function SearchForm() {
  return (
    <section class="searchForm">
      <div class="searchForm__container">
        <input class="searchForm__input" id="filmInput" type="search" placeholder="Фильм" minlength="2"/>
        <button class="searchForm__button"></button>
      </div>
      <div class="searchForm__filterContainer">
        <input type="checkbox" id="filmFilter" class="searchForm__filter"/>
        <label for="filmFilter">Короткометражки</label>
      </div>
    </section>
  );
}
