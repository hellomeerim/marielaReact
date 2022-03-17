import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';

const App = () => {
  return (
    <div className="main">
      <Header/>
      <MainPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
      <Footer/>
    </div>
  );
};

export default App;