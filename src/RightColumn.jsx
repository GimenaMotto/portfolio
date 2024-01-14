import React from 'react';
import Sketches from './Sketches';
import Cards from './Cards';
import Cards2 from './Cards2';

const RightColumn = ({ showProjects, showSketches, showApplications }) => {
    return (
        <div>
            {showProjects && (
                <div>
                    <Cards /> {/* Aquí va el componente de las Cards */}
                </div>
            )}
            {showApplications && (
                <div>
                    <Cards2 /> {/* Aquí va el componente de las Cards2 */}
                </div>
            )}
            {showSketches && (
                <div>
                    <Sketches /> {/* Aquí va el componente de los Sketches */}
                </div>
            )}

        </div>
    );
}

export default RightColumn;
