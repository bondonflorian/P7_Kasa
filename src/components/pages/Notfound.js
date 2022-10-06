import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='notfound'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="notfound__href">Retourner sur la page d'accueil</NavLink> {/* TODO Définir le soulignement du text */}
        </div>
    );
};

export default Notfound;