import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as GithubIcon } from '../../Resources/github.svg';

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
    github: string,
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
    console.log(selectedProject);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_projects_endpoint}/${id}`)
        .then((resp) => resp.json())
        .then(data => setSelectedProject(data))
    }, [id]);

    return (
        <div className="project_showcase_container_wrapper">
            <div className="project_showcase_container">  
                {selectedProject
                ?   
                    <section className="project_showcase">
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
                            {selectedProject.url 
                            ?
                                <a className="project_details_demo" href={selectedProject.url} target='blank' rel="noreferrer" aria-label="Go to project's demo">See it live</a>
                            :
                                <p className="project_details_demo -unavialable">Demo unavailable - advanced environment is required. <br/> Check the source code for details.</p>
                            }
                            {selectedProject.github &&
                                <div className="project_details_source_container">
                                    <GithubIcon className="project_details_source_icon"/>
                                    <a className="project_details_source" href={selectedProject.github} target='blank' rel="noreferrer" aria-label="Go to project's source code">Source code & Readme</a>
                                </div>
                            }   
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
        </div>
    );
}

export default ProjectDetails;
