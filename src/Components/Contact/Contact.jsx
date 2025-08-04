import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FindPorsche.css';
import porscheImage from '../../assets/FindPorsche.png'; // Replace with your actual image path

const FindPorsche = () => {
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for Porsches near:', location);
  };

  return (
    <section className="find-porsche-section" data-aos="fade-up">
      <div className="find-porsche-container">
        <div className="find-porsche-content">
          <div className="find-porsche-left" data-aos="fade-right" data-aos-delay="100">
            <h1 data-aos="fade-up" data-aos-delay="150">
              Find your new or pre-owned <span className="porsche-brand" data-aos="fade-up" data-aos-delay="200">Porsche.</span>
            </h1>
            <p className="subtitle" data-aos="fade-up" data-aos-delay="250">
              Making it easy to find your dream Porsche. Enter your location and browse the best
              offers available near you.
            </p>

            <form onSubmit={handleSearch} className="search-form" data-aos="fade-up" data-aos-delay="300">
              <div className="form-group">
                <label htmlFor="location-input" className="location-label" data-aos="fade-up" data-aos-delay="350">
                  Enter a location for your search
                </label>
                <div 
                  className={`input-wrapper ${isFocused ? 'focused' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <input
                    type="text"
                    id="location-input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter City or ZIP Code"
                    className="location-input"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                  <button 
                    type="submit" 
                    className="search-button"
                    data-aos="zoom-in"
                    data-aos-delay="450"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="find-porsche-right" data-aos="fade-left" data-aos-delay="100">
            <img
              src={porscheImage}
              alt="Luxury Porsche cars"
              className="porsche-image"
              loading="lazy"
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindPorsche;