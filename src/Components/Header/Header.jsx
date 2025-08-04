import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { IoMdMenu } from 'react-icons/io';
import { FaRegUser, FaAngleRight } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

import logo from '../../assets/porscheLogo.png';
import porscheVideo from '../../assets/porsche_video.mp4';
import porsche718 from '../../assets/porsche718.png';
import porsche911 from '../../assets/porsche911.png';
import porscheTaycan from '../../assets/porscheTaycan.png';
import defaultCarPlaceholder from '../../assets/porscheTaycan.png';

const modelsData = [
  { id: '718', name: '718', image: porsche718, type: 'Gasoline' },
  { id: '911', name: '911', image: porsche911, type: 'Gasoline' },
  { id: 'Taycan', name: 'Taycan', image: porscheTaycan, type: 'Electric' },
  { id: 'Panamera', name: 'Panamera', image: defaultCarPlaceholder, type: 'Gasoline' },
  { id: 'Cayenne', name: 'Cayenne', image: defaultCarPlaceholder, type: 'Gasoline' },
  { id: 'Macan', name: 'Macan', image: defaultCarPlaceholder, type: 'Gasoline' },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Models');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (itemName) => {
    setActiveMenuItem(itemName);
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className='main-wrapper'>
      <div className={`main-content ${isSidebarOpen ? 'main-content-blurred' : ''}`}>
        <div className="video-background">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="video-element"
          >
            <source src={porscheVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h1 
              className="video-title"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Raced to <br /> Fame in <br /> London.
            </h1>
            <a
              href="https://racing.porsche.com/en-US/articles/homulus-braken-nec-report-2025"
              className="explore-button"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Explore the Porsche victory
            </a>
            <div 
              className="video-controls" 
              onClick={toggleVideoPlayback}
            >
              <span className="control-icon">
                {isVideoPlaying ? '❚❚' : '►'}
              </span>
            </div>
          </div>
        </div>

        <div className="container-header">
          <header>
            <div 
              className="menu-iconbox" 
              onClick={toggleSidebar}
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <h2><IoMdMenu /> </h2>
            </div>

            <div 
              className="logo_senter"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <img src={logo} alt="Porsche Logo" />
            </div>

            <div 
              className="user-icon"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <span><FaRegUser /></span>
            </div>
          </header>
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <div className="close-icon" onClick={toggleSidebar}>
            <IoClose />
          </div>
        </div>

        <div className="sidebar-main">
          <div className="sidebar_left">
            <ul>
              {['Models', 'Shopping Tools', 'Porsche Shop', 'Services', 'Experience', 'Find Your Porsche Center'].map((item, index) => (
                <li
                  key={item}
                  className={activeMenuItem === item ? 'active' : ''}
                  onClick={() => handleMenuItemClick(item)}
                  data-aos="fade-right"
                  data-aos-delay={100 + (index * 100)}
                >
                  {item} <span><FaAngleRight /></span>
                </li>
              ))}
            </ul>
            <div 
              className="account-link"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <span><FaRegUser /></span> Account <span><FaAngleRight /></span>
            </div>
          </div>

          {activeMenuItem === 'Models' && (
            <div className="sidebar_right_models">
              {modelsData.map((model, index) => (
                <div 
                  key={model.id} 
                  className="model-item"
                >
                  <h3>{model.name}</h3>
                  <img src={model.image} alt={model.name} />
                  <p className="model-type">{model.type}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;