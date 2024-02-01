import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({
  setFilteredCards,
  initialCards,
  setCards,
  searchHistoryValue,
  setSearchHistoryValue,
  durationFilter,
  setDurationFilter,
  cards,
  setLoading,
}) {
  function checkedLocation() {
    if (window.location.pathname === '/saved-movies') return true; return false;
  }

  function handleSearch(data) {
    setLoading(true);
    let filteredItems = initialCards;
    if (checkedLocation()) {
      filteredItems = cards;
    }
    filteredItems = filteredItems.filter(
      (film) => film.nameRU.toLowerCase().includes(data.toLowerCase())
      || film.nameEN.toLowerCase().includes(data.toLowerCase()),
    );
    console.log(filteredItems);
    setCards(filteredItems);
    if (!checkedLocation()) {
      localStorage.setItem('moviesHistory', data);
      localStorage.setItem('cards', JSON.stringify(filteredItems));
      localStorage.setItem('shortMovies', JSON.stringify(filteredItems));
    }
    if (checkedLocation() === true) {
      localStorage.setItem('savedMoviesHistory', JSON.stringify(filteredItems));
    }
    setLoading(false);
    return setFilteredCards(filteredItems);
  }

  function checkDuration(durationToggle) {
    let filteredCardList = JSON.parse(localStorage.getItem(checkedLocation() ? 'savedCards' : 'cards'));
    setDurationFilter(durationToggle);
    if (!checkedLocation()) {
      localStorage.setItem('shortMovies', durationToggle);
    }
    if (!durationFilter) {
      filteredCardList = filteredCardList.filter(
        (card) => Number(card.duration) < 40,
      );
    }
    if (!checkedLocation()) {
      localStorage.setItem('shortMovies', JSON.stringify(filteredCardList));
    }
    return setFilteredCards(filteredCardList);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchHistoryValue);
  }

  function handleChange(e) {
    return setSearchHistoryValue(e.target.value);
  }

  React.useEffect(() => {
    if (!checkedLocation()) {
      const searchHistory = localStorage.getItem('searchHistoryValue');
      if (searchHistory) {
        setSearchHistoryValue(searchHistory);
      }
    }
    // if (checkedLocation() === true) {
    //   const searchSavedHistory = localStorage.getItem('searchSavedHistoryValue');
    //   if (searchSavedHistory) {
    //     setSearchHistoryValue(searchSavedHistory);
    //   }
    // }
  }, []);

  return (
    <section className="searchForm">
      <form onSubmit={handleSubmit}>
        <div className="searchForm__container">
          <input
          className="searchForm__input"
          id="filmInput"
          name='searchHistoryValue'
          type="search"
          placeholder='Фильм'
          value={searchHistoryValue}
          onChange={handleChange}
          minLength="1"
          maxLength="40"
          required
          />
        <button type='submit' className='searchForm__button'></button>
        </div>
      </form>
      <FilterCheckbox
        durationFilter={durationFilter}
        setDurationFilter={setDurationFilter}
        onChecked={checkDuration}
        checkedLocation={checkedLocation()}/>
    </section>
  );
}
