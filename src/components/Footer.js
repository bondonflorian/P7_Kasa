import React from 'react';
const footer = require("../assets/img/logo/logo-footer.png");

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-conteners'>
                <img src={footer} alt="" /> {/* TODO Définir le alt */}
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;