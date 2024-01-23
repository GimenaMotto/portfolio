import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const ColoredSquareSketch = () => {
    const canvasRef = useRef(null);
    let sketchInstance = null;
    const numRows = 10;
    const numCols = 10;
    const squareSize = 50;


    const marginStyle = {

        marginTop: '240px',
    };

    useEffect(() => {
        sketchInstance = new p5(sketch, canvasRef.current);

        return () => {
            sketchInstance.remove();
        };
    }, []);

    const sketch = (p) => {
        let grid = [];
        let selectedSquare = null;

        p.setup = () => {
            p.createCanvas(500, 500);
            p.background(255);
            p.noStroke();

            for (let i = 0; i < numRows; i++) {
                for (let j = 0; j < numCols; j++) {
                    const x = j * squareSize;
                    const y = i * squareSize;
                    const grayValue = p.random(255);
                    const color = p.color(grayValue, grayValue, grayValue);

                    grid.push({
                        x: x,
                        y: y,
                        size: squareSize,
                        originalColor: color,
                        currentColor: color,
                    });
                }
            }
        };

        p.draw = () => {
            p.background(255);

            grid.forEach((square) => {
                p.fill(square.currentColor);
                p.rect(square.x, square.y, square.size, square.size);
            });
        };

        p.mouseMoved = () => {
            grid.forEach((square) => {
                if (
                    p.mouseX > square.x &&
                    p.mouseX < square.x + square.size &&
                    p.mouseY > square.y &&
                    p.mouseY < square.y + square.size
                ) {
                    square.currentColor = p.color(p.random(255), p.random(255), p.random(255));
                } else {
                    square.currentColor = square.originalColor;
                }
            });
        };

        p.mousePressed = () => {
            grid.forEach((square) => {
                if (
                    p.mouseX > square.x &&
                    p.mouseX < square.x + square.size &&
                    p.mouseY > square.y &&
                    p.mouseY < square.y + square.size
                ) {
                    selectedSquare = square;
                    square.originalColor = square.currentColor;
                }
            });
        };

        p.mouseReleased = () => {
            selectedSquare = null;
        };
    };

    return (
        <div style={marginStyle}>
            < p >
                Pasa el mouse sobre los cuadrados para cambiar el color y haz click.
            </p >
            <div ref={canvasRef} />
        </div >
    );
};

export default ColoredSquareSketch;
