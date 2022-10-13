import React from 'react';
const footer = require("../../assets/img/logo/logo-footer.png");

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__elements'>
                <img src={footer} alt="" /> {/* TODO Définir le alt */}
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;