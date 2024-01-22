import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const CirclesSketch = () => {
    const canvasRef = useRef(null);
    let sketchInstance = null;

    const marginStyle = {

        marginTop: '70px',
    };

    useEffect(() => {
        sketchInstance = new p5(sketch, canvasRef.current);

        return () => {
            sketchInstance.remove();
        };
    }, []);

    const sketch = (p) => {
        let circles = [];

        p.setup = () => {
            p.createCanvas(500, 500);
            p.background(0);
            p.noStroke();


            for (let i = 0; i < 5; i++) {
                const randomCircle = createRandomCircle();
                circles.push(randomCircle);
            }
        };

        p.draw = () => {
            p.background(0, 5);

            circles.forEach((circle) => {
                p.fill(circle.color);
                p.ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);


                const speedMultiplier = 1;
                circle.x += circle.directionX * p.random(2, 5) * speedMultiplier;
                circle.y += circle.directionY * p.random(2, 5) * speedMultiplier;


                if (circle.x - circle.radius > p.width || circle.x + circle.radius < 0) {
                    circle.x = p.random(p.width);
                }

                if (circle.y - circle.radius > p.height || circle.y + circle.radius < 0) {
                    circle.y = p.random(p.height);
                }
            });
        };

        p.mousePressed = () => {
            changeColorSpectrum();
        };


        const changeColorSpectrum = () => {
            circles.forEach((circle) => {
                if (circle.color.levels[0] >= 128) {

                    circle.color = p.color(p.random(255), p.random(255), p.random(0, 128));
                } else {

                    circle.color = p.color(p.random(255), p.random(128, 255), p.random(0, 128));
                }
            });
        };


        const createRandomCircle = () => {
            const directionX = p.random() > 0.5 ? 1 : -1;
            const directionY = p.random() > 0.5 ? 1 : -1;
            const x = p.random(p.width);
            const y = p.random(p.height);
            const radius = p.random(20, 40);
            const color = p.color(p.random(128, 255), p.random(0, 128), p.random(128, 255));

            return { x, y, radius, color, directionX, directionY };
        };
    };

    return (
        <div style={marginStyle}>
            <p>Click apra cambiar el espectro de colores.</p>
            <div ref={canvasRef} />
        </div>
    );
};

export default CirclesSketch;
