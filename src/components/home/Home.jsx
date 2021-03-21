import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
    return (
        <section className="home">
            <img className="home-background animate__animated animate__fadeIn animate__faster" src="./images/fondo-home.jpeg" alt="fondo home" />

            <div className="hero">
                <h1 className="animate__animated animate__fadeIn animate__slow animate__delay-1s">Emanuel Juliá</h1>

                <Link to="/about">
                    <button className="btn btn-lg btn-outline-light animate__animated animate__fadeIn animate__slow animate__delay-2s">Empezar</button>
                </Link>
            </div>
        </section>
    )
}
