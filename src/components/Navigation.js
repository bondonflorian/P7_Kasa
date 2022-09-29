import React from 'react';
import { NavLink } from 'react-router-dom';
const logo = require("../assets/img/logo/LOGO.png");

const Navigation = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" className='logo' /> {/* TODO Définir le alt */}
            <ul>
                <NavLink to="/"><li>Accueil</li></NavLink>
                <NavLink to="about"><li>A Propos</li></NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;