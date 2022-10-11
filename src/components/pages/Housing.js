import React from 'react';
import { FaAngleUp, FaStar } from "react-icons/fa";
const banner = require("../../assets/img/Cozy-loft.png");

const Housing = () => {
    return (
        <div className='housing'>
            <div className="housing__banner">
                <img src={banner} alt="" /> {/* TODO Préciser le alt de l'image par la suite */}
            </div>
            <div className="housing__title">
                <h1>Cozy loft on the Canal Saint-Martin</h1>
            </div>
            <h3>Paris, Île-de-France</h3>

            <div className="housing__filterblock">
                <div className="housing__filterblock__filter">
                    <p>Cozy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
                <div className="housing__user">
                    <div className='housing__title__autor'>
                        <p>Alexandre Dumas</p>
                        <span className='housing__title__picture'></span>
                    </div>
                    <div className="housing__filterblock__notice">
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star' />
                        <FaStar className='star__grey' />
                        <FaStar className='star__grey' />
                    </div>
                </div>
            </div>
            <div className="housing__filterblock__details">
                <div className="housing__filterblock__details__description">
                    <div className="housing__filterblock__details__description__title">
                        <h2>Description</h2>
                        <FaAngleUp className='housing__arrow' />
                    </div>
                    <div className="housing__filterblock__details__description__text">
                        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                    </div>
                </div>
                <div className="housing__filterblock__details__description">
                    <div className="housing__filterblock__details__description__title">
                        <h2>Equipements</h2>
                        <FaAngleUp className='housing__arrow' />
                    </div>
                    <div className="housing__filterblock__details__description__text">
                        <p>Climatisation</p>
                        <p>Wi-Fi</p>
                        <p>Cuisine</p>
                        <p>Espace de travail</p>
                        <p>Fer à repasser</p>
                        <p>Sèche-cheveux</p>
                        <p>Cintres</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Housing;