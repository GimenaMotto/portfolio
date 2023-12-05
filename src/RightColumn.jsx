import React from 'react';
import Sketches from './Sketches';
import Cards from './Cards';

const RightColumn = ({ showProjects, showSketches }) => {
    return (
        <div>
            {showProjects && (
                <div>
                    <Cards /> {/* Aquí va el componente de las Cards */}
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
