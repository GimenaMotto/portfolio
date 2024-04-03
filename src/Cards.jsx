import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import rater from './images/rater.jpg';
import videorick from './videos/rickandmorty.mp4';
import video360 from './videos/360.mp4';
import silviAn from './videos/silviAn.mp4'
import { useTheme } from './useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import './Cards.css';

const Cards = () => {

    const [videosLoaded, setVideosLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            loadVideo(videorick),
            loadVideo(video360),
            loadVideo(silviAn)
        ]).then(() => {
            setVideosLoaded(true);
        }).catch(error => {
            console.error("Error loading videos:", error);
        });
    }, []);

    const loadVideo = (src) => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            video.addEventListener('loadeddata', () => resolve());
            video.addEventListener('error', () => reject(`Error loading video: ${src}`));
        });
    };

    const { theme } = useTheme();

    const [isWebButtonHovered, setIsWebButtonHovered] = useState(false);
    const [isRepoButtonHovered, setIsRepoButtonHovered] = useState(false);
    const [isRepo2ButtonHovered, setIsRepo2ButtonHovered] = useState(false);


    const cardStyle = {
        backgroundColor: theme === 'light' ? '#F5F5F5' : 'rgb(51, 51, 51)',
        color: theme === 'light' ? 'rgb(51, 51, 51)' : '#F5F5F5',
        border: theme === 'light' ? '1px solid rgba(51, 51, 51, 0.2)' : '1px solid rgba(245, 245, 245, 0.2)',
        width: '40rem',
    };


    const badgeStyle = {
        color: theme === 'light' ? 'rgb(51, 51, 51)' : '#F5F5F5',
        padding: '0.10rem 0.3rem',
        borderRadius: '0.25rem',
        marginRight: '0.5rem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        filter: 'brightness(90%)',
        border: '2px solid #4ABB85',

    };



    const sharedButtonStyle = {
        color: 'rgba(226, 113, 113, 1)',
        transition: 'color 0.3s',
        textDecoration: 'none',
        fontWeight: 'bold',

    };

    const cardTitleStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: theme === 'light' ? 'rgb(51, 51, 51)' : '#F5F5F5',

    };

    const firstCardStyle = {
        ...cardStyle,
        marginTop: '5rem',
    };


    const imageStyle = {
        display: 'block',
        margin: '1rem auto',
        maxHeight: '18rem',
        width: '57%',
        objectFit: 'cover',
    };

    return (
        videosLoaded && (
            <div>
                <Card className="mb-3 mt-5 mx-auto card" style={firstCardStyle} >
                    <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>WIKI RICK AND MORTY</h5>
                    <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }} disableRemotePlayback>
                        <source src={videorick} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <Card.Body>

                        <div className="d-flex flex-wrap justify-content-center text-center" style={{ margin: '0 4.5rem' }}>
                            <span style={badgeStyle}>HTML</span>
                            <span style={badgeStyle}>CSS</span>
                            <span style={badgeStyle}>JavaScript</span>
                            <span style={badgeStyle}>MongoDB</span>
                            <span style={badgeStyle}>Mongoose</span>
                            <span style={{ ...badgeStyle, marginTop: '8px' }}>ExpressJS</span>
                            <span style={{ ...badgeStyle, marginTop: '8px' }}>Nodemailer</span>
                            <span style={{ ...badgeStyle, marginTop: '8px' }}>Cloudinary</span>
                            <span style={{ ...badgeStyle, marginTop: '8px' }}>API Google</span>
                        </div>


                        <Card.Text className="mt-3 mx-5">
                            Red social con funciones de registro, inicio, cierre de sesión y autorización.<br />
                            Aplicación CRUD.<br />
                            Integración de Google Maps. <br />
                            Validación de Backend y manejo de errores. Trabajamos con la siguiente API: https://rickandmortyapi.com/<br />
                            Desarrollado junto a Iván Pereiro.<br />

                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://rick-and-morty-project.fly.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isWebButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsWebButtonHovered(true)}
                                onMouseLeave={() => setIsWebButtonHovered(false)}

                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                                <span className="ms-2">Web</span>
                            </a>
                            <a
                                href="https://github.com/ivanpereariza/backend-project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isRepoButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsRepoButtonHovered(true)}
                                onMouseLeave={() => setIsRepoButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faCode} size="sm" />
                                <span className="ms-2">Repo GitHub</span>
                            </a>

                        </div>

                    </Card.Body>
                </Card>

                <Card className="mb-3 mx-auto card" style={{ ...cardStyle }}>
                    <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>INTERFAZ SPA FOTOGRAFÍAS</h5>
                    <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }} disableRemotePlayback  >
                        <source src={silviAn} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <Card.Body>
                        <div className="d-flex flex-wrap justify-content-center text-center" style={{ margin: '0 4.5rem' }}>
                            <span style={badgeStyle}>React</span>
                            <span style={badgeStyle}>Material UI</span>
                            <span style={badgeStyle}>HTML</span>
                            <span style={badgeStyle}>CSS</span>
                            <span style={badgeStyle}>JavaScript</span>

                        </div>

                        <Card.Text className="mt-3 mx-5">
                            Interfaz SPA construida con React y Material UI. <br />
                            Página de inicio interactiva con posibilidades de modificar fotografías, tamaños, ubicación. <br />

                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://admirable-cascaron-37509c.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isWebButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsWebButtonHovered(true)}
                                onMouseLeave={() => setIsWebButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                                <span className="ms-2">Web</span>
                            </a>
                            <a
                                href="https://github.com/GimenaMotto/SilvinaNicotra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isRepoButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsRepoButtonHovered(true)}
                                onMouseLeave={() => setIsRepoButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faCode} size="sm" />
                                <span className="ms-2">Repo GitHub</span>
                            </a>
                        </div>

                    </Card.Body>
                </Card>

                <Card className="mb-3 mt-5 mx-auto card" style={{ ...cardStyle }}>
                    <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>RED SOCIAL VIAJES</h5>
                    <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }} disableRemotePlayback>
                        <source src={video360} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <Card.Body>

                        <div className="d-flex flex-wrap justify-content-center text-center" style={{ margin: '0 4.5rem' }}>
                            <span style={badgeStyle}>MongoDB</span>
                            <span style={badgeStyle}>ExpressJS</span>
                            <span style={badgeStyle}>ReactJS</span>
                            <span style={badgeStyle}>NodeJS</span>
                            <span style={badgeStyle}>HTML</span>
                            <span style={badgeStyle}>CSS</span>
                            <span style={{ ...badgeStyle, marginTop: '8px' }}>JavaScript</span>
                            <span style={{ ...badgeStyle, marginTop: '8px' }}>Bootstrap</span>
                        </div>

                        <Card.Text className="mt-3 mx-5 ">
                            Aplicación Full-stack utilizando la pila MERN. <br />
                            Interfaz SPA construida con REACT que consta de múltiples vistas e implementa todas las acciones CRUD.<br />
                            Backend de API REST creado con ExpressJS, MongoDB y Mongoose. <br />
                            Funciones de registro, inicio, cierre de sesión y autorización. <br />
                            Validación de Backend y manejo de errores. <br />
                            Integración de Google Maps. <br />
                            Desarrollado junto a Alvaro Moreno.<br />
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://trips-app-client.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isWebButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsWebButtonHovered(true)}
                                onMouseLeave={() => setIsWebButtonHovered(false)}

                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                                <span className="ms-2">Web</span>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isRepoButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsRepoButtonHovered(true)}
                                onMouseLeave={() => setIsRepoButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faCode} size="sm" />
                                <span className="ms-2">Repo GitHub client</span>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isRepo2ButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsRepo2ButtonHovered(true)}
                                onMouseLeave={() => setIsRepo2ButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faCode} size="sm" />
                                <span className="ms-2">Repo GitHub server</span>
                            </a>
                        </div>

                    </Card.Body>
                </Card>




                <Card className="mb-3 mt-5 mx-auto card" style={{ ...cardStyle }}>
                    <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>VIDEOJUEGO</h5>
                    <img
                        src={rater}
                        alt="Videojuego img"
                        style={imageStyle}
                    />
                    <Card.Body>
                        <div className="d-flex flex-wrap justify-content-center text-center" style={{ margin: '0 4.5rem' }}>
                            <span style={badgeStyle}>HTML</span>
                            <span style={badgeStyle}>CSS</span>
                            <span style={badgeStyle}>JavaScript</span>
                            <span style={badgeStyle}>CanvasJS</span>
                        </div>

                        <Card.Text className="mt-3 mx-5">
                            Videojuego proyecto de Bootcamp en Ironhack<br />
                            Realizado con Javascript y CanvasJS. <br />
                            Desarrollado junto a Miguel Ferragut.<br />
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://gimenamotto.github.io/RATER_GAME_FINAL/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isWebButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsWebButtonHovered(true)}
                                onMouseLeave={() => setIsWebButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                                <span className="ms-2">Web</span>
                            </a>
                            <a
                                href="https://github.com/GimenaMotto/RATER_GAME_FINAL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-4 custom-icon-link"
                                style={isRepoButtonHovered ? { ...sharedButtonStyle, color: 'rgba(255, 120, 120, 1)' } : sharedButtonStyle}
                                onMouseEnter={() => setIsRepoButtonHovered(true)}
                                onMouseLeave={() => setIsRepoButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faCode} size="lg" />
                                <span className="ms-2">Repo GitHub</span>
                            </a>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        )
    );
};

export default Cards;
