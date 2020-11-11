import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <Link className="logo" to='/'>
                    <img src="https://i.imgur.com/h1SJNkx.png" width="100" height="60"/>
                </Link>  
                <div class="social_wrap">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/adriandelaasuncionbuelvas/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://twitter.com/AdrianDeLaAsun1" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://github.com/AdrianDel07" target="_blank"><i class="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}