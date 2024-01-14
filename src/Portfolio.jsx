import React, { useState } from 'react';
import './Portfolio.css'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Portfolio = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [showSketches, setShowSketches] = useState(false);
    const [showApplications, setShowApplications] = useState(false);

    return (
        <div className="portfolio">
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
