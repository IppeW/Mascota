import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { chiens } = props;
    return (
        <li className="cards">
            <Link to={`../chien/${chiens.id}`}><img className="image" src={chiens.photo} alt={chiens.race} /></Link>
            <div className="">
                <ul>
                    <li className="raceTitre"><Link to={`../chien/${chiens.id}`}>{chiens.race}</Link></li>
                    <li className="description">Pays : {chiens.pays}</li>
                    <li className="description">Taille : {chiens.taille}</li>
                    <li className="description">Poile : {chiens.poile}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;