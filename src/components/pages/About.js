import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Collapse from 'react-collapse';
const banner = require("../../assets/img/background-about.png");


const About = () => {

    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(false);
    const [collapse4, setCollapse4] = useState(false);

    return (
        <section>
            <div className='banner-about'>
                <img src={banner} alt="" /> {/* TODO Mettre en place le alt de l'image */}
            </div>
            <div className="page">
                <div className="about">
                    <div className="about__title" onClick={() => setCollapse1(!collapse1)}>
                        <h1>Fiabilité</h1>
                        {(!collapse1 ? <FaAngleUp className='about__arrow' /> : <FaAngleDown className='about__arrow' />)}
                    </div>
                    <div className={(collapse1 ? "about__description__show" : "about__description")}>
                        <Collapse isOpened={collapse1}>
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                        </Collapse>
                    </div>
                    <div className="about__title" onClick={() => setCollapse2(!collapse2)}>
                        <h1>Respect</h1>
                        {(!collapse2 ? <FaAngleUp className='about__arrow' /> : <FaAngleDown className='about__arrow' />)}
                    </div>
                    <div className={(collapse2 ? "about__description__show" : "about__description")}>
                        <Collapse isOpened={collapse2}>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </Collapse>
                    </div>
                    <div className="about__title" onClick={() => setCollapse3(!collapse3)}>
                        <h1>Service</h1>
                        {(!collapse3 ? <FaAngleUp className='about__arrow' /> : <FaAngleDown className='about__arrow' />)}
                    </div>
                    <div className={(collapse3 ? "about__description__show" : "about__description")}>
                        <Collapse isOpened={collapse3}>
                            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                        </Collapse>
                    </div>
                    <div className="about__title" onClick={() => setCollapse4(!collapse4)}>
                        <h1>Sécurité</h1>
                        {(!collapse4 ? <FaAngleUp className='about__arrow' /> : <FaAngleDown className='about__arrow' />)}
                    </div>
                    <div className={(collapse4 ? "about__description__show" : "about__description")}>
                        <Collapse isOpened={collapse4}>
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                        </Collapse>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;