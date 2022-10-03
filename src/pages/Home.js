import React from 'react';
const banner = require("../assets/img/background-home.png");

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="" /> {/* TODO Mettre en place le alt de l'image */}
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className="card">
                <div className="card__location">
                    <h2>Titre de la location</h2>
                </div>
                {/* Element temporaire pour la mise en page */}
                {/*                 <div className="card__location">
                    <h2>Titre de la location</h2>
                </div>
                <div className="card__location">
                    <h2>Titre de la location</h2>
                </div>
                <div className="card__location">
                    <h2>Titre de la location</h2>
                </div>
                <div className="card__location">
                    <h2>Titre de la location</h2>
                </div>
                <div className="card__location">
                    <h2>Titre de la location</h2>
                </div> */}
            </div>
        </div>
    );
};

export default Home;