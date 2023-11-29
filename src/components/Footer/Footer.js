export default function Footer() {
  return (
  <footer className="footer">
    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__container">
      <p className="footer__copyright">&#169; 2023</p>
      <div className="footer__links">
        <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a>
        <a href="https://github.com/AlexKosova" target="_blank" className="footer__link">Github</a>
      </div>
    </div>
  </footer>
  );
}
