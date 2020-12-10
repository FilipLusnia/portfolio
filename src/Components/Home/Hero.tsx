import React from 'react';
import heroleft from '../../Graphics/hero-left.png';
import heroright from '../../Graphics/hero-right.png';

function Hero() {
  return (
    <div className="hero_container">
        <div className="hero_title_container">
          <h1 className="hero_title">Filip Luśnia</h1>
          <h1 className="hero_title -lower">{'>'} Frontend Developer</h1>
        </div>
        <div className="hero_img_container">
            <img src={heroleft} alt="hero-img" className="hero_img -left"></img>
            <img src={heroright} alt="hero-img" className="hero_img -right"></img>
        </div>
    </div>
  );
}

export default Hero;
