import { useCallback, useState } from 'react';
import { ReactComponent as SlideArrow } from '../../Resources/right-arrow.svg';
import { ReactComponent as ProjectArrow } from '../../Resources/project-arrow.svg';

function Showcase() {

  const [elementsEmerged, setElementsEmerged] = useState(false);

  const anchor = useCallback(element => {
    const newObserver = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setElementsEmerged(true);
        newObserver.disconnect();
      }
    }, {threshold: 0.4});
    
    element && newObserver.observe(element);
  }, []);

  return (
      <div ref={anchor} className="showcase_container">
        <h1 className={elementsEmerged ? "showcase_title -emerged" : "showcase_title"}>{">"} FEATURED PROJECTS:</h1>
        <div className={elementsEmerged ? "showcase_projects -emerged" : "showcase_projects"}>
          <div className="showcase_project_tile">
            <SlideArrow className="tile_background_arrow -first"/>
            <h1 className="tile_title">PROJECT DRIVER</h1>
            <p className="tile_description">
              A social site for drivers, providing various
              quizes and articles, forum and
              a point based rewarding system. <br/><br/><br/>
              <span>GO TO PROJECT'S FULL SHOWCASE <ProjectArrow className="project_arrow"/></span>
              
            </p>
          </div>
          <div className="showcase_project_tile">
            <SlideArrow className="tile_background_arrow -second"/>
            <h1 className="tile_title">WAVEMARKET</h1>
            <p className="tile_description">
              Small but fun app, providing fancy information about
              searched Spotify tracks, based on Spotify's API. <br/><br/><br/>
              <span>GO TO PROJECT'S FULL SHOWCASE <ProjectArrow className="project_arrow"/></span>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Showcase;
