import ProjectTile from './ProjectTile';

function ProjectsList() {

  return (
    <div className="projects_list_container">  
      <h1 className="projects_list_title">{'>'} MY WORKS</h1>
      <div className="projects_list">
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
      </div>
    </div>
  );
}
  
export default ProjectsList;
  