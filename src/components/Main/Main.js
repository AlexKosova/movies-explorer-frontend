import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Main() {
  // const width = useState(window.innerWidth);
  // const main = document.getElementsByClassName('main');
  // main.style.cssText = `width: ${width}`;
  return (
    <>
    <Header/>
    <main className="main" id='main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
    <Footer/>
    </>
  );
}
