import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import videorater from './videos/rater.mp4';
import videorick from './videos/rickandmorty.mp4';
import video360 from './videos/360.mp4';
import './Cards.css';

const Cards = () => {
    const cardStyle = {
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        border: '1px solid #333333',
    };

    const badgeStyle = {
        backgroundColor: '#D3E061',
    };

    return (
        <div>
            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle, width: '40rem' }}>
                <h5 className="text-center mb-1 mt-3">Juego 1 poner nombre</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
                    <source src={videorater} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center">
                        <Badge className="m-1" style={badgeStyle}>
                            HTML
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            CSS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            JavaScript
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            CanvasJS
                        </Badge>
                        {/* Agrega más etiquetas Badge según las tecnologías utilizadas */}
                    </div>

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls
                        adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-4 custom-btn" href="URL_PROYECTO_1" target="_blank" rel="noopener noreferrer">
                            Web
                        </Button>
                        <Button variant="secondary" className="custom-btn" href="URL_REPO_1" target="_blank" rel="noopener noreferrer">
                            Repo Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle, width: '40rem' }}>
                <h5 className="text-center mb-1 mt-3">Web 1 Backend</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
                    <source src={videorick} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center">
                        <Badge className="m-1" style={badgeStyle}>
                            HTML
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            CSS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            JavaScript
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            ExpressJS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            NodeJS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            MongoDB
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            Mongoose
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            Bootstrap
                        </Badge>
                        {/* Agrega más etiquetas Badge según las tecnologías utilizadas */}
                    </div>

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls
                        adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-4 custom-btn" href="URL_PROYECTO_1" target="_blank" rel="noopener noreferrer">
                            Web
                        </Button>
                        <Button variant="secondary" className="custom-btn" href="URL_REPO_1" target="_blank" rel="noopener noreferrer">
                            Repo Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle, width: '40rem' }}>
                <h5 className="text-center mb-1 mt-3">Web MERN 360</h5>
                <video autoPlay loop className="p-3" style={{ maxHeight: '15rem', width: '100%' }}>
                    <source src={video360} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <Card.Body>
                    <div className="d-flex flex-wrap justify-content-center text-center">
                        <Badge className="m-1" style={badgeStyle}>
                            MongoDB
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            ExpressJS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            ReactJS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            NodeJS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            HTML
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            CSS
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            JavaScript
                        </Badge>
                        <Badge className="m-1" style={badgeStyle}>
                            Bootstrap
                        </Badge>
                        {/* Agrega más etiquetas Badge según las tecnologías utilizadas */}
                    </div>

                    <Card.Text style={{ textAlign: 'justify' }} className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls
                        adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-4 custom-btn" href="URL_PROYECTO_1" target="_blank" rel="noopener noreferrer">
                            Web
                        </Button>
                        <Button variant="secondary" className="custom-btn" href="URL_REPO_1" target="_blank" rel="noopener noreferrer">
                            Repo Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;
