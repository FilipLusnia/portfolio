import { useState, useRef } from 'react';

type PropsTypes = {name: string, thumbnail: string, id: string, goToProject: Function};
function ProjectTile({name, thumbnail, id, goToProject}: PropsTypes) {

  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const rect = useRef<any>();

  const handleMove = (e: any) => {
    setXCoord((rect.current.offsetLeft + rect.current.offsetWidth/2 - e.pageX)/10);
    setYCoord((rect.current.offsetTop + rect.current.offsetHeight/2 - e.pageY)/6);
  }

  const handleLeave = () => {
    setXCoord(0);
    setYCoord(0);
  }

  return (
    <div 
      ref={rect} 
      onMouseMove={e => handleMove(e)} 
      onMouseLeave={handleLeave} 
      onClick={() => goToProject(id)} 
      className="project_tile"
    >
        <img loading="lazy" src={thumbnail} alt='thumbnail'/>
        <div style={{transform: `rotateX(${yCoord}deg) rotateY(${xCoord}deg)`}} className="project_inner_tile">
            <p>{name}</p>
        </div>
    </div>
  );
}
  
export default ProjectTile;
  