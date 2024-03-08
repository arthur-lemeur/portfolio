import React from "react";
import "./projectcard.scss";
import { Link } from "react-router-dom";

export const ProjectCard = (props) => {
    
    const delay = parseInt(props.id) + 1 + "00ms";

    return(
        <Link to={`/project/${props.id}`} className="projectCard_Link animate_slideInCard" style={{animationDuration: "1000ms", animationDelay: delay}}>
            <figure className="projectCard-container" >
                <img src={props.cover} alt={props.coverAlt}/>
                <figcaption>
                    <h3>{props.title}</h3>
                    {/* <div className="project_tags">
                            {props.technologies && props.technologies.map((techno: string, index: number) => (
                                <span key={index}  className="tag">{techno}</span>
                            ))}
                        </div> */}
                    {/* <a href={props.link} target="_blank">Visit site</a> */}
                </figcaption>
            </figure>
        </Link>
    )
}