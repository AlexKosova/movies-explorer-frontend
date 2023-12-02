import React from 'react';
import photo from '../../images/aboutMe__photo.svg';

export default function AboutMe() {
  return (
    <section className="aboutMe">
        <h2 className="main__title main__title_aboutMe">Студент</h2>
        <div className="aboutMe__container">
          <h3 className="aboutMe__title">Виталий</h3>
          <p className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a target="_blank" href="https://github.com/AlexKosova" className="aboutMe__link">Github</a>
        </div>
        <img className="aboutMe__photo" src={photo} alt="моё фото"/>
    </section>
  );
}
