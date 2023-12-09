import React from 'react';

export default function aboutProject() {
  return (
    <section id='aboutProject' className="aboutProject">
        <h2 className="main__title main__title_aboutProject">О проекте</h2>
        <div className="aboutProject__block">
          <h3 className="aboutProject__block-title">Дипломный проект включал 5 этапов</h3>
          <h3 className="aboutProject__block-title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__block-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="aboutProject__block-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="aboutProject__timeline">
            <p className="aboutProject__timeline-text aboutProject__timeline-text_black">1 неделя</p>
            <p className="aboutProject__timeline-text aboutProject__timeline-text_white">4 недели</p>
            <p className="aboutProject__timeline-text aboutProject__timeline-text_grey">Back-end</p>
            <p className="aboutProject__timeline-text aboutProject__timeline-text_grey">Front-end</p>
        </div>
      </section>
  );
}
