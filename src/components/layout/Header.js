import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const logo = require("../../assets/img/logo/LOGO.png");

const Header = () => {

    const { pathname } = useLocation();

    return (
        <nav className='header'>
            <img src={logo} alt="Logo Kasa" className='header__logo' />
            <ul>
                <NavLink to="/" className={() => (pathname === "/" ? "header__logo__nav__selected" : "header__logo__nav")}><li>Accueil</li></NavLink>
                <NavLink to="about" className={() => (pathname === "/about" ? "header__logo__nav__selected" : "header__logo__nav")}><li>A Propos</li></NavLink>
            </ul>
        </nav>
    );
};

export default Header;