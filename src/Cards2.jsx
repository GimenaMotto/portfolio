import React, { useState } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import facturación from './images/facturación.jpg';
import certificados from './images/certificados.jpg';
import { useTheme } from './useTheme';
import './Cards2.css';


const Cards2 = () => {

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
        border: theme === 'light' ? '2px solid #E5746D' : '2px solid #C5656F',
    };



    const [isWebButtonHovered, setIsWebButtonHovered] = useState(false);
    const [isRepoButtonHovered, setIsRepoButtonHovered] = useState(false);

    const webButtonStyle = {
        backgroundColor: isWebButtonHovered ? (theme === 'light' ? '#E5746D' : '#C5656F') : (theme === 'light' ? '#C5656F' : '#E5746D'),
        borderColor: isWebButtonHovered ? (theme === 'light' ? '#E5746D' : '#C5656F') : (theme === 'light' ? '#C5656F' : '#E5746D'),
        color: '#F5F5F5',
    };

    const repoButtonStyle = {
        backgroundColor: isRepoButtonHovered ? (theme === 'light' ? '#E5746D' : '#C5656F') : (theme === 'light' ? '#C5656F' : '#E5746D'),
        borderColor: isRepoButtonHovered ? (theme === 'light' ? '#E5746D' : '#C5656F') : (theme === 'light' ? '#C5656F' : '#E5746D'),
        color: '#F5F5F5',
    };

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme === 'light' ? '#5864A1' : '#F5F5F5',
        textShadow: theme === 'light' ? '1.5px 0px 0px #C5656F' : '1.5px 0px 0px #E5746D',
    };


    const imageStyle = {
        display: 'block',
        margin: '1rem auto',
        maxHeight: '18rem',
        width: '95%',
        objectFit: 'cover',
    };

    const containerStyle = {
        marginTop: '7rem',
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
