import React from "react";
import { Logo } from "../components/SVG/logo/Logo.tsx";
import "./layout.scss";
import { Navigation } from "../components/Navigation/Navigation.tsx";
import GithubIcon from "../components/SVG/github/githubIcon.tsx";
import Contact from "../components/Contact/contact.tsx";

export const Layout = (props) => {
    return (
        <section className="page">
        <div className="header">
            <Logo />
            <Navigation />
            <div className="footer">
              <GithubIcon />
              <Contact />
          </div>
        </div>
        <div className="layout-container">
            {props.children}
        </div>
        </section>
    )
}