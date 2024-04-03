import React, { useState, useEffect } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import facturación from './images/facturación.jpg';
import certificados from './images/certificados.jpg';
import factura from './images/factura.jpg'
import certificado from './images/certificado.jpg'
import { useTheme } from './useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Cards2.css';


const Cards2 = () => {

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            loadImage(facturación),
            loadImage(certificados),
            loadImage(factura),
            loadImage(certificado),

        ]).then(() => {
            setImagesLoaded(true);
        }).catch(error => {
            console.error("Error loading images:", error);
        });
    }, []);

    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject(`Error loading image: ${src}`);
            img.src = src;
        });
    };
    const { theme } = useTheme();

    const cardStyle = {
        backgroundColor: theme === 'light' ? '#F5F5F5' : 'rgb(51, 51, 51)',
        color: theme === 'light' ? 'rgb(51, 51, 51)' : '#F5F5F5',
        border: theme === 'light' ? '1px solid rgba(88, 100, 161, 0.2)' : '1px solid rgba(245, 245, 245, 0.2)',
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



    // const [isWebButtonHovered, setIsWebButtonHovered] = useState(false);
    const [isRepoButtonHovered, setIsRepoButtonHovered] = useState(false);

    const webAndRepoStyle = {
        color: isRepoButtonHovered ? 'rgba(255, 120, 120, 1)' : 'rgba(226, 113, 113, 1)',
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
        width: '70%',
        objectFit: 'cover',
    };

    const imageStyle2 = {
        display: 'block',
        margin: '1rem auto',
        maxWidth: '100%',
        maxHeight: '18rem',
        objectFit: 'cover',
    };

    const containerStyle = {
        marginTop: '5rem',
    };

    return (
        imagesLoaded && (
            <div style={containerStyle}>

                <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle }}>
                    <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>APP FACTURACIÓN</h5>

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
                                src={factura}
                                alt="App facturación pdf img"
                                style={imageStyle2}
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
                            <span style={badgeStyle}>Json</span>
                        </div>

                        <Card.Text className="mt-3 mx-5">
                            Aplicación para el área contable de Oposiciones Arquitectos Madrid.<br />
                            Genera facturas en pdf con los datos de los alumnos/as y los envía a sus correos electrónicos a través de Nodemailer

                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://github.com/OposicionesArquitectoMadrid/interfaz"
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
                    <h5 className="text-center mb-1 mt-3" style={cardTitleStyle}>APP DIPLOMAS Y CERTIFICADOS</h5>
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
                                src={certificado}
                                alt="App certificados pdf img"
                                style={imageStyle2}
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
                            <span style={badgeStyle}>Json</span>

                        </div>

                        <Card.Text className="mt-3 mx-5">
                            Aplicación para el área administrativa de Oposiciones Arquitectos Madrid.<br />
                            Genera diferentes tipos de certificados y diplomaa con los datos de los cursos y alumnos/as y los envía a sus correos electrónicos a través de Nodemailer

                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://github.com/OposicionesArquitectoMadrid/certificados"
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
            </div >
        )
    );
};

export default Cards2;
