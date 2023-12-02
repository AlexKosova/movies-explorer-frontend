import React from 'react';
import picture from '../../images/main__picture-info.svg';

export default function Promo() {
  return (
    <section className="promo">
        <div className="promo__container">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button type='button' className="promo__button"><a className="promo__button" href='#aboutProject'>Узнать больше</a></button>
        </div>
        <img className="promo__picture" src={picture} alt="красивая картинка"/>
      </section>
  );
}
