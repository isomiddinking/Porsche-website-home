import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Models from './Components/Models/Models';
import FindYour from './Components/FindYour/FindYour';
import FindPorsche from './Components/Contact/Contact';
import SwiperComponent from './Components/Swiper/Swiper';
import Discover from './Components/Discover/Discover';
import RegionSelector from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Models/>
      <FindYour/>
      <FindPorsche/>
    <SwiperComponent/>
    <Discover/>
    <RegionSelector/>
    </div>
  );
}

export default App;