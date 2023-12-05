import React, { useEffect } from 'react';

export default function FilterCheckbox({
  onChecked,
}) {
  const [shortMovies, setShortMovies] = React.useState(false);
  useEffect(() => {
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
      <input onChange={() => handleShortMovie} onChecked={shortMovies} type="checkbox" id="filmFilter" class="searchForm__filter"/>
      <label for="filmFilter">Короткометражки</label>
    </div>
  );
}
