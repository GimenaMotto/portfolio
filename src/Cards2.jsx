import React, { useState } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import facturación from './images/facturación.jpg';
import certificados from './images/certificados.jpg';
import './Cards2.css';


const Cards2 = () => {

    const cardStyle = {
        backgroundColor: '#F5F5F5',
        color: '#5864A1',
        border: '1px solid rgba(88, 100, 161, 0.2)',
        width: '40rem',
    };


    const badgeStyle = {
        color: '#5864A1',
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
        color: '#5864A1',
        textShadow: '1px 0px 0px #C5656F',
    };


    const imageStyle = {
        display: 'block',
        margin: '1rem auto', // Combina ambas propiedades de margen
        maxHeight: '18rem',
        width: '95%',
        objectFit: 'cover',
    };

    const containerStyle = {
        marginTop: '7rem',  // Puedes ajustar el valor según tus necesidades
    };

    return (
        <div style={containerStyle}>

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>Diplomas</h5>

                <Carousel interval={null} indicators={false}>
                    <Carousel.Item>
                        <img
                            src={certificados}
                            alt="App certificados img"
                            style={imageStyle}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={certificados}
                            alt="App certificados img"
                            style={imageStyle}
                        />
                    </Carousel.Item>
                </Carousel>

                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center">
                        <span style={badgeStyle}>ElectronJS</span>
                        <span style={badgeStyle}>NodeJS</span>
                        <span style={badgeStyle}>HTML</span>
                        <span style={badgeStyle}>CSS</span>
                        <span style={badgeStyle}>JavaScript</span>
                        <span style={badgeStyle}>Nodemailer</span>
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

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>Facturación</h5>
                <Carousel interval={null} indicators={false}>
                    <Carousel.Item>
                        <img
                            src={facturación}
                            alt="App facturación img"
                            style={imageStyle}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={certificados}
                            alt="App certificados img"
                            style={imageStyle}
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center">
                        <span style={badgeStyle}>ElectronJS</span>
                        <span style={badgeStyle}>NodeJS</span>
                        <span style={badgeStyle}>HTML</span>
                        <span style={badgeStyle}>CSS</span>
                        <span style={badgeStyle}>JavaScript</span>
                        <span style={badgeStyle}>Nodemailer</span>

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

export default Cards2;
