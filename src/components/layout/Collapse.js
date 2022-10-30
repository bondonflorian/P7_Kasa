import React, { useState, useRef } from "react";
const arrowup = require("../../assets/img/arrow_up.png");
const arrowdown = require("../../assets/img/arrow_down.png");

const Collapse = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    const stateCollapse = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    }

    return (
        <>
            <div className={`${props.className} ${setActive}`} onClick={stateCollapse}>
                <h1>{props.title}</h1>
                {(setActive ? <img src={arrowup} alt="Flêche du haut" className='collapse__arrow' /> : <img src={arrowdown} alt="Flêche du bas" className='collapse__arrow' />)}
            </div>
            <div ref={content} className="collapse__description" style={{ maxHeight: `${setHeight}` }}>
                <p className="collapse__description__show">{props.content}</p>
            </div>
        </>
    );
}

export default Collapse