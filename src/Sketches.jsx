import React from 'react';
import VasarelySketch from './VasarelySketch';
import RandomWalkerSketch from './RandomWalkerSketch';
import MondrianSketch from './MondrianSketch';
import VasarelySketch1 from './VasarelySketch1';
import TrianglesSketch from './TrianglesSketch';
import CirclesSketch from './CirclesSketch';

const Sketches = () => {

    const sketchStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px auto',
        textAlign: 'center',
    }

    const firstSketchStyle = {
        ...sketchStyle,
        width: '500px',
        height: '500px',
        marginTop: '100px',
    };
    return (
        <div>
            <div style={firstSketchStyle}>
                <TrianglesSketch />
            </div>
            <div style={{ ...sketchStyle, width: '500px', height: '500px' }}>
                <CirclesSketch />
            </div>
            <div style={{ ...sketchStyle, width: '500px', height: '500px' }}>
                <RandomWalkerSketch />
            </div>
            <div style={{ ...sketchStyle, width: '400px', height: '450px' }}>
                <MondrianSketch />
            </div>
            <div style={{ ...sketchStyle, width: '690px', height: '730px' }}>
                <VasarelySketch />
            </div>
            <div style={{ ...sketchStyle, width: '700px', height: '700px' }}>
                <VasarelySketch1 />
            </div>


        </div>
    )
}

export default Sketches