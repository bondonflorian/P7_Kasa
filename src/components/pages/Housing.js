import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaAngleUp, FaStar } from "react-icons/fa";
import ImageSlider from '../layout/ImageSlider';

const Housing = () => {

    const [idlogement] = useState(useParams('id'));
    const [data, setData] = useState([]);
    const navigate = useNavigate();

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
            .then((data) => {
                data.map((apartment) => (
                    apartment.id === idlogement.id ? setData(apartment) : ""
                ))
            })
    }, [data, idlogement.id, navigate])

    return (
        <div className='housing'>
            {<ImageSlider />}
            <div className="housing__title">
                <h1>{data.title}</h1>
            </div>
            <h3>{data.location}</h3>
            <div className="housing__filterblock">
                <div className="housing__filterblock__filter">
                    {data.tags?.map((res) => (
                        <p key={res.toString()}>{res}</p>
                    ))}
                </div>
                <div className="housing__user">
                    <div className='housing__title__autor'>
                        <p>{data.host?.name}</p>
                        <img src={data.host?.picture} alt={data.host?.name} className='housing__title__picture'></img>
                    </div>
                    <div className="housing__filterblock__notice">
                        {Array.from({ length: parseInt(data.rating) }, (v, index) => <FaStar className="star" key={'colored-' + index} />)}
                        {Array.from({ length: 5 - parseInt(data.rating) }, (v, index) => <FaStar className="star__grey" key={'empty-' + index} />)}
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
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="housing__filterblock__details__description">
                    <div className="housing__filterblock__details__description__title">
                        <h2>Equipements</h2>
                        <FaAngleUp className='housing__arrow' />
                    </div>
                    <div className="housing__filterblock__details__description__text">
                        {data.equipments?.map((res) => (
                            <p key={res.toString()}>{res}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Housing;