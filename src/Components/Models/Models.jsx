import React from 'react';
import './Models.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Rasmlarni import qilish
import porsche911 from '../../assets/models.avif';
import porsche718 from '../../assets/models2.avif';
import porscheCayenne from '../../assets/models3.avif';
import porschePanamera from '../../assets/models4.avif';
import porscheMacan from '../../assets/models5.avif';
import porscheTaycan from '../../assets/models6.avif';

// AOS animatsiyasini ishga tushirish
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false
});

const Models = () => {
  return (
    <section className="models-section">
        <h2 data-aos="fade-down">Models</h2>
      <div className="models-container">
 
        {/* 1. Porsche 911 */}
        <div className="model-card-overlay" data-aos="fade-up">
          <div className="overlay-image" style={{ backgroundImage: `url(${porsche911})` }}></div>
          <div className="overlay-content">
            <h3 className="overlay-model-name">911</h3>
            <span className="overlay-fuel-type">Gasoline</span>
            <p className="overlay-description">The iconic, rear-engine sports car with exceptional performance.</p>
            <p className="overlay-price">From $132,300*</p>
            <div className="overlay-buttons">
              <a href="https://configurator.porsche.com/porsche-build/911" className="overlay-btn primary-btn-overlay">Build your 911</a>
              <a href="https://www.porsche.com/usa/models/911/" className="overlay-btn secondary-btn-overlay">All 911 models</a>
            </div>
          </div>
        </div>

        {/* 2. Porsche 718 */}
        <div className="model-card-overlay" data-aos="fade-up" data-aos-delay="100">
          <div className="overlay-image" style={{ backgroundImage: `url(${porsche718})` }}></div>
          <div className="overlay-content">
            <h3 className="overlay-model-name">718</h3>
            <span className="overlay-fuel-type">Gasoline</span>
            <p className="overlay-description">The mid-engine sports car for two made for pure driving pleasure.</p>
            <p className="overlay-price">From $75,400*</p>
            <div className="overlay-buttons">
              <a href="https://configurator.porsche.com/porsche-build/718" className="overlay-btn primary-btn-overlay">Build your 718</a>
              <a href="https://www.porsche.com/usa/models/718/" className="overlay-btn secondary-btn-overlay">All 718 models</a>
            </div>
          </div>
        </div>

        {/* 3. Porsche Cayenne */}
        <div className="model-card-overlay" data-aos="fade-up" data-aos-delay="200">
          <div className="overlay-image" style={{ backgroundImage: `url(${porscheCayenne})` }}></div>
          <div className="overlay-content">
            <h3 className="overlay-model-name">Cayenne</h3>
            <span className="overlay-fuel-type">Gasoline</span>
            <p className="overlay-description">The SUV that offers impressive performance and versatility.</p>
            <p className="overlay-price">From $84,300*</p>
            <div className="overlay-buttons">
              <a href="https://configurator.porsche.com/porsche-build/cayenne" className="overlay-btn primary-btn-overlay">Build your Cayenne</a>
              <a href="https://www.porsche.com/usa/models/cayenne/" className="overlay-btn secondary-btn-overlay">All Cayenne models</a>
            </div>
          </div>
        </div>

        {/* 4. Porsche Panamera */}
        <div className="model-card-overlay" data-aos="fade-up" data-aos-delay="300">
          <div className="overlay-image" style={{ backgroundImage: `url(${porschePanamera})` }}></div>
          <div className="overlay-content">
            <h3 className="overlay-model-name">Panamera</h3>
            <span className="overlay-fuel-type">Gasoline</span>
            <p className="overlay-description">The luxury sedan combining sports car performance with everyday usability.</p>
            <p className="overlay-price">From $92,400*</p>
            <div className="overlay-buttons">
              <a href="https://configurator.porsche.com/porsche-build/panamera" className="overlay-btn primary-btn-overlay">Build your Panamera</a>
              <a href="https://www.porsche.com/usa/models/panamera/" className="overlay-btn secondary-btn-overlay">All Panamera models</a>
            </div>
          </div>
        </div>

        {/* 5. Porsche Macan */}
        <div className="model-card-overlay" data-aos="fade-up" data-aos-delay="400">
          <div className="overlay-image" style={{ backgroundImage: `url(${porscheMacan})` }}></div>
          <div className="overlay-content">
            <h3 className="overlay-model-name">Macan</h3>
            <span className="overlay-fuel-type">Gasoline</span>
            <p className="overlay-description">The compact SUV that is unmistakably a sports car.</p>
            <p className="overlay-price">From $62,500*</p>
            <div className="overlay-buttons">
              <a href="https://configurator.porsche.com/porsche-build/macan" className="overlay-btn primary-btn-overlay">Build your Macan</a>
              <a href="https://www.porsche.com/usa/models/macan/" className="overlay-btn secondary-btn-overlay">All Macan models</a>
            </div>
          </div>
        </div>

        {/* 6. Porsche Taycan */}
        <div className="model-card-overlay" data-aos="fade-up" data-aos-delay="500">
          <div className="overlay-image" style={{ backgroundImage: `url(${porscheTaycan})` }}></div>
          <div className="overlay-content">
            <h3 className="overlay-model-name">Taycan</h3>
            <span className="overlay-fuel-type">Electric</span>
            <p className="overlay-description">The first all-electric Porsche, delivering pure exhilaration.</p>
            <p className="overlay-price">From $99,400*</p>
            <div className="overlay-buttons">
              <a href="https://configurator.porsche.com/porsche-build/taycan" className="overlay-btn primary-btn-overlay">Build your Taycan</a>
              <a href="https://www.porsche.com/usa/models/taycan/" className="overlay-btn secondary-btn-overlay">All Taycan models</a>
            </div>
          </div>
        </div>

      </div>
      <p className='para' >*Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges; potential tariffs. Dealer sets actual selling price.</p>
    </section>
  );
};

export default Models;