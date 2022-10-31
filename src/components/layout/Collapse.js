import React, { useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
const arrowup = require("../../assets/img/arrow_up.png");
const arrowdown = require("../../assets/img/arrow_down.png");

const Collapse = (props) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [heighthousing, setHeightHousing] = useState("0px");
    const { pathname } = useLocation();

    const content = useRef(null);

    const stateCollapse = () => {
        setActive(active === "" ? "open" : "");
        setHeight(active === "open" ? "0px" : `${content.current.scrollHeight}px`);
        setHeightHousing(active === "open" ? "0px" : "250px");
    }

    return (
        <>
            <div className={`${props.className} ${active}`} onClick={stateCollapse}>
                <h1>{props.title}</h1>
                {(active ? <img src={arrowup} alt="Flêche du haut" className='collapse__arrow' /> : <img src={arrowdown} alt="Flêche du bas" className='collapse__arrow' />)}
            </div>
            {pathname === "/about" ?
                <div ref={content} className="collapse__description" style={{ maxHeight: `${height}` }}>
                    <p className="collapse__description__show">{props.content}</p>
                </div>
                :
                <div ref={content} className="collapse__description__housing" style={{ maxHeight: `${heighthousing}` }}>
                    <p className="collapse__description__show">{props.content}</p>
                </div>}
        </>
    );
}

export default Collapse