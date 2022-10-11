import React from 'react';
import { Link } from 'react-router-dom';

const banner = require("../../assets/img/background-home.png");

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="" /> {/* TODO Mettre en place le alt de l'image */}
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className="card">
                <div className="card__all">
                    <div className="card__location">
                        <Link to="/housing1" >
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                            <h2>Titre de la location</h2>
                        </Link>
                    </div>
                    {/* TODO Element temporaire pour la mise en page */}
                    {/* <div className="card__location">
                        <Link to="/housing1" >
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                            <h2>Titre de la location</h2>
                        </Link>
                    </div>
                    <div className="card__location">
                        <Link to="/housing1" >
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                            <h2>Titre de la location</h2>
                        </Link>
                    </div>
                    <div className="card__location">
                        <Link to="/housing1" >
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                            <h2>Titre de la location</h2>
                        </Link>
                    </div>
                    <div className="card__location">
                        <Link to="/housing1" >
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                            <h2>Titre de la location</h2>
                        </Link>
                    </div>
                    <div className="card__location">
                        <Link to="/housing1" >
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                            <h2>Titre de la location</h2>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;