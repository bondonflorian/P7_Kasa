import React from 'react';
const banner = require("../assets/img/background-about.png");

const About = () => {
    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="" /> {/* TODO Mettre en place le alt de l'image */}
            </div>
            <div className="about">
                <div className="about__title">
                    <h1>fiabilité</h1>
                </div>
                <div className="about__description">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
            </div>
        </div>
    );
};

export default About;