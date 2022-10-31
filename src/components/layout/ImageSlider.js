import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const arrowright = require("../../assets/img/arrow_right.png");
const arrowleft = require("../../assets/img/arrow_left.png");


const ImageSlider = () => {
    const [idlogement] = useState(useParams('id'));
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                    apartment.id === idlogement.id ? setData(apartment.pictures) : ""
                ))
            });
    }, [idlogement])

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="housing__banner">
                {data.length <= 1 ? "" : <img src={arrowleft} alt="Flêche de gauche" onClick={goToPrevious} className='housing__banner__arrowleft' />}
                {data.length <= 1 ? "" : <img src={arrowright} alt="Flêche de droite" onClick={goToNext} className='housing__banner__arrowright' />}
                <img src={data?.[currentIndex]} key={data.length} alt={data.length} className="housing__banner__banner" />
            </div>
            <div className="housing__banner__bulletpoint">
                {data.map((key, slideIndex) => (
                    data.length <= 1 ? <span className="housing__banner__bulletpoint__hidden" key={slideIndex}></span> : <span key={slideIndex} className={currentIndex === slideIndex ? "housing__banner__bulletpoint__currentindex" : "housing__banner__bulletpoint__currentindex__slideindex"} onClick={() => goToSlide(slideIndex)}>●</span>
                ))}
            </div>
            {data.length <= 1 ? "" : <p className="housing__banner__index">{currentIndex + 1}/{data.length}</p>}
        </>
    );
};

export default ImageSlider;