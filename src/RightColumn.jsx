import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VasarelySketch from './VasarelySketch';
import RandomWalkerSketch from './RandomWalkerSketch';
import MondrianSketch from './MondrianSketch';
import VasarelySketch1 from './VasarelySketch1';
import img1 from './images/project1.jpg';

const RightColumn = () => {
    return (
        <div className="right-column">
            <div style={{ width: '500px', height: '500px' }}>
                <RandomWalkerSketch />
            </div>
            <div style={{ width: '400px', height: '450px' }}>
                <MondrianSketch />
            </div>
            <div style={{ width: '700px', height: '700px' }}>
                <VasarelySketch1 />
            </div>
            <div style={{ width: '690px', height: '730px' }}>
                <VasarelySketch />
            </div>

            <Card className="mb-3" style={{ width: '30rem' }}> {/* Define un ancho específico */}
                <Card.Img variant="top" src={img1} className="p-3" style={{ objectFit: 'contain', maxHeight: '15rem' }} />
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify' }}> {/* Justifica el texto */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-2" href="URL_PROYECTO_1" target="_blank" rel="noopener noreferrer">
                            Ver web
                        </Button>
                        <Button variant="secondary" href="URL_REPO_1" target="_blank" rel="noopener noreferrer">
                            Repositorio en Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="mb-3" style={{ width: '30rem' }}> {/* Define un ancho específico */}
                <Card.Img variant="top" src={img1} className="p-3" style={{ objectFit: 'contain', maxHeight: '15rem' }} />
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify' }}> {/* Justifica el texto */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-2" href="URL_PROYECTO_1" target="_blank" rel="noopener noreferrer">
                            Ver web
                        </Button>
                        <Button variant="secondary" href="URL_REPO_1" target="_blank" rel="noopener noreferrer">
                            Repositorio en Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="mb-3" style={{ width: '30rem' }}> {/* Define un ancho específico */}
                <Card.Img variant="top" src={img1} className="p-3" style={{ objectFit: 'contain', maxHeight: '15rem' }} />
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify' }}> {/* Justifica el texto */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-2" href="URL_PROYECTO_1" target="_blank" rel="noopener noreferrer">
                            Ver web
                        </Button>
                        <Button variant="secondary" href="URL_REPO_1" target="_blank" rel="noopener noreferrer">
                            Repositorio en Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="mb-3" style={{ width: '30rem' }}> {/* Define un ancho específico */}
                <Card.Img variant="top" src={img1} className="p-3" style={{ objectFit: 'contain', maxHeight: '15rem' }} />
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify' }}> {/* Justifica el texto */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos skañlsdklakdlsajdkasdkj asljdls adjlasdjl askdjlksaj asldkjasjd lasjdlkasj dlksajd l
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-2" href="URL_PROYECTO_1" target="_blank" rel="noopener noreferrer">
                            Ver web
                        </Button>
                        <Button variant="secondary" href="URL_REPO_1" target="_blank" rel="noopener noreferrer">
                            Repositorio en Github
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default RightColumn;

