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
  // const [isValid, setIsValid] = React.useState(false);

  function checkedLocation() {
    if (window.location.pathname === '/saved-movies') return true; return false;
  }

  function handleSearch(data) {
    setLoading(true);
    console.log(checkedLocation());
    let filteredItems = cards;
    if (initialCards) { filteredItems = initialCards; }
    filteredItems = filteredItems.filter(({ nameRU, nameEN }) => {
      if (nameRU.toLowerCase().includes(data.toLowerCase())) { return true; }
      if (nameEN.toLowerCase().includes(data.toLowerCase())) { return true; }
      return false;
    });
    setCards(filteredItems);
    if (checkedLocation() === false) {
      localStorage.setItem('moviesHistory', data);
      localStorage.setItem('cards', JSON.stringify(filteredItems));
      localStorage.setItem('shortMovies', JSON.stringify(filteredItems));
    } if (checkedLocation() === true) {
      localStorage.setItem('savedCards', JSON.stringify(filteredItems));
      localStorage.setItem('savedMoviesHistory', data);
      localStorage.setItem('savedShortMovies', JSON.stringify(filteredItems));
    }
    setLoading(false);
    return setFilteredCards(filteredItems);
  }

  function checkDuration(durationToggle) {
    let filteredCardList = JSON.parse(localStorage.getItem(checkedLocation() ? 'savedCards' : 'cards'));

    setDurationFilter(durationToggle);
    localStorage.setItem(checkedLocation() ? 'savedDurationToggle' : 'shortMovies', durationToggle);
    if (!durationFilter) {
      filteredCardList = filteredCardList.filter(
        (card) => Number(card.duration) < 40,
      );
    }
    localStorage.setItem(checkedLocation() ? 'savedShortMovies' : 'shortMovies', JSON.stringify(filteredCardList));
    console.log(filteredCardList);
    return setFilteredCards(filteredCardList);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchHistoryValue);
    console.log(searchHistoryValue);
  }

  function handleChange(e) {
    return setSearchHistoryValue(e.target.value);
  }

  React.useEffect(() => {
    if (checkedLocation() === false) {
      const searchHistory = localStorage.getItem('searchHistoryValue');
      if (searchHistory) {
        setSearchHistoryValue(searchHistory);
      }
    } else if (checkedLocation() === true) {
      const searchSavedHistory = localStorage.getItem('searchSavedHistoryValue');
      if (searchSavedHistory) {
        setSearchHistoryValue(searchSavedHistory);
      }
    }
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
          minLength="2"
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
