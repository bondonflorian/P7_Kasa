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

    return (
        <>
            <div className="housing__banner">
                <FaAngleLeft onClick={goToPrevious} className='housing__banner__arrowleft' />
                <FaAngleRight onClick={goToNext} className='housing__banner__arrowright' />
                <img src={data?.[currentIndex]} key={data.length} alt={data.length} />
            </div>
        </>
    );
};

export default ImageSlider;