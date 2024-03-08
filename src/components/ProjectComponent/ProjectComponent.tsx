import React from "react";
import "./projectComponent.scss";

export const ProjectComponent = (props: any) => {
    return (
        <div style={{height: "calc(100vh - 50px)", width: "100vw", position: "relative"}} id="projects" className="section">
        <h2 className="section-title">Project</h2>
        <div className="projectWrapper">
            <div className="project_images">
                <img src={props.images}/>
            </div>
            <div className="project_infos">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                {props.technologies.map((techno: string) => {
                    <button key={props.id}>{techno}</button>
                })}
                <a href={props.link} target="_blank">Visit site</a>
            </div>
        </div>
    </div>
    )
}