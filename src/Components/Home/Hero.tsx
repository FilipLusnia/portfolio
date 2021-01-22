import heroleft from '../../Resources/hero-left.jpg';
import heroright from '../../Resources/hero-right.jpg';

function Hero() {
  return (
    <div className="hero_container">
        <div className="hero_info_container">
          <h1 className="hero_title">Filip Luśnia</h1>
          <h1 className="hero_title -lower">{'>'} Frontend Developer</h1>
          <p className="hero_description">
            I design and code websites, web apps and occasionally mobile apps.<br/>
            All powered by music and coffee, of course.
          </p>
        </div>
        <div className="hero_img_container">
            <img src={heroleft} alt="hero-img" className="hero_img -left"/>
            <img src={heroright} alt="hero-img" className="hero_img -right"/>
        </div>
    </div>
  );
}

export default Hero;
