import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const logo = require("../../assets/img/logo/LOGO.png");

const Header = () => {

    const [home, setHome] = useState(true)
    const [about, setAbout] = useState(false)

    const handleClick = () => {
        setHome(true)
        setAbout(false)
    }

    const handleClickAbout = () => {
        setAbout(true)
        setHome(false)
    }

    return (
        <nav className='header'>
            <img src={logo} alt="Logo Kasa" className='header__logo' />
            <ul>
                <NavLink to="/" onClick={handleClick} className={() => (home ? "header__logo__nav__selected" : "header__logo__nav")}><li>Accueil</li></NavLink>
                <NavLink to="about" onClick={handleClickAbout} className={() => (about ? "header__logo__nav__selected" : "header__logo__nav")}><li>A Propos</li></NavLink>
            </ul>
        </nav>
    );
};

export default Header;