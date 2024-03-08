import React from "react";
import "./about.scss";

export const About = () => {
    return (
        <div style={{position: "relative"}} id="about" className="section">
            <h2 className="section-title">A Propos</h2>
            <div className="about_container">
                <div className="about_description">
                    <p>
                        Passionné par la créativité et la technologie, mon parcours atypique reflète ma polyvalence et ma soif constante d'apprentissage. Après avoir exploré les nuances de la composition musicale à l'image à l'école d'audiovisuel EICAR, j'ai entrepris une reconversion dans le domaine du développement web.</p>
                    <p> 
                        Au sein d'<a href="https://openclassrooms.com/fr/paths/900-integrateur-web" target="blank">OpenClassrooms</a>, j'ai suivi la formation d'Intégrateur Web en alternance. Mon expérience professionnelle chez <a href="https://www.edrlab.org/" target="blank">EDRLab</a> (dont la mission est de promouvoir l'innovation, l'accessibilité et le partage mondial des connaissances à travers le développement de logiciels open source de qualité commerciale.), a été une véritable pépinière de connaissances. </p>
                    <p>
                        Durant cette période, j'ai contribué à divers projets, tels que la conception de sites en go-template, la refonte UX-UI d'une application desktop React en TypeScript, ou encore la création d'une application en no-code dédiée à la lecture de livres audio sur Alexa. </p>
                    <p>
                        Ces divers projets m'ont permis de dévolopper des compétences dans la planification de projet, leur gestion ainsi que leur réalisation dans des contextes toujours différents et avec tout type d'interlocuteurs.
                    </p>
                    <p>
                        Mon expertise s'est forgée à travers la maîtrise de technologies essentielles telles qu'<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="blank">HTML</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank">CSS</a>, <a href="https://sass-lang.com/" target="blank">SASS</a>, <a href="https://www.javascript.com/" target="blank">JAVASCRIPT</a> et <a href="https://react.dev/" target="blank">REACT</a>. </p>
                    <p>
                        Mon portfolio incarne non seulement la diversité de mes compétences, mais aussi ma capacité à relever des défis variés et à évoluer constamment dans un environnement dynamique. Explorez mes travaux et découvrez le mariage harmonieux entre ma passion artistique et ma maîtrise technique.
                    </p>
                </div>
                <div className="about_image">
                    <img src="./images/other/profile-picture.jpeg" alt="photo de profil de Arthur Le Meur"/>
                </div>
            </div>
        </div>
    )
}