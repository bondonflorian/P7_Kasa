import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
const banner = require("../../assets/img/background-about.png");


const About = () => {

    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)

    /*     const collapse = (e) => {
            e.preventDefault();
            setVisible1(!visible1)
            e.preventDefault();
            setVisible2(!visible2)
            e.preventDefault();
            setVisible3(!visible3)
            e.preventDefault();
            setVisible4(!visible4)
        } */

    return (
        <section>
            <div className='banner-about'>
                <img src={banner} alt="" /> {/* TODO Mettre en place le alt de l'image */}
            </div>
            <div className="page">
                <div className="about">
                    <div className="about__title" onClick={setVisible1}>
                        <h1>Fiabilité</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <Collapse isOpened={visible1}>
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                        </Collapse>
                    </div>
                    <div className="about__title" onClick={setVisible2}>
                        <h1>Respect</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <Collapse isOpened={visible2}>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </Collapse>
                    </div>
                    <div className="about__title" onClick={setVisible3}>
                        <h1>Service</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <Collapse isOpened={visible3}>
                            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                        </Collapse>
                    </div>
                    <div className="about__title" onClick={setVisible4}>
                        <h1>Sécurité</h1>
                        <FaAngleUp className='about__arrow' />
                    </div>
                    <div className="about__description">
                        <Collapse isOpened={visible4}>
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                        </Collapse>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;