import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import videorater from './videos/rater.mp4';
import videorick from './videos/rickandmorty.mp4';
import video360 from './videos/360.mp4';
import { useTheme } from './useTheme';
import './Cards.css';

const Cards = () => {

    const { theme } = useTheme();

    const cardStyle = {
        backgroundColor: theme === 'light' ? '#F5F5F5' : '#5864A1',
        color: theme === 'light' ? '#5864A1' : '#F5F5F5',
        border: theme === 'light' ? '1px solid rgba(88, 100, 161, 0.2)' : '1px solid rgba(245, 245, 245, 0.2)',
        width: '40rem',
    };


    const badgeStyle = {
        color: theme === 'light' ? '#5864A1' : '#F5F5F5',
        padding: '0.15rem 0.3rem',
        borderRadius: '0.25rem',
        marginRight: '0.5rem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        filter: 'brightness(90%)',
        border: '2px solid #E5746D',
    };



    const [isWebButtonHovered, setIsWebButtonHovered] = useState(false);
    const [isRepoButtonHovered, setIsRepoButtonHovered] = useState(false);

    const webButtonStyle = {
        backgroundColor: isWebButtonHovered ? '#E5746D' : '#C5656F',
        borderColor: isWebButtonHovered ? '#E5746D' : '#C5656F',
        color: '#F5F5F5',

    };

    const repoButtonStyle = {
        backgroundColor: isRepoButtonHovered ? '#E5746D' : '#C5656F',
        borderColor: isRepoButtonHovered ? '#E5746D' : '#C5656F',
        color: '#F5F5F5',

    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme === 'light' ? '#5864A1' : '#F5F5F5',
        textShadow: '1px 0px 0px #C5656F', // Efecto de sombra en el lado derecho
    };

    const firstCardStyle = {
        ...cardStyle,
        marginTop: '7rem', // Ajusta el valor según tus necesidades
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
                    <div className="d-flex flex-wrap justify-content-center text-center">
                        <span style={badgeStyle}>HTML</span>
                        <span style={badgeStyle}>CSS</span>
                        <span style={badgeStyle}>JavaScript</span>
                        <span style={badgeStyle}>MongoDB</span>
                        <span style={badgeStyle}>Mongoose</span>
                        <span style={badgeStyle}>ExpressJS</span>
                        <span style={badgeStyle}>Nodemailer</span>
                    </div>

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Tu texto para la segunda card Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button
                            className="me-4 custom-btn"
                            href="https://rick-and-morty-project.fly.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...webButtonStyle }}
                            onMouseEnter={() => setIsWebButtonHovered(true)}
                            onMouseLeave={() => setIsWebButtonHovered(false)}
                        >
                            Web
                        </Button>
                        <Button
                            className="custom-btn"
                            href="URL_REPO_2"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...repoButtonStyle }}
                            onMouseEnter={() => setIsRepoButtonHovered(true)}
                            onMouseLeave={() => setIsRepoButtonHovered(false)}
                        >
                            Repo Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>Nombre de tu tercera card</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
                    <source src={video360} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center">
                        <span style={badgeStyle}>MongoDB</span>
                        <span style={badgeStyle}>ExpressJS</span>
                        <span style={badgeStyle}>ReactJS</span>
                        <span style={badgeStyle}>NodeJS</span>
                        <span style={badgeStyle}>HTML</span>
                        <span style={badgeStyle}>CSS</span>
                        <span style={badgeStyle}>JavaScript</span>
                        <span style={badgeStyle}>Bootstrap</span>
                    </div>

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Tu texto para la tercera card Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button
                            className="me-4 custom-btn"
                            href="URL_PROYECTO_3"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...webButtonStyle }}
                            onMouseEnter={() => setIsWebButtonHovered(true)}
                            onMouseLeave={() => setIsWebButtonHovered(false)}
                        >
                            Web
                        </Button>
                        <Button
                            className="custom-btn"
                            href="URL_REPO_3"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...repoButtonStyle }}
                            onMouseEnter={() => setIsRepoButtonHovered(true)}
                            onMouseLeave={() => setIsRepoButtonHovered(false)}
                        >
                            Repo Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>Juego 1 poner nombre</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
                    <source src={videorater} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center">
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
                        <Button
                            className="me-4 custom-btn"
                            href="URL_PROYECTO_1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...webButtonStyle }}
                            onMouseEnter={() => setIsWebButtonHovered(true)}
                            onMouseLeave={() => setIsWebButtonHovered(false)}
                        >
                            Web
                        </Button>
                        <Button
                            className="custom-btn"
                            href="URL_REPO_1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...repoButtonStyle }}
                            onMouseEnter={() => setIsRepoButtonHovered(true)}
                            onMouseLeave={() => setIsRepoButtonHovered(false)}
                        >
                            Repo Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Cards;
