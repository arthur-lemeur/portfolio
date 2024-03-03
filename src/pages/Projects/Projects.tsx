import * as React from "react";
import {ProjectCard}  from "../../components/ProjectCard/ProjectCard.tsx";
import "./projects.scss";
import  useFetch  from "../../utils/useFetch.tsx";


export const Projects = () => {

    const [projects] = useFetch();

    return (
        <div style={{height: "100%", width: "100vw", position: "relative"}} id="projects" className="section">
                <h2 className="section-title">Projets</h2>
                <div className="projectsWrapper" >
                    {projects?.map((project: object, i: number) => (
                        <ProjectCard {...project} key={i} />
                    ))}
                </div>
        </div>
    )
}