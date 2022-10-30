import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Collapse from "../layout/Collapse";
import ImageSlider from '../layout/ImageSlider';

const star = require("../../assets/img/star.png");
const starGrey = require("../../assets/img/star_grey.png");

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
                const dataid = data.find(res => res.id === idlogement.id)
                dataid !== undefined ? setData(dataid) : navigate("/notfound")
            })
        document.title = `Kasa | ${data?.title}`;
    }, [idlogement.id, navigate, data.title])

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
                        {Array.from({ length: parseInt(data.rating) }, (v, index) => <img src={star} alt="Etoile coloré" className="star" key={'colored-' + index} />)}
                        {Array.from({ length: 5 - parseInt(data.rating) }, (v, index) => <img src={starGrey} alt="Etoile gris" key={'empty-' + index} />)}
                    </div>
                </div>
            </div>
            <div className="housing__filterblock__details">
                <div className="housing__filterblock__details__description">

                    <Collapse className="housing__filterblock__details__description__title"
                        title="Description"
                        content={`${data.description}`}
                    />

                </div>
                <div className="housing__filterblock__details__description">

                    <Collapse className="housing__filterblock__details__description__title"
                        title="Equipements"
                        content={data.equipments?.map((res) => (<li className="housing__filterblock__details__description__text__show" key={res.toString()}>{res}</li>))} />
                </div>
            </div>
        </div>
    );
};

export default Housing;