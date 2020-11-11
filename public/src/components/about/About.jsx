import React from 'react';
import './about.css';
import { Contact } from './Contact';

export const About = () => {
    return (
        <>
            <section className="about animate__animated animate__fadeIn">
                <div className="row profile-container">
                    <div className="col-md-6 profile-picture-container">
                        <img className="profile animate__animated animate__fadeInLeft" src="./images/profile.jpeg" alt="foto de perfil" />
                    </div>
                    <div className="col-md-6 description">
                        <h2 className="animate__animated animate__fadeInRight animate__faster">Emanuel Juliá</h2>
                        <h3 className="animate__animated animate__fadeInRight animate__fast">Cantante / Instrumentista / Compositor / Docente de música</h3>
                        <p className="testimony animate__animated animate__fadeIn animate__slow">Estudió Licenciatura en música en la Universidad Nacional de Tres de Febrero (UNTREF) y actualmente estudia Dirección coral en la Universidad Nacional de las Artes (UNA). Estudió particularmente Canto con Alejandro Spies y Piano con Lucas Urdampilleta, Toca guitarra y Bajo desde pequeño, se desempeñó como bajista y cantante en las agrupaciones musicales de Nácar (Rock progresivo) y Café Solo (Jazz). Ha cantado en varias agrupaciones corales, actualmente participa de Vocal Miscelánea grupo con el cual ha ganado premios internacionales en diversos lugares como Colombia y Brasil. Particularmente se ha inclinado por el uso de tecnología, y actualmente ejerce como docente en las materias de Canto y Electrónica de la UNTREF y canto en el conservatorio Johan Sebastián Bach. Además de ser docente en instituciones se desarrolla como docente particular en Canto, Guitarra, Piano, Bajo, Audioperceptiva, Iniciación musical y Composición desde el 2015. Compositor de Varias obras entre ellas su ópera “Eulalia” y su primer disco solista “Pinceles”. Posee un dúo de música popular y académica junto a Maia Wierzbinsky.</p>
                    </div>
                </div>
                <a className="btn btn-outline-dark" href="/cv.docx" download>Descargar CV</a>
                <iframe className="video" src="https://www.youtube.com/embed/CuMQ2QKdBxk" title="Estructura musical de Cantata de Puente Amarillos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <Contact />
        </>
    )
}
