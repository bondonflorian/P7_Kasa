import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Notfound = () => {

    useEffect(() => {
        document.title = 'Kasa | Error 404';
    }, []);

    return (
        <div className='notfound'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="notfound__href">Retourner sur la page d'accueil</NavLink>
        </div>
    );
};

export default Notfound;