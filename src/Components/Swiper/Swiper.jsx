import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper.css';

import martiniCarCover from '../../assets/Martini.png';
import garminEpixPro from '../../assets/soat.png';
import porscheEbike from '../../assets/velli.png';
import salzburgMat from '../../assets/sochiq.png';
import placeholder5 from '../../assets/pult.png';
import placeholder6 from '../../assets/Carre.png';
import placeholder7 from '../../assets/car.png';
import placeholder8 from '../../assets/capot.png';

const SwiperComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="online-shop-highlights" data-aos="fade-up">
      <h2 data-aos="fade-up" data-aos-delay="100">Online Shop Highlights</h2>
      <div data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="300">
              <img src={martiniCarCover} alt="Indoor Car Cover in Martini Racing Design" className="product-image" />
              <h3 className="product-title">Indoor Car Cover in Martini Racing Design</h3>
              <p className="product-description">Protect your vehicle in style using this custom-fit indoor car cover featuring the classic Martini Racing design.</p>
              <a href="#" className="product-link">
                &rarr; Indoor Car Cover
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="350">
              <img src={garminEpixPro} alt="Smartwatch Porsche x Garmin® Epix Pro" className="product-image" />
              <h3 className="product-title">Smartwatch Porsche x Garmin® Epix Pro</h3>
              <p className="product-description">GPS multisport smartwatch with unique Porsche details and extensive fitness and health features.</p>
              <a href="#" className="product-link">
                &rarr; Garmin Epix Pro
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="400">
              <img src={porscheEbike} alt="Porsche eBike Cross Performance EXC 2nd Gen." className="product-image" />
              <h3 className="product-title">Porsche eBike Cross Performance EXC 2nd Gen.</h3>
              <p className="product-description">High-performance exclusive electric mountain bike from Porsche.</p>
              <a href="#" className="product-link">
                &rarr; eBike
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="450">
              <img src={salzburgMat} alt="Porsche 917 Salzburg Design Mat" className="product-image" />
              <h3 className="product-title">Porsche 917 Salzburg Design Mat</h3>
              <p className="product-description">The perfect velour mat in an iconic Salzburg design for every enthusiast's garage or workshop.</p>
              <a href="#" className="product-link">
                &rarr; Salzburg Garage Mat
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="500">
              <img src={placeholder5} alt="Placeholder Product 5" className="product-image" />
              <h3 className="product-title">Product Title 5</h3>
              <p className="product-description">This is a placeholder description for product 5. You should replace this text with actual product details.</p>
              <a href="#" className="product-link">
                &rarr; More Info 5
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="550">
              <img src={placeholder6} alt="Placeholder Product 6" className="product-image" />
              <h3 className="product-title">Product Title 6</h3>
              <p className="product-description">This is a placeholder description for product 6. Update this with relevant information.</p>
              <a href="#" className="product-link">
                &rarr; More Info 6
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="600">
              <img src={placeholder7} alt="Placeholder Product 7" className="product-image" />
              <h3 className="product-title">Product Title 7</h3>
              <p className="product-description">This is a placeholder description for product 7. Customize it as needed.</p>
              <a href="#" className="product-link">
                &rarr; More Info 7
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product-card" data-aos="zoom-in" data-aos-delay="650">
              <img src={placeholder8} alt="Placeholder Product 8" className="product-image" />
              <h3 className="product-title">Product Title 8</h3>
              <p className="product-description">This is a placeholder description for product 8. Final card content goes here.</p>
              <a href="#" className="product-link">
                &rarr; More Info 8
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;