import React from "react";
import { useParams } from "react-router-dom";
import "./projectpage.scss";
import useFetch, { IProjects } from "../../utils/useFetch.tsx";
import GithubIcon from "../../components/SVG/github/githubIcon.tsx";

const ChevronRight = () => {
    return (
        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6L15 12L9 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const ChevronLeft = () => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L9 12L15 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

// const Carousel = (props) => {
//     const {currentProject} = props;
//     const [currentImage, setCurrentImage] = React.useState(0);
//     const length: number = currentProject?.images.length || 0;

//     const handlePrevious = () => {
//         const currentIndex = currentImage - 1;
//         setCurrentImage(currentIndex < 0 ? length - 1 : currentIndex);
//     };

//     const handleNext = () => {
//         const currentIndex = currentImage + 1;
//         setCurrentImage(currentIndex >= length ? 0 : currentIndex);
//     };

//     // const multipleImages = length > 1;
//     const previous_img = currentImage - 1 >= 0 ? currentImage - 1 : length - 1;
//     const next_img = currentImage + 1 <= length - 1 ? currentImage +1 : 0;
//     return (
//         <div className="project_images">
//             <button id="prev" onClick={handlePrevious}>{<ChevronLeft />}</button>
//             <div className="slide_container">
//                 <img src={currentProject?.images[previous_img]} className="previous_img"/>
//                 <img src={currentProject?.images[currentImage]}  className="active" />
//                 <img src={currentProject?.images[next_img]}  className="next_img" />
//             </div>
//             <button id="next" onClick={handleNext}>{<ChevronRight />}</button>
//         </div>
//     )
// }

const Carousel = (props: Partial<IProjects>) => {
    const { images } = props;
    const length = images?.length || 0;
    const [activeImage, setActiveImage] = React.useState(0);

    const handlePrevious = () => {
        setActiveImage((activeImage - 1 + length) % length);
    };

    const handleNext = () => {
        setActiveImage((activeImage + 1) % length);
    };

    return (
        <div className="project_images">
            <button id="prev" onClick={handlePrevious}>{<ChevronLeft />}</button>
            <div className="slide_container">
                {images?.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={
                            activeImage === index
                                ? "active"
                                : index === (activeImage - 1 + length) % length
                                ? "previous_img"
                                : index === (activeImage + 1) % length
                                ? "next_img"
                                : undefined
                        }
                    />
                ))}
            </div>
            <button id="next" onClick={handleNext}>{<ChevronRight />}</button>
        </div>
    );
};

const Gallery = (props: Partial<IProjects>) => {
  const { images } = props;
  const length = images?.length || 0;
  const [activeImage, setActiveImage] = React.useState(0);

  return (
    <div className="slide_container">
      {images ?
      <>
        <div className="active_image">
          <img src={images[activeImage]} />
        </div>
        <div className="slide_gallery">
          {images.map((image, i) => (
            <img src={image}  onClick={() =>setActiveImage(i)} key={i}/>
          ))}
        </div>
      </>
      : <></>}
    </div>
  )
}

export const ProjectPage = () => {
    const { id } = useParams();
    const [projects] = useFetch();
  
    const currentProject = projects?.find((project) => project.id === id);

    // console.log("current project", currentProject?.images.length)
  
  
    const tags = currentProject?.technologies || [];
  
    return (
      <div style={{ width: "100vw", position: "relative" }} id="project" className="section">
        <div style={{width: "100vw", position: "relative" }} id="projects" className="section">
          <h2 className="section-title">{currentProject?.title}</h2>
          <div className="projectWrapper">
            <div className="project_leftSide">
                {currentProject? 
              <Gallery images={currentProject.images} />
              : <></>
                }
            </div>
            <div className="project_infos">
              <p>{currentProject?.description}</p>
              <div className="project_tags">
                {tags.map((techno: string, index: number) => (
                  <span key={currentProject?.id + index.toString()} className="tag">
                    {techno}
                  </span>
                ))}
              </div>
              <div className="project_link_container">
                <a href={currentProject?.link} target="_blank" className="project_link">
                  Visiter le site
                </a>
                {currentProject?.repo ?
                <a href={currentProject?.repo} target="_blank" className="project_link"><GithubIcon /> Vers la page Github</a>
                : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
