import React from 'react';
import { Link  } from 'react-router-dom';

export default function CharacterList({characters=[],}){
    return (
        <section>
            <ul className="charList">
                {characters.map(char =>
                    (<li className="charItem" key={char}>
                        <Link className="charLink" to={`/character/${char.id}`}>
                            <img src={char.image} alt='' />
                            <h4>{char.name}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
} 