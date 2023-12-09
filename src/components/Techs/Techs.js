import React from 'react';

export default function Techs() {
  return (
    <section className="techs">
      <h2 className="main__title main__title_techs">Технологии</h2>
      <div className="techs__container">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили   технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__list'>
          <li className="techs__type">HTML</li>
          <li className="techs__type">CSS</li>
          <li className="techs__type">JS</li>
          <li className="techs__type">React</li>
          <li className="techs__type">Git</li>
          <li className="techs__type">Express.js</li>
          <li className="techs__type">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
