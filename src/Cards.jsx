import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import videorater from './videos/rater.mp4';
import videorick from './videos/rickandmorty.mp4';
import video360 from './videos/360.mp4';
import { useTheme } from './useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';


const Cards = () => {

    const { theme } = useTheme();

    const cardStyle = {
        backgroundColor: theme === 'light' ? '#F5F5F5' : '#3161A3',
        color: theme === 'light' ? '#3161A3' : '#F5F5F5',
        border: theme === 'light' ? '1px solid rgba(88, 100, 161, 0.2)' : '1px solid rgba(245, 245, 245, 0.2)',
        width: '40rem',
    };


    const badgeStyle = {
        color: theme === 'light' ? '#3161A3' : '#F5F5F5',
        padding: '0.10rem 0.3rem',
        borderRadius: '0.25rem',
        marginRight: '0.5rem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        filter: 'brightness(90%)',
        border: '2px solid #79A158',

    };



    const [isWebButtonHovered, setIsWebButtonHovered] = useState(false);
    const [isRepoButtonHovered, setIsRepoButtonHovered] = useState(false);

    const webAndRepoStyle = {
        color: isWebButtonHovered || isRepoButtonHovered ? '#C5656F' : 'rgba(197, 101, 111, 1)',
        transition: 'color 0.3s',
        textDecoration: 'none',
        fontWeight: 'bold',

    };


    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme === 'light' ? '#3161A3' : '#F5F5F5',
        textShadow: '1.5px 0px 0px #79A158',
    };

    const firstCardStyle = {
        ...cardStyle,
        marginTop: '5rem',
    };




    return (
        <div>


            <Card className="mb-3 mx-auto" style={firstCardStyle}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>Wiki Rick and Morty</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
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
                        <span style={badgeStyle}>ExpressJS</span>
                        <span style={{ ...badgeStyle, marginTop: '8px' }}>Nodemailer</span>
                        <span style={{ ...badgeStyle, marginTop: '8px' }}>Cloudinary</span>
                        <span style={{ ...badgeStyle, marginTop: '8px' }}>API Google</span>
                    </div>


                    <Card.Text className="mt-3 mx-3">
                        Wiki de la serie Rick and Morty.<br />
                        Puedes buscar todos los personajes, episodios y locaciones.<br />
                        Red social con sistema auth que te permite guardar en favoritos, crear eventos en los que otros usuarios pueden participar.<br />
                        Realizada como trabajo de Bootcamp en Ironhack junto a mi compañero Iván Pereiro.<br />
                        Trabajamos con la siguiente API: https://rickandmortyapi.com/<br />
                        Para poder visualizar todo puedes acceder con el usuario: Pimba y contraseña: 12345 o bien registrarte.
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <a
                            href="https://rick-and-morty-project.fly.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-4 custom-icon-link"
                            style={webAndRepoStyle}
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
                            style={webAndRepoStyle}
                            onMouseEnter={() => setIsRepoButtonHovered(true)}
                            onMouseLeave={() => setIsRepoButtonHovered(false)}
                        >
                            <FontAwesomeIcon icon={faCode} size="sm" />
                            <span className="ms-2">Repo GitHub</span>
                        </a>

                    </div>

                </Card.Body>
            </Card>

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>360 red social viajes</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
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

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Tu texto para la tercera card Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <a
                            href="https://trips-app-client.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-4 custom-icon-link"
                            style={webAndRepoStyle}
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
                            style={webAndRepoStyle}
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
                            style={webAndRepoStyle}
                            onMouseEnter={() => setIsRepoButtonHovered(true)}
                            onMouseLeave={() => setIsRepoButtonHovered(false)}
                        >
                            <FontAwesomeIcon icon={faCode} size="sm" />
                            <span className="ms-2">Repo GitHub server</span>
                        </a>
                    </div>

                </Card.Body>
            </Card>

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>Videojuego</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
                    <source src={videorater} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center" style={{ margin: '0 4.5rem' }}>
                        <span style={badgeStyle}>HTML</span>
                        <span style={badgeStyle}>CSS</span>
                        <span style={badgeStyle}>JavaScript</span>
                        <span style={badgeStyle}>CanvasJS</span>
                    </div>

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls
                        adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <a
                            href="https://gimenamotto.github.io/RATER_GAME_FINAL/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-4 custom-icon-link"
                            style={webAndRepoStyle}
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
                            style={webAndRepoStyle}
                            onMouseEnter={() => setIsRepoButtonHovered(true)}
                            onMouseLeave={() => setIsRepoButtonHovered(false)}
                        >
                            <FontAwesomeIcon icon={faCode} size="lg" />
                            <span className="ms-2">Repo GitHub</span>
                        </a>
                    </div>

                </Card.Body>
            </Card>

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>Página web fotografa</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
                    <source src={videorater} type="video/mp4" />
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

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls
                        adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-4 custom-icon-link"
                            style={webAndRepoStyle}
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
                            style={webAndRepoStyle}
                            onMouseEnter={() => setIsRepoButtonHovered(true)}
                            onMouseLeave={() => setIsRepoButtonHovered(false)}
                        >
                            <FontAwesomeIcon icon={faCode} size="sm" />
                            <span className="ms-2">Repo GitHub</span>
                        </a>
                    </div>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Cards;
