import React, { useState } from 'react';
import './LeftColumn.css';
import { Github, Envelope, Linkedin } from 'react-bootstrap-icons';

const LeftColumn = ({ setShowProjects, setShowSketches, setShowApplications }) => {
    const handleProjectsClick = () => {
        setShowProjects(true);
        setShowSketches(false);
        setShowApplications(false);
    };

    const handleSketchesClick = () => {
        setShowProjects(false);
        setShowSketches(true);
        setShowApplications(false);
    };

    const handleApplicationsClick = () => {
        setShowProjects(false);
        setShowSketches(false);
        setShowApplications(true);
    };


    return (
        <div>
            <h1 className="name-text custom-margin-top">Gimena Motto</h1>

            <div className="menu-text">
                <p onClick={handleProjectsClick} className="menu-link">__PROYECTOS WEB</p>
                <p onClick={handleApplicationsClick} className="menu-link">__APLICACIONES ESCRITORIO</p>
                <p onClick={handleSketchesClick} className="menu-link">__BOCETOS EN P5.JS</p>
            </div>
            <div className="icon-container custom-margin-top">
                <a href="https://github.com/GimenaMotto?tab=repositories" target="_blank" rel="noopener noreferrer" className="icon">
                    <Github size={32} />
                </a>
                <a href="mailto:gimenapimba@gmail.com" className="icon">
                    <Envelope size={32} />
                </a>
                <a href="https://www.linkedin.com/in/gimena-motto-b58498202/" target="_blank" rel="noopener noreferrer" className="icon">
                    <Linkedin size={32} />
                </a>
            </div>
        </div >
    );
};

export default LeftColumn;

