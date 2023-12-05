import React from 'react';
import { Card, Button } from 'react-bootstrap';
import img1 from './images/project1.jpg';
import './Cards.css'

const Cards = () => {

    const cardStyle = {
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        border: '1px solid #333333',
    };
    return (
        <div>
            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle, width: '40rem' }}>
                <Card.Img variant="top" src={img1} className="p-3" style={{ objectFit: 'contain', maxHeight: '15rem' }} />
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify' }}>
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
            <Card className="mb-3 mt-5 mx-auto" style={{ ...cardStyle, width: '40rem' }}>
                <Card.Img variant="top" src={img1} className="p-3" style={{ objectFit: 'contain', maxHeight: '15rem' }} />
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify' }}>
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
    )
}

export default Cards