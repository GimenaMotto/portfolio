import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiFile } from 'react-icons/fi';
import cvGimenaMotto from './documents/CV-Gimena-Motto-ES.pdf';
import { motion } from 'framer-motion';
import './Description.css'; // Importa el archivo CSS

const Description = ({ fastAnimation }) => {
    console.log('Valor de fastAnimation:', fastAnimation); // Agregar console.log para imprimir el valor de fastAnimation
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <div style={{ marginRight: '80px' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: fastAnimation ? 0.5 : 1.8, delay: fastAnimation ? 0.2 : 3.9 }} // Ajustar la duración y el retraso de la animación según el parámetro
                        >
                            <p>Soy Desarrolladora web Full Stack, graduada del bootcamp de Ironhack, con especialización en Front End. Poseo experiencia en la creación de aplicaciones web y el mantenimiento de sitios existentes a través de un proyecto personal en curso. Además, colaboro activamente en una empresa donde desarrollo aplicaciones de escritorio. Mi trayectoria laboral abarca más de 10 años, con experiencia en diversos sectores, incluidas instituciones lo que me ha proporcionado habilidades que complementan mi enfoque en tecnología</p>
                        </motion.div>
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2.8, delay: 4.9 }}
                        >
                            <a href={cvGimenaMotto} download="CV-Gimena-Motto-ES.pdf" className="link">
                                <FiFile style={{ marginRight: '5px' }} />
                                CV
                            </a>
                        </motion.div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Description;

