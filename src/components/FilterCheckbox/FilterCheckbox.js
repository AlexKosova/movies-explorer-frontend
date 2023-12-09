import React from 'react';

export default function FilterCheckbox({ onChecked }) {
  const [shortMovies, setShortMovies] = React.useState(false);
  React.useEffect(() => {
    if (window.location.pathname === '/movies') {
      localStorage.getItem('shortMovies');
      setShortMovies(JSON.parse(shortMovies));
    }
  }, []);

  const handleShortMovie = (e) => {
    setShortMovies(e.target.checked);
    onChecked(e.target.checked);
  };

  return (
    <div class="searchForm__filterContainer">
      <input onChange={handleShortMovie} checked={shortMovies ?? false} type="checkbox" id="filmFilter" class="searchForm__filter"/>
      <label for="filmFilter">Короткометражки</label>
    </div>
  );
}
