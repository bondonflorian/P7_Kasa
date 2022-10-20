import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaAngleUp, FaStar, FaAngleDown } from "react-icons/fa";
import Collapse from 'react-collapse';
import ImageSlider from '../layout/ImageSlider';
import { Navigate } from 'react-router';

const Housing2 = () => {

    const [idlogement] = useState(useParams('id'));
    const [data, setData] = useState(null);
    const [dataid, setDataid] = useState(false);


    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await fetch("logements.json"
                    , {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })
                const appart = await res.json()
                const datatest = appart.find(res => res.id === idlogement.id)
                if (datatest != undefined) {
                    setData(datatest)
                } else {
                    setData(false)
                }
            }
            catch (e) {
                console.log(e)
            }
        };
        fetchData();

    }, []);

    return data
};

const Housing = () => {

    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);

    const data = Housing2();
    if (data === null) // TODO Waiting...
        return null

    return data ? (<div className='housing'>
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
                <div className="housing__filterblock__details__description__title" onClick={() => setCollapse1(!collapse1)}>
                    <h2>Description</h2>
                    {(!collapse1 ? <FaAngleUp className='housing__arrow' /> : <FaAngleDown className='about__arrow' />)}
                </div>
                <div className={(collapse1 ? "housing__filterblock__details__description__text__show" : "housing__filterblock__details__description__text")}>
                    <Collapse isOpened={collapse1}>
                        <p>{data.description}</p>
                    </Collapse>
                </div>
            </div>
            <div className="housing__filterblock__details__description">
                <div className="housing__filterblock__details__description__title" onClick={() => setCollapse2(!collapse2)}>
                    <h2>Equipements</h2>
                    {(!collapse2 ? <FaAngleUp className='housing__arrow' /> : <FaAngleDown className='about__arrow' />)}
                </div>
                <div className={(collapse2 ? "housing__filterblock__details__description__text__show" : "housing__filterblock__details__description__text")}>
                    <Collapse isOpened={collapse2}>
                        {data.equipments?.map((res) => (
                            <p key={res.toString()}>{res}</p>
                        ))}
                    </Collapse>
                </div>
            </div>
        </div>
    </div>) : <Navigate to="/notfound" />
}

export default Housing;