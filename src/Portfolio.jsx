import React, { useState } from 'react';
import './Portfolio.css'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Portfolio = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [showSketches, setShowSketches] = useState(false);

    return (
        <div className="portfolio">
            <div className="left-column">
                <LeftColumn setShowProjects={setShowProjects} setShowSketches={setShowSketches} />
            </div>
            <div className="right-column">
                <RightColumn showProjects={showProjects} showSketches={showSketches} />
            </div>
        </div>
    );
}

export default Portfolio;
