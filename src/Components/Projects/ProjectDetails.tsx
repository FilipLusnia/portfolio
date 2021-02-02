import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

interface RouteParams {
    id: string;
}

interface projectParams {
    name: string,
    description: string,
    tech: {
        frontend: Object[],
        backend: Object[]
    },
    url: string
}

function ProjectDetails() {
    const { id } = useParams<RouteParams>();
    const [ selectedProject, setSelectedProject ] = useState<projectParams>();
       
    useEffect(() => {
        fetch(`${process.env.REACT_APP_projects_endpoint}/${id}`)
        .then((resp) => resp.json())
        .then(data => setSelectedProject(data));
    }, [id]);
    
    return (
        <div className="project_details_container">  
            {selectedProject
            ?   
                <>
                    <h1 className="project_details_name">{selectedProject.name}</h1>
                    <p className="project_details_tech_title">Technologies</p>
                    <div className="project_details_tech">
                        {selectedProject.tech.frontend && 
                            <p className="project_details_tech_frontend">
                                <span>Frontend: </span>{selectedProject.tech.frontend}
                            </p>
                        }

                        {selectedProject.tech.backend && 
                            <p className="project_details_tech_backend">
                                <span>Backend: </span>{selectedProject.tech.backend}
                            </p>
                        }
                    </div>
                    <p className="project_details_description">{selectedProject.description}</p>
                    <a className="project_details_link" href={selectedProject.url} target='blank' rel="noreferrer" aria-label="Go to project's demo">See it live</a>
                </>
            :
                <div className="project_details_fallback">
                    <p>Just a second. Really!</p>
                    <div className="project_details_dots">
                        <div className="project_details_dot"/>
                        <div className="project_details_dot"/>
                        <div className="project_details_dot"/>
                    </div>
                </div>
            }
        </div>
    );
}

export default ProjectDetails;
