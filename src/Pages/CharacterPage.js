import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import API from '../api';

import Error from '../components/Error';
import Loader from '../components/Loader';
import Character from '../components/Character';


export default function CharacterPage() {
    let history = useHistory();
    let  { characterId } = useParams();

    const [error, setError] = useState(null)
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const CharRequest = await fetch(`${API}${characterId}`);
                const CharData = await CharRequest.json();
                setCharacter(CharData);
                
                setLoading(false);
            }
            catch (err) {
                setError(err.message);

                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleReload = () => {
        history.push('/');
    }

    if (loading) {
        return (
            <section>
                <Loader />
            </section>
        )
    } else if (error) {
        return (
            <Error error={error} reload={ handleReload }/>
        )
    } else {
        return (
            <Character character={character} />
        );
    }
}