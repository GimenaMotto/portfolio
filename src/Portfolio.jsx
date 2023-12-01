import React from 'react'
import './Portfolio.css'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="left-column">
                <LeftColumn />
            </div>
            <div className="right-column">
                <RightColumn />
            </div>
        </div>
    );
}

export default Portfolio
