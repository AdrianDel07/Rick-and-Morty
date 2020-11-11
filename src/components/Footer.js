import React, { useEffect, useState } from 'react';


export default function Footer() {

    const [data, setData] = useState({})
    /* fetch data from episodes API */
    useEffect(() => {
        const fetchData = async () => {
            const CharRequest = await fetch('https://rickandmortyapi.com/api/episode/');
            const CharData = await CharRequest.json();
            setData(CharData.info);
        };
        fetchData();
    }, [])
    return (
        <footer>
             <p className="chapters"><h4>capitulos:</h4> {data.count}</p>
            <div class="social_wrap">
                <ul>
                    <li><a href="https://www.linkedin.com/in/adriandelaasuncionbuelvas/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/AdrianDeLaAsun1" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://github.com/AdrianDel07" target="_blank"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
            <p className="text-by">❮❯ by <a href="https://wwww.adriandb.digital">Adrian De La Asuncion</a> 2020</p>
             
        </footer>
    );
}