import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({ onSubmit }) {
  const [searchHistoryValue, setSearchHistoryValue] = React.useState('');

  React.useEffect(() => {
    if (window.location.pathname === '/movies') {
      const searchHistory = localStorage.getItem('searchHistoryValue');
      if (searchHistory) {
        setSearchHistoryValue(searchHistory);
      } else if (window.location.pathname === '/saved-movies') {
        const searcSavedHistory = localStorage.getItem('searchSavedHistoryValue');
        if (searcSavedHistory) {
          setSearchHistoryValue(searchHistory);
        }
      }
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchHistoryValue);
  }

  function handleChange(e) {
    setSearchHistoryValue(e.target.value);
  }

  return (
    <section class="searchForm">
      <form onSubmit={handleSubmit}>
        <div className="searchForm__container">
          <input class="searchForm__input" id="filmInput" name='searchHistoryValue' type="search" placeholder="Фильм" value={searchHistoryValue} onChange={handleChange} minlength="2" maxLength="40"/>
        <button type='submit' class="searchForm__button"></button>
        </div>
        <FilterCheckbox/>
      </form>
    </section>
  );
}
