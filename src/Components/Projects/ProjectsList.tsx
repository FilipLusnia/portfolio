import { useState, useEffect } from 'react';
import ProjectTile from './ProjectTile';

function ProjectsList() {

  const [ projectThumbs, setProjectThumbs ] = useState<Array<any>>();
  const [ filteredGroup, setFilteredGroup ] = useState('all');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_projects_endpoint}`)
    .then((resp) => resp.json())
    .then(data => setProjectThumbs(data));
  }, [])
  
  return (
    <div className="projects_list_container">  
      <h1 className="projects_list_title">{'>'} MY WORKS</h1>
      <div className="projects_list_filters_container">
        <h1>Filter projects by technology:</h1>
        <div className="projects_list_filters">
          <p onClick={() => setFilteredGroup('all')} className={filteredGroup === "all" ? 'picked_filter' : undefined}>All</p>
          <p onClick={() => setFilteredGroup('react')} className={filteredGroup === "react" ? 'picked_filter' : undefined}>React</p>
          <p onClick={() => setFilteredGroup('react-native')} className={filteredGroup === "react-native" ? 'picked_filter' : undefined}>React Native</p>
        </div>
      </div>
      {projectThumbs
      ?
        <div className="projects_list">
          {projectThumbs
            .filter(e => e.data.type === filteredGroup || filteredGroup === 'all')
            .map(e => {
              return <ProjectTile id={e.id} name={e.data.name} thumbnail={e.data.thumbnail} key={e.data.name}/>
            })
          }
        </div>
      :
        <div className="projects_list_fallback">
          <div className="projects_dot"/>
          <div className="projects_dot"/>
          <div className="projects_dot"/>
        </div>
      }
    </div>
  );
}
  
export default ProjectsList;
  