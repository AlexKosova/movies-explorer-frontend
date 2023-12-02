import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext/CurrentUserContext';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

export default function App() {
  return (
    <div>
      <CurrentUserContext.Provider>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="signin" element={<Login/>} />
          <Route path="signup" element={<Register/>} />
          <Route path='movies' element={<Movies />} />
          <Route path='saved-movies' element={<SavedMovies />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={< NotFound/>} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}
