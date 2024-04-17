import React from 'react';
import Sketches from './Sketches';
import Cards from './Cards';
import Cards2 from './Cards2';
import Description from './Description'; // Importa el componente Description

const RightColumn = ({ showProjects, showSketches, showApplications, showDescription }) => {
    return (
        <div>
            {showDescription && (
                <div>
                    <Description />
                </div>
            )} {/* Renderiza la descripción si showDescription es true */}
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
