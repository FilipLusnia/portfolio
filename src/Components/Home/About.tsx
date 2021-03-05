import { useCallback, useState } from 'react';

import photo from '../../Resources/profile-photo.jpg';
import { ReactComponent as DesignIcon } from '../../Resources/sketch.svg';
import { ReactComponent as RwdIcon } from '../../Resources/responsive_design.svg';
import { ReactComponent as GranularityIcon } from '../../Resources/complex.svg';

function About() {

  const [elementsEmerged, setElementsEmerged] = useState(false);
  const [profileImgSrc, setProfileImgScr] = useState('');

  const determineThreshold = () => {
    if(window.innerWidth < 750){
      return 0.1;  
    }
    return 0.25;
  }

  const anchor = useCallback(div => {
    
    const imageObserver = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setProfileImgScr(photo);
        imageObserver.disconnect();
      };
    }, {threshold: 0.05});
    div && imageObserver.observe(div);
    
    const newObserver = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setElementsEmerged(true);
        newObserver.disconnect();
      };
    }, {threshold: determineThreshold()});
    div && newObserver.observe(div);
  }, []);

  return (
    <div className={elementsEmerged ? "about_container -emerged" : "about_container"} ref={anchor}>
      <img src={profileImgSrc} className={elementsEmerged ? "about_photo -emerged" : "about_photo"} alt="profile img"/>
      
      <div className={elementsEmerged ? "about_info_container -emerged" : "about_info_container"}>
        <h1 className="about_info_title">{'>'} ABOUT</h1>
        <p className="about_info_description">
          My name's Filip. I live in Warsaw, Poland.<br/>I'm dedicated developer, 
          spending hours on tweaking little things and experimenting with code.
          I strive to provide the best possible solutions in terms of web development and craft eye-catching products.<br/><br/>
          I treat every project as a challenge and opportunity to learn something new.
          The fields I put most pressure, are:
        </p>

        <div className="about_attributes_container">
          <div className="about_attribute">
            <RwdIcon className="about_attribute_img"/>
            <h1 className="about_attribute_title">RESPONSIVENESS</h1>
            <p className="about_attribute_description">
              For me, creating scalable websites and apps is crucial.
              Experiencing the product across various devices should feel alike.
            </p>
          </div>
          <div className="about_attribute -featured">
            <DesignIcon className="about_attribute_img"/>
            <h1 className="about_attribute_title">DESIGN</h1>
            <p className="about_attribute_description">
              Designing shouldn't be imitative.
              I follow my own design language and create
              fresh-looking products, whatever they are.
            </p>
          </div>
          <div className="about_attribute">
            <GranularityIcon className="about_attribute_img"/>
            <h1 className="about_attribute_title">GRANULARITY</h1>
            <p className="about_attribute_description">
              I have an unusual attention to detail. 
              I never assume my work is done until everything is tweaked and polished.
            </p>
          </div>
        </div>
      </div> 
    </div>  
  );
}

export default About;
