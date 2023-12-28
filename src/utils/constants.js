const ERROR_500 = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const ERROR_INVALID_LOGIN = 'Вы ввели неправильный логин или пароль.';
const ERROR_INVALID_AUTORISED = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
const ERROR_INVALID_TOKEN = 'При авторизации произошла ошибка. Переданный токен некорректен.';
const ERROR_INVALID_EMAIL = 'Пользователь с таким email уже существует.';
const ERROR_INVALID_REGISTRATION = 'При регистрации пользователя произошла ошибка.';
const ERROR_INVALID_NEW_EMAIL = 'Пользователь с таким email уже существует.';
const ERROR_INVALID_UPDATE = 'При обновлении профиля произошла ошибка.';
const ERROR_404 = '404 Страница по указанному маршруту не найдена.';

const VALID_EMAIL = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

module.exports = {
  ERROR_500,
  ERROR_INVALID_AUTORISED,
  ERROR_INVALID_LOGIN,
  ERROR_INVALID_TOKEN,
  ERROR_INVALID_EMAIL,
  ERROR_INVALID_REGISTRATION,
  ERROR_INVALID_NEW_EMAIL,
  ERROR_INVALID_UPDATE,
  ERROR_404,
  VALID_EMAIL,
};
