import React from 'react';
import { FaAngleUp } from "react-icons/fa";
const banner = require("../assets/img/background-about.png");

const About = () => {
    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="" /> {/* TODO Mettre en place le alt de l'image */}
            </div>
            <div className="page">
                <div className="about">
                    <div className="about__title">
                        <h1>Fiabilité</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                    {/* TODO Element temporaire */}
                    <div className="about__title">
                        <h1>Respect</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                    <div className="about__title">
                        <h1>Service</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                    <div className="about__title">
                        <h1>Sécurité</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;