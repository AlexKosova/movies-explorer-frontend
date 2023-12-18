import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import authApi from '../../utils/AuthApi';
import api from '../../utils/MainApi';
import movieApi from '../../utils/MoviesApi';
import {
  ERROR_500,
  ERROR_INVALID_AUTORISED,
  ERROR_INVALID_LOGIN,
  ERROR_INVALID_TOKEN,
  ERROR_INVALID_REGISTRATION,
  ERROR_INVALID_UPDATE,
} from '../../utils/constants';

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [savedCards, setSavedCards] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [initialCards, setInitialCards] = React.useState([]);
  const [savedInitialCards, setSavedInitialCards] = React.useState(savedCards);

  // *авторизация*
  function handleLogin(data) {
    setLoading(true);
    authApi.login(data).then((res) => {
      localStorage.setItem('jwt', res.token);
      setCurrentUser(res);
      setLoggedIn(true);
      api.getUserInfo()
        .then((userData) => {
          // console.log(userData);
          setCurrentUser(userData);
        }).catch((err) => console.log(err, ERROR_INVALID_LOGIN));
      setLoading(false);
      navigate('/movies');
    })
      .catch((err) => {
        // setInfoTooltipOpen(true)
        setLoading(false);
        console.log(err, ERROR_INVALID_AUTORISED);
      });
  }
  // *регистрация*
  function handleRegister(data) {
    setLoading(true);
    authApi.register(data).then(() => {
      const authData = {
        email: data.email,
        password: data.password,
      };
      handleLogin(authData);
      setLoading(false);
    })
      .catch((err) => {
        setLoading(false);
        console.log(err, ERROR_INVALID_REGISTRATION);
      });
  }

  // *обновление профиля*
  function handleUpdateUser(data) {
    setLoading(true);
    // console.log(data);
    api.patchUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, ERROR_INVALID_UPDATE);
        setLoading(false);
      });
  }

  // *получение токена*
  React.useEffect(() => {
    const checkToken = localStorage.getItem('jwt');
    if (checkToken) setLoggedIn(true);
    if (!checkToken) console.log(ERROR_INVALID_TOKEN);
  }, []);

  // *выход*
  function handlelogout() {
    setLoading(true);
    authApi.logout()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
        setCards([]);
        setSavedCards([]);
        setLoading(false);
        setInitialCards([]);
        setSavedInitialCards([]);
        navigate('/');
        console.log(localStorage.clear());
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  // *Проверка на сохранение*
  function checkStatus(card) {
    let savedStatus = localStorage.getItem('savedCards');
    if (savedStatus) {
      savedStatus = JSON.parse(savedStatus);
      if (savedStatus.some((item) => item.movieId === card.id) || window.location.pathname === '/saved-movies') {
        return true;
      }
    }
    return false;
  }

  // *добавление в избранное*
  function handleAddCard(data) {
    setLoading(true);
    let savedCardList = JSON.parse(localStorage.getItem('savedCards'));
    if (!savedCardList) savedCardList = [];
    const movie = {
      country: data.country,
      director: data.director,
      duration: Number(data.duration),
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co${data.image.url}`,
      movieId: Number(data.id),
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      isSaved: true,
    };
    api.postLikedMovie(movie)
      .then((res) => {
        localStorage.setItem('savedCards', JSON.stringify([res, ...savedCardList]));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  // *удаление фильма*
  function handleDeleteMovie(item) {
    setLoading(true);
    setSavedCards(localStorage.getItem('savedCards'));
    /* eslint no-underscore-dangle: 0 */
    api.deleteMovie(item._id).then((res) => {
      const card = savedCards.filter((c) => c.movieId !== res.movieId);
      localStorage.setItem('savedCards', JSON.stringify(card));
      setSavedCards(card);
      console.log(card);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }
  // localStorage.removeItem('savedCards')

  // *проверка авторизации*
  React.useEffect(() => {
    if (isLoggedIn) {
      api.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err, ERROR_INVALID_AUTORISED);
        });
    }
  }, [isLoggedIn]);

  // *получение фильмов*
  React.useEffect(() => {
    setInitialCards(cards);
    setSavedInitialCards(cards);
    setSavedCards(JSON.parse(localStorage.getItem('savedCards')));
  }, [localStorage.getItem('savedCards')]);

  // *получение сохранёнок*
  React.useEffect(() => {
    setLoading(true);
    if (window.location.pathname === '/movies') {
      movieApi.getMovies()
        .then((res) => {
          setInitialCards(res);
          setCards(res);
        }).catch(() => console.log(ERROR_500));
    }
    if (window.location.pathname === '/saved-movies') {
      movieApi.getMovies()
        .then((res) => {
          setSavedInitialCards(res);
          setSavedCards(JSON.parse(localStorage.getItem('savedCards')));
        }).catch(() => console.log(ERROR_500));
    }
    setLoading(false);
  }, []);

  // *закрытие попапа на esc*
  // React.useEffect(() => {
  //   function handleCloseByEscape (evt) {
  //     if (evt.key === 'Escape') {
  //     closeAllPopups();
  //     }
  //   }
  //   document.addEventListener('keydown', handleCloseByEscape);
  //   return () => {
  //   document.removeEventListener('keydown', handleCloseByEscape);
  //   };
  // });

  return (
    <div>
      <CurrentUserContext.Provider value = {currentUser}>
        {isLoading ? <Preloader/> : ''}
        <Routes>
          <Route
          path="/"
          element={<Main isLoggedIn={isLoggedIn} />}
          />
          <Route
          path="signin"
          element={<Login onSubmit={handleLogin}/>}
          />
          <Route
          path="signup"
          element={<Register onSubmit={handleRegister}/>}
          />
          <Route
          path={isLoggedIn ? 'movies/' : '/'}
          element={<Movies
            setLoading={setLoading}
            handleDeleteMovie={handleDeleteMovie}
            cards={initialCards}
            setCards={setCards}
            initialCards={initialCards}
            handleAddCard={handleAddCard}
            checkStatus={checkStatus} />}
          />
          <Route
          path={isLoggedIn ? 'saved-movies/' : '/'}
          element={<SavedMovies
            cards={savedCards}
            setLoading={setLoading}
            setCards={setSavedCards}
            savedInitialCards={savedInitialCards}
            handleDeleteMovie={handleDeleteMovie}
            checkStatus={checkStatus} />}
          />
          <Route
          path={isLoggedIn ? 'profile' : '/'}
          element={<Profile onLogout={handlelogout}
          onUpdateUser={handleUpdateUser}/>}
          />
          <Route
          path='*'
          element={< NotFound/>}
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}
