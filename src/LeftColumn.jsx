import React, { useState } from 'react';
import './LeftColumn.css';

const LeftColumn = ({ setShowProjects, setShowSketches }) => {
    const handleProjectsClick = () => {
        setShowProjects(true);
        setShowSketches(false);
    };

    const handleSketchesClick = () => {
        setShowProjects(false);
        setShowSketches(true);
    };

    return (
        <div>
            <h1 className="name-text custom-margin-top">Gimena Motto</h1>
            <div className="menu-text">
                <p onClick={handleProjectsClick}>__PROYECTOS</p>
                <p onClick={handleSketchesClick}>__BOCETOS EN P5.JS</p>
            </div>
        </div>
    );
};

export default LeftColumn;
