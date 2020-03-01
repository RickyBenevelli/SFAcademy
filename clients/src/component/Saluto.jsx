import React from 'react';
import store from '../store';

import './component.css'

const Saluto = () => {
    var accesso = store.getState();
    if(accesso.movies.isLogged){
        return ( 
            <li className="nav-item">
                <div  className="nav-link barra">CIAO</div>
            </li>
        );
    }
    else {
        return(
            <li className="nav-item">
                <div  className="nav-link barra">Non ti conosco</div>
            </li>
        );
    }

}
 
export default Saluto;