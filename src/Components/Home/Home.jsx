import React, { useEffect } from 'react';
import './Home.css';
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <div>
      <div className="home_container">
        <div className="card" data-aos="fade-up">
          <div className="card_bg bg1"></div>
          <h2>The 911 Targa 4 GTS</h2>
          <h2><FaArrowRightLong /></h2>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="250">
          <div className="card_bg bg2"></div>
          <h2>Porsche. There is no substitute.</h2>
          <h2><FaArrowRightLong /></h2>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <div className="card_bg bg3"></div>
          <h2>The Macan 4.</h2>
          <h2><FaArrowRightLong /></h2>
        </div>
      </div>
    </div>
  );
}

export default Home;