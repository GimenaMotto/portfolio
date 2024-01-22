import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const TrianglesSketch = () => {
    const canvasRef = useRef(null);
    let sketchInstance = null;

    useEffect(() => {
        sketchInstance = new p5(sketch, canvasRef.current);

        return () => {
            sketchInstance.remove();
        };
    }, []);

    const sketch = (p) => {
        let triangles = [];

        p.setup = () => {
            p.createCanvas(500, 500);
            p.background(0);
            p.noStroke();


            for (let i = 0; i < 5; i++) {
                const randomTriangle = createRandomTriangle();
                triangles.push(randomTriangle);
            }
        };

        p.draw = () => {
            p.background(0, 5);

            triangles.forEach((triangle) => {
                p.fill(triangle.color);
                p.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3);

                const speedMultiplier = 3;
                triangle.x1 += p.random(-1, 1) * speedMultiplier;
                triangle.y1 += p.random(-1, 1) * speedMultiplier;
                triangle.x2 += p.random(-1, 1) * speedMultiplier;
                triangle.y2 += p.random(-1, 1) * speedMultiplier;
                triangle.x3 += p.random(-1, 1) * speedMultiplier;
                triangle.y3 += p.random(-1, 1) * speedMultiplier;
            });
        };

        p.mousePressed = () => {
            const newTriangle = createRandomTriangle(p.mouseX, p.mouseY);
            triangles.push(newTriangle);
        };


        const createRandomTriangle = (x = p.random(p.width), y = p.random(p.height)) => {
            return {
                x1: x,
                y1: y,
                x2: x + p.random(-20, 20),
                y2: y + p.random(-20, 20),
                x3: x + p.random(-20, 20),
                y3: y + p.random(-20, 20),
                color: p.color(p.random(255), p.random(255), p.random(255)),
            };
        };
    };

    return (
        <div>
            <p>Dibuja más triángulos haciendo click en el lienzo.</p>
            <div ref={canvasRef} />
        </div>
    );
};

export default TrianglesSketch;
