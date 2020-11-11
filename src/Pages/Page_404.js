import React from "react";
import { Link } from "react-router-dom";


export default function Page_404(){
    return (
        <section className="not-found-container">
            <h1>404</h1>
            <h3>Not Found</h3>
            <div className="box-button">
                <Link className="back-button" to='/'>
                        <i class="fas fa-chevron-circle-left"></i>
                </Link>
            </div>
            <img className="img-found" src="https://i.imgur.com/ZjVbywZ.png"/>
        </section>
    );
}