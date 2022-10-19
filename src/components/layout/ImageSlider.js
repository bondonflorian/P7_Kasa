import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


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
                {data.length <= 1 ? "" : <FaAngleLeft onClick={goToPrevious} className='housing__banner__arrowleft' />}
                {data.length <= 1 ? "" : <FaAngleRight onClick={goToNext} className='housing__banner__arrowright' />}
                <img src={data?.[currentIndex]} key={data.length} alt={data.length} />
                {data.length <= 1 ? "" : <p>{currentIndex + 1}/{data.length}</p>}

            </div>
            <div className="housing__banner__bulletpoint">
                {data.map((key, slideIndex) => (
                    data.length <= 1 ? <span className="housing__banner__bulletpoint__hidden"></span> : <span key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</span>
                ))}
            </div>
        </>
    );
};

export default ImageSlider;