import React, { useEffect } from 'react';
import Collapse from "../layout/Collapse";
const banner = require("../../assets/img/background-about.png");

const About = () => {

    useEffect(() => {
        document.title = 'Kasa | A propos';
    }, []);

    return (
        <section>
            <div className='banner-about'>
                <img src={banner} alt="Bannière de la page a propos" />
            </div>
            <div className="page">
                <div className="about">
                    <div className="about__block">
                        <Collapse
                            className="about__block__title"
                            title="Fiabilité"
                            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                            et toutes les informations sont régulièrement vérifiées par nos équipes"
                        />
                    </div>

                    <div className="about__block">
                        <Collapse
                            className="about__block__title"
                            title="Respect"
                            content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                        />
                    </div>

                    <div className="about__block">
                        <Collapse
                            className="about__block__title"
                            title="Service"
                            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                                N'hésitez pas à nous contacter si vous avez la moindre question."
                        />
                    </div>

                    <div className="about__block">
                        <Collapse
                            className="about__block__title"
                            title="Sécurité"
                            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
                                aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet 
                                à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
                                domestique pour nos hôtes."
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;