import React, { useState } from 'react';
import './Portfolio.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { useTheme } from './useTheme';
import { Sun, Moon } from 'react-bootstrap-icons';

const Portfolio = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [showSketches, setShowSketches] = useState(false);
    const [showApplications, setShowApplications] = useState(false);

    const { toggleTheme, theme } = useTheme();

    return (
        <div className={`portfolio ${theme}`}>
            <button onClick={toggleTheme} className="theme-button">
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <div className="left-column">
                <LeftColumn setShowProjects={setShowProjects} setShowApplications={setShowApplications} setShowSketches={setShowSketches} />
            </div>
            <div className="right-column">
                <RightColumn showProjects={showProjects} showApplications={showApplications} showSketches={showSketches} />
            </div>
        </div>
    );
}

export default Portfolio;

