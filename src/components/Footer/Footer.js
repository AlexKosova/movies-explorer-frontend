export default function Footer() {
  return (
  <footer className="footer">
    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__container">
      <p className="footer__copyright">&#169; 2023</p>
      <ul className="footer__links">
        <li className="footer__link">
          <a href="https://practicum.yandex.ru/" className="footer__link-text" target="_blank">Яндекс.Практикум</a>
        </li>
        <li className="footer__link">
          <a href="https://github.com/AlexKosova" target="_blank" className="footer__link-text">Github</a>
          </li>
      </ul>
    </div>
  </footer>
  );
}
