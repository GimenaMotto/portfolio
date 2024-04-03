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
    const [isMouseOver, setIsMouseOver] = useState(false);

    const { toggleTheme, theme } = useTheme();

    return (
        <div className={`portfolio ${theme}`}>
            <button
                onClick={toggleTheme}
                className="theme-button"
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
            >
                {theme === 'light' ? (
                    <>
                        {isMouseOver ? <span style={{ marginLeft: '5px', fontSize: '14px' }}>Dark theme</span> : <Moon size={20} />} {/* Renderizar texto o ícono basado en el estado */}
                    </>
                ) : (
                    <>
                        {isMouseOver ? <span style={{ marginLeft: '5px', fontSize: '14px' }}>Light theme</span> : <Sun size={20} />} {/* Renderizar texto o ícono basado en el estado */}
                    </>
                )}
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
