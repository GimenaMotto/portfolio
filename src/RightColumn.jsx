import React from 'react';
import Sketches from './Sketches';
import Cards from './Cards';
import Cards2 from './Cards2';

const RightColumn = ({ showProjects, showSketches, showApplications }) => {
    return (
        <div>
            {showProjects && (
                <div>
                    <Cards />
                </div>
            )}
            {showApplications && (
                <div>
                    <Cards2 />
                </div>
            )}
            {showSketches && (
                <div>
                    <Sketches />
                </div>
            )}

        </div>
    );
}

export default RightColumn;
