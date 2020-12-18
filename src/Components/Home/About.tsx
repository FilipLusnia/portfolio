import photo from '../../Resources/profile-photo.jpg';
import { ReactComponent as DesignIcon } from '../../Resources/sketch.svg';
import { ReactComponent as RwdIcon } from '../../Resources/responsive_design.svg';
import { ReactComponent as GranularityIcon } from '../../Resources/complex.svg';

function About() {
  return (
    <div className="about_container">
      <img src={photo} alt="profile img" className="about_photo"/>
      <div className="about_info_container">
        <h1 className="about_info_title">{'>'} ABOUT</h1>
        <p className="about_info_description">
          My name's Filip. I'm a dedicated developer, 
          spending hours on tweaking little things and experimenting with code.<br/>
          I treat every project as a challenge and opportunity to learn new stuff.
          The fields I put most pressure on, are:
        </p>

        <div className="about_attributes_container">
          <div className="about_attribute">
            <RwdIcon className="about_attribute_img"/>
            <h1 className="about_attribute_title">RESPONSIVENESS</h1>
            <p className="about_attribute_description">
              For me, creating scalable websites and apps is cruical.
              Experiencing the product across various devices should be alike.
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
              I have a huge attention to detail. 
              I never assume my work is done until everything is tweaked and polished.
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default About;
