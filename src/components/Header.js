import React from 'react';
import { NavLink } from 'react-router-dom';
const logo = require("../assets/img/logo/LOGO.png");

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" className='header__logo' /> {/* TODO Définir le alt */}
            <ul>
                <NavLink to="/"><li>Accueil</li></NavLink>
                <NavLink to="about"><li>A Propos</li></NavLink>
            </ul>
        </nav>
    );
};

export default Header;