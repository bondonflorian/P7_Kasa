import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const banner = require("../../assets/img/background-home.png");

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("logements.json"
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
        document.title = 'Kasa | Accueil';
    }, [])

    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="Chez vous, partout et ailleurs" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className="card">
                {/*                 <div className="card__all">
                </div> */}
                {data.map((item) => (
                    <div className="card__location" key={item.id}>
                        <Link to={"/housing-" + item.id} >
                            <img src={item.cover} alt={item.title} />
                            <h2>{item.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;