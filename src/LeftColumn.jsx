import React, { useState } from 'react';
import './LeftColumn.css';
import { Github, Envelope, Linkedin } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const LeftColumn = ({ setShowProjects, setShowSketches, setShowApplications, setShowDescription, setFastAnimation }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [clickedSection, setClickedSection] = useState(null);

    const handleProjectsClick = () => {
        setShowProjects(true);
        setShowSketches(false);
        setShowApplications(false);
        setShowDescription(false);
        setActiveSection('projects');
        setClickedSection('projects');
    };

    const handleSketchesClick = () => {
        setShowProjects(false);
        setShowSketches(true);
        setShowApplications(false);
        setShowDescription(false);
        setActiveSection('sketches');
        setClickedSection('sketches');
    };

    const handleApplicationsClick = () => {
        setShowProjects(false);
        setShowSketches(false);
        setShowApplications(true);
        setShowDescription(false);
        setActiveSection('applications');
        setClickedSection('applications');
    };

    const handleNameClick = () => {
        setShowDescription(true);
        setFastAnimation(true); // Aquí establecemos fastAnimation como verdadero
        setShowProjects(false);
        setShowSketches(false);
        setShowApplications(false);

    };


    return (
        <div>
            <motion.h1
                onClick={handleNameClick}
                className="name-text custom-margin-top"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Gimena Motto
            </motion.h1>
            <motion.h1
                onClick={handleNameClick}
                className="developer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                DESARROLLADORA WEB FULL STACK
            </motion.h1>
            <div className="menu-text">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.3 }}
                    onClick={handleProjectsClick}
                    className={`menu-link ${activeSection === 'projects' ? 'active' : ''} ${clickedSection === 'projects' ? 'clicked' : ''}`}
                >
                    PROYECTOS WEB
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.6 }}
                    onClick={handleApplicationsClick}
                    className={`menu-link ${activeSection === 'applications' ? 'active' : ''} ${clickedSection === 'applications' ? 'clicked' : ''}`}
                >
                    APLICACIONES ESCRITORIO
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.9 }}
                    onClick={handleSketchesClick}
                    className={`menu-link ${activeSection === 'sketches' ? 'active' : ''} ${clickedSection === 'sketches' ? 'clicked' : ''}`}
                >
                    BOCETOS EN P5.JS
                </motion.p>
            </div>


            <div className="icon-container custom-margin-top">
                <motion.a
                    href="https://github.com/GimenaMotto?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                >
                    <Github size={32} />
                </motion.a>
                <motion.a
                    href="mailto:gimenapimba@gmail.com"
                    className="icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8, delay: 1.9 }}
                >
                    <Envelope size={32} />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/gimena-motto-b58498202/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8, delay: 1.9 }}
                >
                    <Linkedin size={32} />
                </motion.a>
            </div>

        </div >
    );
};

export default LeftColumn;
