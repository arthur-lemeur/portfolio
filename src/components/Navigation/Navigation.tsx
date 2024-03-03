import React from "react";
import "./navigation.scss";
import { HashLink as Link } from 'react-router-hash-link';
import DownloadIcon from "../SVG/downloadIcon/downloadIcon.tsx";
import { NavLink, useLocation } from "react-router-dom";

export const Navigation = () => {
   let location = useLocation();

    return (
      <ul className="main-navigation_container">
        <li className="main-navigation_item" id="#nav-home">
          <Link to="/#home" className={location.hash == "#home" ? "active" : ""}>
            Accueil
          </Link>
        </li>
        <li className="main-navigation_item" id="#nav-about">
          <Link to="/#about" className={location.hash == "#about" ? "active" : ""}>
              A Propos
          </Link>
        </li>
        <li className="main-navigation_item" id="#nav-projects">
          <Link to="/#projects" className={location.hash == "#projects" ? "active" : ""}>
            Projets
          </Link>
        </li>
        <li className="cv">
          <a href="./utils/CV_2024.pdf" download>
            <DownloadIcon /> CV
          </a>
        </li>
      </ul>
    );
  };