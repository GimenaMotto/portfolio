import React, { useState } from 'react';
import './LeftColumn.css'; // Importa tu archivo CSS
import { Github, Envelope, Linkedin } from 'react-bootstrap-icons';

const LeftColumn = ({ setShowProjects, setShowSketches, setShowApplications }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [clickedSection, setClickedSection] = useState(null);

    const handleProjectsClick = () => {
        setShowProjects(true);
        setShowSketches(false);
        setShowApplications(false);
        setActiveSection('projects'); // Establece la sección activa como 'projects'
        setClickedSection('projects'); // Marca la sección como clicada
    };

    const handleSketchesClick = () => {
        setShowProjects(false);
        setShowSketches(true);
        setShowApplications(false);
        setActiveSection('sketches'); // Establece la sección activa como 'sketches'
        setClickedSection('sketches'); // Marca la sección como clicada
    };

    const handleApplicationsClick = () => {
        setShowProjects(false);
        setShowSketches(false);
        setShowApplications(true);
        setActiveSection('applications'); // Establece la sección activa como 'applications'
        setClickedSection('applications'); // Marca la sección como clicada
    };

    return (
        <div>
            <h1 className="name-text custom-margin-top">Gimena Motto</h1>

            <div className="menu-text">
                <p onClick={handleProjectsClick} className={`menu-link ${activeSection === 'projects' ? 'active' : ''} ${clickedSection === 'projects' ? 'clicked' : ''}`}>PROYECTOS WEB</p>
                <p onClick={handleApplicationsClick} className={`menu-link ${activeSection === 'applications' ? 'active' : ''} ${clickedSection === 'applications' ? 'clicked' : ''}`}>APLICACIONES ESCRITORIO</p>
                <p onClick={handleSketchesClick} className={`menu-link ${activeSection === 'sketches' ? 'active' : ''} ${clickedSection === 'sketches' ? 'clicked' : ''}`}>BOCETOS EN P5.JS</p>
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
