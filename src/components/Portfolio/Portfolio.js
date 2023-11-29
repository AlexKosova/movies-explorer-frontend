import React from 'react';
import picture from '../../images/portfolio__link-picture.svg';

export default function Portfolio() {
  return (
    <section className="portfolio">
        <h5 className="portfolio__title">Портфолио</h5>
        <a target="_blank" href="https://alexkosova.github.io/first-project/" className="portfolio__link">
          <p className="portfolio__link-text">Статичный сайт</p>
          <img src={picture} className="portfolio__link-picture" alt="ссылка"/>
        </a>
        <a target="_blank" href="https://alexkosova.github.io/Russian_travel/" className="portfolio__link">
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <img src={picture} className="portfolio__link-picture" alt="ссылка"/>
        </a>
        <a target="_blank" href="https://alexkosova.github.io/mesto/" className="portfolio__link portfolio__link_theLast">
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <img src={picture} className="portfolio__link-picture" alt="ссылка"/>
        </a>
      </section>
  );
}
