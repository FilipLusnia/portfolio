import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

interface RouteParams {
    id: string;
}

interface projectParams {
    name: string,
    description: string,
    tech: {
        frontend: object[],
        backend: object[]
    },
    url: string,
    photos:{
        showcase:{
            first: string,
            second: string,
            third: string
        }
    }
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
        <div className="project_showcase_container">  
            {selectedProject
            ?   <section className="project_showcase">
                    <div className="project_details">
                        <h1 className="project_details_name">{selectedProject.name}</h1>
                        <p className="project_details_tech_title">Technologies</p>
                        <div className="project_details_tech">
                            {selectedProject.tech?.frontend && 
                                <p className="project_details_tech_frontend">
                                    <span>Frontend: </span>{selectedProject.tech.frontend}
                                </p>
                            }

                            {selectedProject.tech?.backend && 
                                <p className="project_details_tech_backend">
                                    <span>Backend: </span>{selectedProject.tech.backend}
                                </p>
                            }
                        </div>
                        <p className="project_details_description">{selectedProject.description}</p>
                        <a className="project_details_link" href={selectedProject.url} target='blank' rel="noreferrer" aria-label="Go to project's demo">See it live</a>
                    </div>
                    <div className="project_snapshots">
                        <img src={selectedProject.photos.showcase.third} className={selectedProject.photos.showcase.third ? 'snapshot -loaded' : 'snapshot'} alt='showcase_thumb'/>
                        <img src={selectedProject.photos.showcase.second} className={selectedProject.photos.showcase.second ? 'snapshot -loaded' : 'snapshot'} alt='showcase_thumb'/>
                        <img src={selectedProject.photos.showcase.first} className={selectedProject.photos.showcase.first ? 'snapshot -loaded' : 'snapshot'} alt='showcase_thumb'/>
                    </div>
                </section>
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
