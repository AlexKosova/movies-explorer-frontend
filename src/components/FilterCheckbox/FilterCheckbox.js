import React from 'react';

export default function FilterCheckbox({
  onChecked,
  durationFilter,
  setDurationFilter,
  checkedLocation,
}) {
  function checkClassButton() {
    const checkValue = localStorage.getItem(checkedLocation ? 'savedDurationToggle' : 'durationToggle');
    if (checkValue === 'true') { return 'searchForm__filterTrue'; }
    return 'searchForm__filter';
  }

  const handleShortMovie = (e) => {
    setDurationFilter(!durationFilter);
    checkClassButton();
    onChecked(e.target.checked);
    if (checkedLocation) {
      localStorage.setItem('durationToggle', JSON.stringify(!durationFilter));
    }
    localStorage.setItem(checkedLocation ? 'savedDurationToggle' : 'durationToggle', JSON.stringify(!durationFilter));
  };

  React.useEffect(() => {
    localStorage.removeItem('savedDurationToggle');
  }, []);

  return (
    <div className="searchForm__filterContainer">
      <input
      onChange={(e) => handleShortMovie(e)}
      checked={Boolean(durationFilter)}
      type="checkbox"
      id="filmFilter"
      className={checkClassButton()}/>
      <label>Короткометражки</label>
    </div>
  );
}
