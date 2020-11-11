import React from "react";
import { Link } from "react-router-dom";


export default function Character({ character }){
    return (
        <section className="char-container">
            
            <div className="box-text-and-back">
                <h1>{character.name}</h1>
                <Link className="back-button" to='/'>
                    <i class="fas fa-chevron-circle-left"></i>
                </Link>
            </div>
            <div>
                
                <div className="character-descripcion">
                    <img src={character.image} name={character.name} />
                    <div className="desc-column-one">
                        <div>
                            <h3>Status: </h3>
                            <div className="live">
                                <span className={ character.status === 'Alive' ? 'point-green' : 'point-red'}> </span>
                                <p>
                                    {character.status}
                                </p>
                            </div>
                        </div>
                        <h3>Species:</h3>
                        <p>{character.species}</p>
                        <h3>Type:</h3>
                        <p>{character.type}</p>
                    </div>
                    <div className="desc-column-two">
                        <h3>Gender:</h3>
                        <p>{character.gender}</p>
                        <h3>Origin:</h3>
                        <p>{character.origin.name}</p>
                        <h3>Location:</h3>
                        <p>{character.location.name}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
