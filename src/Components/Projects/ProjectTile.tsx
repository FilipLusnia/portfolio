import { useState, useRef } from 'react';

function ProjectsList() {

  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const rect = useRef<any>();

  const handleMove = (e: any) => {
    setXCoord((rect.current.offsetLeft + rect.current.offsetWidth/2 - e.pageX)/7);
    setYCoord((rect.current.offsetTop + rect.current.offsetHeight/2 - e.pageY)/5);
  }

  const handleLeave = () => {
    setXCoord(0);
    setYCoord(0);
  }

  return (
    <div ref={rect} onMouseMove={e => handleMove(e)} onMouseLeave={handleLeave} className="project_tile">
        <div style={{transform: ` rotateX(${yCoord}deg) rotateY(${xCoord}deg)`}} className="project_inner_tile">
            <p>Sample project</p>
        </div>
    </div>
  );
}
  
export default ProjectsList;
  