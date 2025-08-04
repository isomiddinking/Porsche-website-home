import React from 'react';
import './FindYour.css';
import findYour from '../../assets/FindYour.png';

const FindYour = () => {
  return (
    <div>
      <div className="container-find-box" data-aos="fade-up"> {/* Example: Entire box fades up */}
        <div className="left_box">
            <h2 data-aos="fade-right" data-aos-delay="100">Find Your Porsche Center</h2> {/* Text fades from right */}
            <p data-aos="fade-right" data-aos-delay="200">A Porsche Center, and your dream Porsche vehicle, may be closer than you think. Search our Porsche Center network for the location closest to you.</p>
            <button data-aos="zoom-in" data-aos-delay="300">Search now</button> {/* Button zooms in */}
        </div>
        <div className="right_img-box" data-aos="fade-left" data-aos-delay="400"> {/* Image fades from left */}
            <img src={findYour} alt="right-img-box" />
        </div>
      </div>
    </div>
  );
};

export default FindYour;